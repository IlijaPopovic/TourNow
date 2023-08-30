import React from "react";
import "./Navigation.css";
import { Routes, Route, NavLink } from "react-router-dom";

const OrganisationNavigation = (props) => {
  return (
    <div>
      <nav className="header-nav">
        <ul>
          <li>Create:</li>
          <li>
            <NavLink style={props.activeNavLinknStyle} to="/CreateAttraction">
              Attraction
            </NavLink>
          </li>
          <li>
            <NavLink style={props.activeNavLinknStyle} to="/CreateDestination">
              Destination
            </NavLink>
          </li>
          {/* <li>
            <NavLink style={props.activeNavLinknStyle} to="/CreateOrganisation">
              Organisation
            </NavLink>
          </li> */}
          <li>
            <NavLink style={props.activeNavLinknStyle} to="/CreateRoom">
              Room
            </NavLink>
          </li>
          {/* <li>
            <NavLink style={props.activeNavLinknStyle} to="/CreateTour">
              Tour
            </NavLink>
          </li> */}
          <li>
            <NavLink style={props.activeNavLinknStyle} to="/CreateTransport">
              Transport
            </NavLink>
          </li>
          <li>
            <NavLink
              style={props.activeNavLinknStyle}
              to="/CreateAccommodation"
            >
              Accommodation
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default OrganisationNavigation;
