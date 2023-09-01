import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ReservationRenderer from "../segments/ReservationRenderer";

const Reservations = () => {
  const [dataR, setData] = React.useState([]);

  React.useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL + "getUserReservations.php";
    axios
      .post(
        apiUrl,
        { id: localStorage.getItem("user") },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        //console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (dataR.length === 0) {
    return <p>Loading...</p>;
  }

  if (!localStorage.getItem("user")) {
    return (
      <div>
        <h1>Reservations</h1>
        <NavLink to="/UserProfile">Log in</NavLink>
      </div>
    );
  }

  return (
    <div>
      <h1>Reservations</h1>
      <ReservationRenderer reservationData={dataR} />
    </div>
  );
};

export default Reservations;
