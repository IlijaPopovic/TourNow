import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const ReservationRenderer = ({ reservationData }) => {
  const navigate = useNavigate();
  const destinationData = {};

  reservationData.forEach((destinationGroup) => {
    destinationGroup.forEach((reservation) => {
      const destination = reservation.destination;

      if (destination) {
        if (!destinationData[destination]) {
          destinationData[destination] = [];
        }
        destinationData[destination].push(reservation);
      }
    });
  });

  const handleTourDelete = (id) => {
    const apiUrl = process.env.REACT_APP_API_URL + "deleteReservation.php";
    axios
      .post(
        apiUrl,
        { id: id },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        if (response.data.status === "deleted") {
          alert("Obrisano");
          //document.location.reload();
          navigate("/");
        } else {
          alert("Error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleAttractionDelete = (id) => {
    const apiUrl =
      process.env.REACT_APP_API_URL + "deleteAttractionReservation.php";
    axios
      .post(
        apiUrl,
        { id: id },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        if (response.data.status === "deleted") {
          alert("Obrisano");
          //document.location.reload();
          navigate("/");
        } else {
          alert("Error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const mainReservations = Object.keys(destinationData).map((destination) => (
    <div key={destination}>
      <h2>{destination}</h2>
      {destinationData[destination].map((reservation) => (
        <div key={reservation.reservation_id}>
          {reservation.tour && (
            <p>
              Tour: {reservation.tour} | Price: {reservation.tour_price} ||
              <button
                onClick={() => handleTourDelete(reservation.reservation_id)}
              >
                Delete
              </button>
            </p>
          )}
          {reservation.attraction && (
            <p>
              Attraction: {reservation.attraction} | Price: {reservation.price}{" "}
              ||
              <button
                onClick={() =>
                  handleAttractionDelete(reservation.attraction_reservation_id)
                }
              >
                Delete
              </button>
            </p>
          )}
        </div>
      ))}
    </div>
  ));

  return <div>{mainReservations}</div>;
};

export default ReservationRenderer;
