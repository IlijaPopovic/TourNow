import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import Explore from "./components/pages/Explore";
import Attractions from "./components/pages/Attractions";
import Destinations from "./components/pages/Destinations";
import Reservations from "./components/pages/Reservations";
import Organisations from "./components/pages/Organisations";
import OrganisationProfile from "./components/pages/OrganisationProfile";
import UserProfile from "./components/pages/UserProfile";
import Tour from "./components/pages/Tour";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Destinations" element={<Destinations />} />
        <Route path="/Attractions" element={<Attractions />} />
        <Route path="/Organisations" element={<Organisations />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/OrganisationProfile" element={<OrganisationProfile />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/Tour/:id" element={<Tour />} />
      </Routes>
    </div>
  );
};

export default App;
