import React from "react";
import Explore from "./Explore";
import Map from "../segments/Map";
import Attractions from "./Attractions";
import { NavLink } from "react-router-dom";
import "../style/Tour.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CommentComponent from "../segments/CommentComponent";

const Destination = () => {
  const navigate = useNavigate();
  const currentURL = window.location.href;
  const urlSegments = currentURL.split("/");
  const lastSegment = urlSegments[urlSegments.length - 1];
  const dataSend = { id: lastSegment };
  //console.log("LAST SEGMENT: " + lastSegment);
  const [dataR, setData] = React.useState([]);

  React.useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL + "getDestination.php";
    axios
      .post(apiUrl, dataSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setData(response.data[0]);
        //console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleDestinationDelete = () => {
    const apiUrl = process.env.REACT_APP_API_URL + "deleteDestination.php";
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

  const deleteButton = (
    <div>
      <br />
      <button onClick={handleDestinationDelete}>Delete destination</button>
      <br />
    </div>
  );

  if (dataR.length === 0) {
    return <p>Loading...</p>;
  }
  const coordinates = dataR["coordinates"].split(",");
  return (
    <div>
      <div className="section">
        <img
          src={`${process.env.REACT_APP_API_URL}${dataR["image"]}`}
          alt="poster"
          className="tour-poster"
        />
      </div>
      <div>
        {localStorage.getItem("admin") || localStorage.getItem("organisation")
          ? deleteButton
          : null}
      </div>
      <div>
        {localStorage.getItem("admin") ||
        localStorage.getItem("organisation") ? (
          <NavLink to={"/ChangeDestination/" + lastSegment}>
            Change Destination
          </NavLink>
        ) : null}
      </div>
      <div className="section">
        <h1>{dataR["name"]}</h1>
        <p>Conutry: {dataR["country"]}</p>
        <p>{dataR["description"]}</p>
      </div>
      <div className="map-main section">
        <Map coordinates={coordinates} className="maps" />
      </div>
      {localStorage.getItem("user") && <CommentComponent />}
      <div className="section">
        <Explore destinationID={lastSegment} />
      </div>
      <div className="section">
        <Attractions destinationID={lastSegment} className="section" />
      </div>
    </div>
  );
};

export default Destination;
