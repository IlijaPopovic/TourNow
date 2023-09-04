import React from "react";
import "../style/AccomodationCard.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  const limitStringLength = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + "...";
    }
  };

  const handleRoomDelete = () => {
    const apiUrl = process.env.REACT_APP_API_URL + "deleteRoom.php";
    axios
      .post(
        apiUrl,
        { id: props.id },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        if (response.data.status === "deleted") {
          alert("Deleted");
          //window.history.back();
          navigate("/");
        } else {
          alert("Error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const deleteButton =
    localStorage.getItem("admin") || localStorage.getItem("organisation") ? (
      <div>
        <br />
        <button onClick={handleRoomDelete}>Delete</button>
        <br />
      </div>
    ) : (
      <></>
    );
  const changeLink =
    localStorage.getItem("admin") || localStorage.getItem("organisation") ? (
      <NavLink to={"/ChangeRoom/" + props.id}>Change</NavLink>
    ) : null;

  return (
    <div
      className={`accomodationCard ${props.isSelected ? "selected" : ""}`}
      onClick={() => props.handleClick(props.id)}
    >
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
        {deleteButton}
        {changeLink}
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
