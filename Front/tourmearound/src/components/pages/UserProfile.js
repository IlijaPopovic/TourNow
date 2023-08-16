import React from "react";
import "./Profile.css";
import UserLoginForm from "../segments/UserLoginForm";
import UserSignupForm from "../segments/UserSignupForm";
import UserProfileInfo from "../segments/UserProfileInfo";

const UserProfile = () => {
  const [isSignUp, setIsSignUp] = React.useState(true);
  const [isLogged, setIsLogged] = React.useState(false);

  const toggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const toggleLogged = () => {
    setIsLogged((prevIsLogged) => !prevIsLogged);
  };

  let showPanel = <UserLoginForm />;

  if (isLogged) {
    showPanel = <UserProfileInfo />;
  } else {
    showPanel = isSignUp ? (
      <UserLoginForm toggleForm={toggleForm} isSignUp={isSignUp} />
    ) : (
      <UserSignupForm toggleForm={toggleForm} isSignUp={isSignUp} />
    );
  }

  return (
    <div className="profile">
      <p>This is User Profile page</p>
      {showPanel}
    </div>
  );
};

export default UserProfile;
