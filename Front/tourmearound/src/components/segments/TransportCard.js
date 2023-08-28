import React from "react";
import "../style/TransportCard.css";

const TransportCard = (props) => {
  //console.log(props.id);
  return (
    <div
      className={`TransportCard ${props.isSelected ? "selected" : ""}`}
      onClick={() => props.handleClick(props.id)}
    >
      <div className="transport-poster">
        {/* <img src={props.image} alt="Home" className="transport-poster-image" /> */}
      </div>
      <div className="transport-data">
        <h3 className="transport-title">{props.title}</h3>
        <p className="transport-dateStart">{props.dateStart}</p>
        <p className="transport-dateEnd">{props.dateEnd}</p>
        <p className="transport-description">{props.description}</p>
        <p className="transport-type">{props.type}</p>
      </div>
    </div>
  );
};

export default TransportCard;
