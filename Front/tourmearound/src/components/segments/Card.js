import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const limitStringLength = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + "...";
    }
  };

  return (
    <NavLink to={props.link}>
      <div className="Card">
        <div className="poster">
          <img src={props.image} alt="Home" className="poster-image" />
        </div>
        <div className="data">
          <h2 className="title">{props.title}</h2>
          <p className="subtitle">{props.subtitle}</p>
          <p className="description">
            {limitStringLength(props.description, 300)}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
