import React from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import Organisation from "./components/pages/Organisation";
import Tour from "./components/pages/Tour";
import Destination from "./components/pages/Destination";

import CreateAttraction from "./components/pages/edit/CreateAttraction";
import CreateDestination from "./components/pages/edit/CreateDestination";
import CreateOrganisation from "./components/pages/edit/CreateOrganisation";
import CreateRoom from "./components/pages/edit/CreateRoom";
import CreateTour from "./components/pages/edit/CreateTour";
import CreateTransport from "./components/pages/edit/CreateTransport";
import CreateAccommodation from "./components/pages/edit/CreateAccommodation";

import ChangeAttraction from "./components/pages/edit/ChangeAttraction";
import ChangeDestination from "./components/pages/edit/ChangeDestination";
import ChangeOrganisation from "./components/pages/edit/ChangeOrganisation";
import ChangeRoom from "./components/pages/edit/ChangeRoom";
import ChangeTour from "./components/pages/edit/ChangeTour";
import ChangeTransport from "./components/pages/edit/ChangeTransport";
import ChangeAccommodation from "./components/pages/edit/ChangeAccommodation";

import UserForgotPassword from "./components/pages/edit/UserForgotPassword";
import OrganisationForgotPassword from "./components/pages/edit/OrganisationForgotPassword";

axios.defaults.withCredentials = true;

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
        <Route path="/Organisation/:id" element={<Organisation />} />
        <Route path="/Destination/:id" element={<Destination />} />

        <Route path="/CreateAttraction" element={<CreateAttraction />} />
        <Route path="/CreateDestination" element={<CreateDestination />} />
        <Route path="/CreateOrganisation" element={<CreateOrganisation />} />
        <Route path="/CreateRoom" element={<CreateRoom />} />
        <Route path="/CreateTour" element={<CreateTour />} />
        <Route path="/CreateTransport" element={<CreateTransport />} />
        <Route path="/CreateAccommodation" element={<CreateAccommodation />} />

        <Route path="/CreateTransport" element={<CreateTransport />} />
        <Route path="/CreateAccommodation" element={<CreateAccommodation />} />

        <Route path="/UserForgotPassword" element={<UserForgotPassword />} />
        <Route
          path="/OrganisationForgotPassword"
          element={<OrganisationForgotPassword />}
        />
        <Route
          path="/ChangeOrganisation/:id"
          element={<ChangeOrganisation />}
        />
        <Route path="/ChangeRoom/:id" element={<ChangeRoom />} />
        <Route path="/ChangeTour/:id" element={<ChangeTour />} />
        <Route path="/ChangeTransport/:id" element={<ChangeTransport />} />
        <Route
          path="/ChangeAccommodation/:id"
          element={<ChangeAccommodation />}
        />
      </Routes>
    </div>
  );
};

export default App;
