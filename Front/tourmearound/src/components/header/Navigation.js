import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav className="header-nav">
      <ul>
        {/* <li>
          <NavLink style={props.activeNavLinknStyle} to="/">
            Home
          </NavLink>
        </li> */}
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
