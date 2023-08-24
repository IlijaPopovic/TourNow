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

  const [reserved, setReserved] = React.useState(false);
  const handleReservationButtonClick = () => {
    setReserved((reserved) => !reserved);
    console.log(props.button);
    console.log(reserved);
  };

  const button = (
    <div>
      <br />
      <button onClick={handleReservationButtonClick}>Rezervisi</button>
    </div>
  );

  const whenReserved = <p>Reseved</p>;

  const showReservationButton = reserved ? whenReserved : button;

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
          {props.button && showReservationButton}
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
