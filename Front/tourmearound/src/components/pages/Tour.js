import React from "react";
import Card from "../segments/Card";
import TransportCard from "../segments/TransportCard";
import { format } from "date-fns";
import AccomodationCard from "../segments/AccomodationCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMap,
  faBus,
  faPlane,
  faShip,
  faCar,
  faTrain,
  faStar,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Tour.css";
import axios from "axios";

const Tour = () => {
  const currentURL = window.location.href;
  const urlSegments = currentURL.split("/");
  const lastSegment = urlSegments[urlSegments.length - 1];
  const dataSend = { id: lastSegment };

  const [dataR, setData] = React.useState([]);
  const [activeTransportFilter, setActiveTransportFilter] = React.useState("");
  const [activeAccomodationFilter, setActiveAccomodationFilter] =
    React.useState("");

  React.useEffect(() => {
    const apiUrl = "http://localhost/TourMeAround/user/getTour.php";
    axios
      .post(apiUrl, dataSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setData(response.data);
        console.log(response);
        console.log(response.data[2][0]["name"]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (dataR.length === 0) {
    return <p>Loading...</p>;
  }

  const handleTransportFilterClick = (filter) => {
    setActiveTransportFilter(filter);
  };

  const handleAccomodationFilterClick = (filter) => {
    setActiveAccomodationFilter(filter);
  };

  const transportData = dataR[4];
  const filteredTransport = transportData.filter((transport) => {
    if (activeTransportFilter === "") {
      return true;
    }
    return transport["type"] === activeTransportFilter;
  });

  const transport = filteredTransport.map((transport, index) => (
    <TransportCard
      key={index}
      image={require("./placeholder.jpg")}
      title={transport["name"]}
      dateStart={`Polazak: ${transport["start"]}`}
      dateEnd={`Dolazak: ${transport["end"]}`}
      description={`Cena: ${transport["price"]}`}
    />
  ));

  const accomadationData = dataR[5];
  const filteredAccomadation = accomadationData.filter((accomadation) => {
    if (activeAccomodationFilter === "") {
      return true;
    }
    return accomadation["stars"] === activeAccomodationFilter;
  });

  const acomadation = filteredAccomadation.map((acomadation, index) => (
    <AccomodationCard
      key={index} //
      image={`http://localhost/TourMeAround/user/${acomadation["picture"]}`}
      title={acomadation["name"]}
      subtitle={`Hotel: ${acomadation["accommodation_name"]}`}
      description={acomadation["about"]}
      bedsNumber={`Bed number: ${acomadation["beds_number"]}`}
      service={`Type: ${acomadation["service"]}`}
      stars={`Number of Stars: ${acomadation["stars"]}`}
    />
  ));

  return (
    <div>
      <div>
        <img
          src={`http://localhost/TourMeAround/user/${dataR[2][0]["name"]}`}
          alt="poster"
          className="tour-poster"
        />
      </div>
      <h1>{dataR[0]["name"]}</h1>
      <p>Location: {dataR[1]["name"]}</p>
      <p>
        Date: {format(new Date(dataR[0]["date_start"]), "d/m/yyyy")} -{" "}
        {format(new Date(dataR[0]["date_end"]), "d/m/yyyy")}
      </p>
      <p>Free space: {dataR[0]["max_people"]}</p>
      <p>Price: {dataR[0]["price"]}din</p>
      <p>{dataR[0]["description"]}</p>

      <h2>Organisation</h2>
      <Card
        image={`http://localhost/TourMeAround/user/${dataR[3]["image"]}`}
        title={dataR[3]["name"]}
        description={dataR[3]["about"]}
        link={`/organisation/${dataR[3]["id"]}`}
      />

      <div className="header-title-filter">
        <h2>Pick your Transport</h2>
        <div className="filter">
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => handleTransportFilterClick("")}
            className={activeTransportFilter === "" ? "activeFilter" : ""}
          />
          <FontAwesomeIcon
            icon={faBus}
            onClick={() => handleTransportFilterClick("bus")}
            className={activeTransportFilter === "bus" ? "activeFilter" : ""}
          />
          <FontAwesomeIcon
            icon={faPlane}
            onClick={() => handleTransportFilterClick("plane")}
            className={activeTransportFilter === "plane" ? "activeFilter" : ""}
          />
          <FontAwesomeIcon
            icon={faShip}
            onClick={() => handleTransportFilterClick("ship")}
            className={activeTransportFilter === "ship" ? "activeFilter" : ""}
          />
          <FontAwesomeIcon
            icon={faCar}
            onClick={() => handleTransportFilterClick("car")}
            className={activeTransportFilter === "car" ? "activeFilter" : ""}
          />
          <FontAwesomeIcon
            icon={faTrain}
            onClick={() => handleTransportFilterClick("train")}
            className={activeTransportFilter === "train" ? "activeFilter" : ""}
          />
        </div>
      </div>
      <div className="transports">{transport}</div>

      <div className="header-title-filter">
        <h2>Pick your Accomodation</h2>
        <div className="filter">
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => handleAccomodationFilterClick("")}
            className={activeAccomodationFilter === "" ? "activeFilter" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            onClick={() => handleAccomodationFilterClick("1")}
            className={activeAccomodationFilter >= "0" ? "activeFilter" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            onClick={() => handleAccomodationFilterClick("2")}
            className={activeAccomodationFilter >= "2" ? "activeFilter" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            onClick={() => handleAccomodationFilterClick("3")}
            className={activeAccomodationFilter >= "3" ? "activeFilter" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            onClick={() => handleAccomodationFilterClick("4")}
            className={activeAccomodationFilter >= "4" ? "activeFilter" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            onClick={() => handleAccomodationFilterClick("5")}
            className={activeAccomodationFilter >= "5" ? "activeFilter" : ""}
          />
        </div>
      </div>
      {acomadation}
    </div>
  );
};

export default Tour;
