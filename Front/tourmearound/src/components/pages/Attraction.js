import React from "react";
import Map from "../segments/Map";
import { NavLink } from "react-router-dom";
import "../style/Tour.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const Attraction = () => {
  const navigate = useNavigate();
  const currentURL = window.location.href;
  const urlSegments = currentURL.split("/");
  const lastSegment = urlSegments[urlSegments.length - 1];
  const dataSend = { id: lastSegment };
  const [dataR, setData] = React.useState([]);

  React.useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL + "getAttraction.php";
    axios
      .post(apiUrl, dataSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setData(response.data[0]);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (dataR.length === 0) {
    return <p>Loading...</p>;
  }

  const createAttractionReservatuibValues = {
    user_id: localStorage.getItem("user"),
    attraction_id: lastSegment,
  };

  const handleReservationButtonClick = () => {
    //console.log(createAttractionValues);
    axios
      .post(
        process.env.REACT_APP_API_URL + "createAttractionReservation.php",
        createAttractionReservatuibValues,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data["status"] === "inserted") {
          navigate("/");
          // window.location.reload();
          alert("Reserved");
        } else {
          alert("Error");
        }
      });
  };

  const handleAttractionDelete = () => {
    const apiUrl = process.env.REACT_APP_API_URL + "deleteAttraction.php";
    axios
      .post(
        apiUrl,
        { id: lastSegment },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        if (response.data.status === "deleted") {
          alert("Obrisano");
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
        <button onClick={handleAttractionDelete}>Delete attraction</button>
        <br />
      </div>
    ) : (
      <></>
    );

  const changeLink =
    localStorage.getItem("admin") || localStorage.getItem("organisation") ? (
      <div>
        <NavLink to={"/ChangeAttraction/" + lastSegment}>
          Change Attraction
        </NavLink>
      </div>
    ) : (
      <></>
    );

  const reserveButton = localStorage.getItem("user") ? (
    <div>
      <button onClick={handleReservationButtonClick}>Reserve</button>
    </div>
  ) : (
    <div className="link-button">
      <NavLink to="/UserProfile">Log in</NavLink>
    </div>
  );

  const coordinates = dataR["coordinates"].split(",");
  return (
    <div>
      <div>
        <img
          src={`${process.env.REACT_APP_API_URL}${dataR["image"]}`}
          alt="poster"
          className="tour-poster"
        />
      </div>
      <div>{deleteButton}</div>
      <div>{changeLink}</div>
      <h1>{dataR["name"]}</h1>
      <p>Conutry: {dataR["destination"] + " (" + dataR["country"] + ")"}</p>
      <p>Price: {dataR["price"]}</p>
      <p>
        Date start:{" "}
        {format(new Date(dataR["date_start"]), "dd.MM.yyyy. HH:mm") + "h"}
      </p>
      <p>
        Date End:{" "}
        {format(new Date(dataR["date_end"]), "dd.MM.yyyy. HH:mm") + "h"}
      </p>
      <p>{dataR["description"]}</p>
      <div className="map-main">
        <Map coordinates={coordinates} className="maps" />
      </div>
      <div>{reserveButton}</div>
    </div>
  );
};

export default Attraction;
