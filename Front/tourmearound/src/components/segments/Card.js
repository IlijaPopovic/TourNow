import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "../style/Card.css";
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

  const handleDeleteOranisationButtonClick = () => {
    axios
      .post(
        process.env.REACT_APP_API_URL + "deleteOrganisation.php",
        { id: props.deleteOranisationButtonID },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        if (response.data.status === "deleted") {
          alert("Organisation deleted");
          navigate("/");
        } else {
          alert("error");
        }
      });
  };

  const handleDeactivatiUserButtonClick = () => {
    axios
      .post(
        process.env.REACT_APP_API_URL + "deactivateOrActivateUser.php",
        { id: props.deactivationUserButtonID },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        //console.log(response.data);
        if (response.data.status === "updated") {
          alert("Changed");
          //window.window.location.reload();
          navigate("/");
        } else {
          alert("error");
        }
      });
  };

  const deleteOranisationButton = (
    <div>
      <br />
      <button onClick={handleDeleteOranisationButtonClick}>Delete</button>
    </div>
  );

  const deactivatiUserButton = (
    <div>
      <br />
      <button onClick={handleDeactivatiUserButtonClick}>
        Deactivate / Activate
      </button>
    </div>
  );

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
          {props.deleteOranisationButtonID && deleteOranisationButton}
          {props.deactivationUserButtonID && deactivatiUserButton}
          {props.bonus}
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
