import React, { useState, useEffect } from "react";
import Header from "./Header";
import Cards from "./Cards";
import { Loading } from "./Loading";

function Main() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [destinations, setDestinations] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/destinations");
      const result = await response.json();
      setDestinations(result.filter(item => item.locale === "en"));
      setIsLoaded(true);
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
      {isLoaded ? (
        <Cards
          activeMenu={activeMenu}
          destinations={destinations}
          favourites={favourites}
          setFavourites={setFavourites}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Main;
