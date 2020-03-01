import React from "react";
import heart from "../assets/heart.svg";
import heartFilled from "../assets/heart-filled.svg";

function Cards(props) {
  const handleClick = item => {
    if (checkIfFavourite(item)) {
      // remove item from favourites
      props.setFavourites(
        props.favourites.filter(newItem => {
          return newItem.id !== item.id;
        })
      );
    } else {
      // add item in favourites
      props.setFavourites([...props.favourites, item]);
    }
  };

  const checkIfFavourite = item => {
    for (let i = 0; i < props.favourites.length; i++) {
      if (props.favourites[i].id === item.id) {
        return true;
      }
    }

    return false;
  };

  const items = props.activeMenu === "destinations" ? props.destinations : props.favourites;

  if (items.length !== 0) {
    return (
      <ul className="cards">
        {items.map(item => {
          return (
            <li className="card" key={item.id}>
              <div className="card__image" style={{ backgroundImage: `url(${item.image})` }}></div>
              <div className="card__details">
                <div className="card__details-top">
                  <h2 className="card__title">
                    {item.slug.charAt(0).toUpperCase() + item.slug.slice(1)}
                  </h2>
                  <div className="card__like" onClick={() => handleClick(item)}>
                    <img src={checkIfFavourite(item) ? heartFilled : heart} alt="Like" />
                  </div>
                </div>
                <div className="card__summary">{item.summary}</div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return (
      <ul className="cards">
        <li>No Items</li>
      </ul>
    );
  }
}

export default Cards;
