import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { format } from "date-fns";

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
            <div>
              <Card
                key={reservation.reservation_id}
                image={`${process.env.REACT_APP_API_URL}${reservation.image}`}
                title={reservation.tour}
                subtitle={
                  format(new Date(reservation.date_start), "dd.MM.yyyy") +
                  " to " +
                  format(new Date(reservation.date_end), "dd.MM.yyyy") +
                  " (" +
                  reservation.tour_price +
                  "din)"
                }
                description={reservation.description}
                link={`/tour/${reservation.tour_id}`}
                bonus={
                  <button
                    onClick={() => handleTourDelete(reservation.reservation_id)}
                  >
                    Delete
                  </button>
                }
              />
            </div>
          )}
          {reservation.attraction && (
            <div>
              <Card
                key={reservation.attraction_reservation_id}
                image={`${process.env.REACT_APP_API_URL}${reservation.image}`}
                title={reservation.attraction}
                subtitle={
                  format(new Date(reservation.date_start), "dd.MM.yyyy") +
                  " to " +
                  format(new Date(reservation.date_end), "dd.MM.yyyy") +
                  " (" +
                  reservation.price +
                  "din)"
                }
                description={reservation.description}
                link={`/attraction/${reservation.attraction_id}`}
                bonus={
                  <button
                    onClick={() =>
                      handleAttractionDelete(
                        reservation.attraction_reservation_id
                      )
                    }
                  >
                    Delete
                  </button>
                }
              />
            </div>
          )}
        </div>
      ))}
    </div>
  ));

  return <div>{mainReservations}</div>;
};

export default ReservationRenderer;
