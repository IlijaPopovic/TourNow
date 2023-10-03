import React from "react";
import { format } from "date-fns";
import "../style/TransportCard.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TransportCard = (props) => {
  const navigate = useNavigate();

  const handleTransportDelete = () => {
    const apiUrl = process.env.REACT_APP_API_URL + "deleteTransport.php";
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
        <button onClick={handleTransportDelete}>Delete</button>
        <br />
      </div>
    ) : (
      <></>
    );
  const changeLink =
    localStorage.getItem("admin") || localStorage.getItem("organisation") ? (
      <NavLink to={"/ChangeTransport/" + props.id}>Change</NavLink>
    ) : null;

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
          {"Departure: " +
            format(new Date(props.dateStart), "dd.MM.yyyy. HH:mm")}
        </p>
        <p className="transport-dateEnd">
          {"Arrival: " + format(new Date(props.dateEnd), "dd.MM.yyyy. HH:mm")}
        </p>
        <p className="transport-description">{props.description}</p>
        <p className="transport-type">{props.type}</p>
        {deleteButton}
        {changeLink}
      </div>
    </div>
  );
};

export default TransportCard;
