import React from "react";
import "../style/AccomodationCard.css";

const Card = (props) => {
  const limitStringLength = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + "...";
    }
  };

  return (
    <div className="accomodationCard">
      <div className="accomodationCard-poster">
        <img
          src={props.image}
          alt="Home"
          className="accomodation-poster-image"
        />
      </div>
      <div className="accomodationCard-data">
        <h2 className="title">{props.title}</h2>
        <p className="description">
          {limitStringLength(props.description, 250)}
        </p>
      </div>
      <div className="accomodationCard-more">
        <p className="subtitle">{props.subtitle}</p>
        <p className="stars">{props.stars}</p>
        <p className="bedsNumber">{props.bedsNumber}</p>
        <p className="service">{props.service}</p>
      </div>
    </div>
  );
};

export default Card;
