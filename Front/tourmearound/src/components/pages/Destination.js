import React from "react";
import Explore from "./Explore";
import Map from "../segments/Map";
import Attractions from "./Attractions";
import "../style/Tour.css";
import axios from "axios";

const Organisation = () => {
  const currentURL = window.location.href;
  const urlSegments = currentURL.split("/");
  const lastSegment = urlSegments[urlSegments.length - 1];
  const dataSend = { id: lastSegment };

  const [dataR, setData] = React.useState([]);

  React.useEffect(() => {
    const apiUrl = "http://localhost/TourMeAround/user/getDestination.php";
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
  const coordinates = dataR["coordinates"].split(",");
  return (
    <div>
      <div>
        <img
          src={`http://localhost/TourMeAround/user/${dataR["image"]}`}
          alt="poster"
          className="tour-poster"
        />
      </div>
      <h1>{dataR["name"]}</h1>
      <p>Conutry: {dataR["country"]}</p>
      <p>{dataR["description"]}</p>
      <div className="map-main">
        <Map coordinates={coordinates} className="maps" />
      </div>
      <Explore destinationID={lastSegment} />
      <Attractions destinationID={lastSegment} />
    </div>
  );
};

export default Organisation;
