import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  return (
    <NavLink to={props.link}>
      <div className="Card">
        <div className="poster">
          <img src={props.image} alt="Home" className="poster-image" />
        </div>
        <div className="data">
          <h2 className="title">{props.title}</h2>
          <p className="date">{props.subtitle}</p>
          <p className="description">{props.about}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
