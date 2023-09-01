import React from "react";
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
    const apiUrl = process.env.REACT_APP_API_URL + "getOrganisation.php";
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

  if (dataR.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="main-image">
        <img
          src={`${process.env.REACT_APP_API_URL}${dataR["image"]}`}
          alt="poster"
          className="tour-poster"
        />
      </div>
      <h1>{dataR["name"]}</h1>
      <p>Mail: {dataR["mail"]}</p>
      <p>{dataR["about"]}</p>

      <Explore organisationID={lastSegment} />
    </div>
  );
};

export default Organisation;
