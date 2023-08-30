import React from "react";
import { format } from "date-fns";
import "../style/TransportCard.css";

const TransportCard = (props) => {
  //console.log(props.id);
  return (
    <div
      className={`TransportCard ${props.isSelected ? "selected" : ""}`}
      onClick={() => props.handleClick(props.id)}
    >
      <div className="transport-poster"></div>
      <div className="transport-data">
        <h3 className="transport-title">{props.title}</h3>
        <p className="transport-dateStart">
          {format(new Date(props.dateStart), "dd.MM.yyyy. HH:mm")}
        </p>
        <p className="transport-dateEnd">
          {format(new Date(props.dateEnd), "dd.MM.yyyy. HH:mm")}
        </p>
        <p className="transport-description">{props.description}</p>
        <p className="transport-type">{props.type}</p>
      </div>
    </div>
  );
};

export default TransportCard;
