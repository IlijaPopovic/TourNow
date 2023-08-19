import React from "react";
import "./Profile.css";
import OrganisationLoginForm from "../segments/OrganisationLoginForm";
import OrganisationSignupForm from "../segments/OrganisationSignupForm";
import OrganisationProfileInfo from "../segments/OrganisationProfileInfo";

const OrganisationProfile = () => {
  const [isSignUp, setIsSignUp] = React.useState(true);
  const [isLogged, setIsLogged] = React.useState(false);

  const toggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const toggleLogged = () => {
    setIsLogged((prevIsLogged) => !prevIsLogged);
  };

  const showPanel = isLogged ? (
    <OrganisationProfileInfo />
  ) : isSignUp ? (
    <OrganisationLoginForm toggleForm={toggleForm} isSignUp={isSignUp} />
  ) : (
    <OrganisationSignupForm toggleForm={toggleForm} isSignUp={isSignUp} />
  );

  return (
    <div className="profile">
      <p>This is Organisation Profile page</p>
      {showPanel}
    </div>
  );
};

export default OrganisationProfile;
