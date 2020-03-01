import React from "react";
import heart from "../assets/heart.svg";
import heartFilled from "../assets/heart-filled.svg";

function Cards(props) {
  const addFavourite = item => {
    props.setFavourites([...props.favourites, item]);
  };

  const removeFavourite = item => {
    props.setFavourites(
      props.favourites.filter(newItem => {
        return newItem.id !== item.id;
      })
    );
  };

  const checkIfFavourite = item => {
    if (props.favourites.filter(newItem => newItem.id === item.id).length !== 0) {
      return true;
    }

    return false;
  };

  const handleClick = item => {
    if (checkIfFavourite(item)) {
      removeFavourite(item);
    } else {
      addFavourite(item);
    }
  };

  const handleDoubleClick = item => {
    if (checkIfFavourite(item)) {
      // do nothing
    } else {
      addFavourite(item);
    }
  };

  const items = props.activeMenu === "destinations" ? props.destinations : props.favourites;

  if (items.length !== 0) {
    return (
      <ul className="cards">
        {items.map(item => {
          return (
            <li className="card" key={item.id} onDoubleClick={() => handleDoubleClick(item)}>
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
