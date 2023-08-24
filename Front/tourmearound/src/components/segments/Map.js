import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ coordinates }) => {
  const customIcon = new Icon({
    iconUrl: "http://localhost/TourMeAround/user/images/pin.png",
    iconSize: [38, 38],
  });

  return (
    <MapContainer
      center={coordinates}
      zoom={13}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={coordinates} icon={customIcon}>
        <Popup>A marker for your location.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
