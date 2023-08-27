import React from "react";
import { format } from "date-fns";
import Explore from "./Explore";
import "../style/Tour.css";
import axios from "axios";

const Organisation = () => {
  const currentURL = window.location.href;
  const urlSegments = currentURL.split("/");
  const lastSegment = urlSegments[urlSegments.length - 1];
  const dataSend = { id: lastSegment };

  const [dataR, setData] = React.useState([]);

  React.useEffect(() => {
    const apiUrl = "http://localhost/TourMeAround/user/getOrganisation.php";
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
      <p>Mail: {dataR["mail"]}</p>
      <p>{dataR["about"]}</p>

      <h2>Organisation</h2>
      {/* 
      <div className="header-title-filter">
        <h2>Pick your Transport</h2>
      </div>
      <div className="transports">{transport}</div> */}
      <Explore organisationID={lastSegment} />
    </div>
  );
};

export default Organisation;
