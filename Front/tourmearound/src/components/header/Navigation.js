import React, { useState } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="header-nav">
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        Menu
      </button>
      <ul className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <li>
          <NavLink style={props.activeNavLinknStyle} to="/explore">
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink style={props.activeNavLinknStyle} to="/destinations">
            Destinations
          </NavLink>
        </li>
        <li>
          <NavLink style={props.activeNavLinknStyle} to="/attractions">
            Attractions
          </NavLink>
        </li>
        <li>
          <NavLink style={props.activeNavLinknStyle} to="/organisations">
            Organisations
          </NavLink>
        </li>
        <li>
          <NavLink style={props.activeNavLinknStyle} to="/reservations">
            Reservations
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
