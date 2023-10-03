import React from "react";
import "./Header.css";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMap } from "@fortawesome/free-regular-svg-icons";

const Header = (props) => {
  const activeNavLinknStyle = ({ isActive }) =>
    isActive ? { color: "#FDAF01" } : {};

  return (
    <div className="header">
      <div className="header-left">
        <div className="icon">
          <img src={require("./logo.png")} alt="Home" className="header-icon" />
        </div>
        <div>
          <Navigation activeNavLinknStyle={activeNavLinknStyle} />
        </div>
      </div>
      <div className="header-right">
        <NavLink to="/AdminProfile" style={activeNavLinknStyle}>
          *
        </NavLink>
        <NavLink to="/OrganisationProfile" style={activeNavLinknStyle}>
          <FontAwesomeIcon icon={faMap} />
        </NavLink>
        <NavLink to="/UserProfile" style={activeNavLinknStyle}>
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
