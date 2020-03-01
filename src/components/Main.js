import React, { useState, useEffect } from "react";
import Header from "./Header";
import Cards from "./Cards";
import { Loading } from "./Loading";

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch("http://localhost:3001/destinations");
        const result = await response.json();
        // keep only the en locales
        setDestinations(result.filter(item => item.locale === "en"));
      } catch (error) {
        // console.log(error); print in the console if there is a Network Error
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  const [activeMenu, setActiveMenu] = useState("destinations");

  const [favourites, setFavourites] = useState([]);

  const title = activeMenu === "destinations" ? "Destinations" : "Favourites";

  return (
    <div className="site">
      <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <h1 className="site__title">{title}</h1>
      {isError && <p style={{ textAlign: "center" }}>Something went wrong ...</p>}
      {isLoading ? (
        <Loading />
      ) : (
        <Cards
          activeMenu={activeMenu}
          destinations={destinations}
          favourites={favourites}
          setFavourites={setFavourites}
        />
      )}
    </div>
  );
}

export default Main;
