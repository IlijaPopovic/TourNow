import React from "react";
import "./Profile.css";
import UserLoginForm from "../segments/UserLoginForm";
import UserSignupForm from "../segments/UserSignupForm";
import UserProfileInfo from "../segments/UserProfileInfo";
import axios from "axios";

const UserProfile = () => {
  const [isSignUp, setIsSignUp] = React.useState(true);
  const [isLogged, setIsLogged] = React.useState(false);
  //const [logInData, setlogInData] = React.useState([]);

  React.useEffect(() => {
    const apiUrl = "http://localhost/TourMeAround/user/checkUserLogin.php";

    axios
      .get(apiUrl)
      .then((response) => {
        //setlogInData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const toggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const toggleLogged = () => {
    setIsLogged((prevIsLogged) => !prevIsLogged);
  };

  const showPanel = isLogged ? (
    <UserProfileInfo />
  ) : isSignUp ? (
    <UserLoginForm toggleForm={toggleForm} isSignUp={isSignUp} />
  ) : (
    <UserSignupForm toggleForm={toggleForm} isSignUp={isSignUp} />
  );

  return (
    <div className="profile">
      <p>This is User Profile page</p>
      {showPanel}
    </div>
  );
};

export default UserProfile;
