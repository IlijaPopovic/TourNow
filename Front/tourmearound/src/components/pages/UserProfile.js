import React from "react";
import "../style/Form.css";
import UserLoginForm from "../segments/UserLoginForm";
import UserSignupForm from "../segments/UserSignupForm";
import UserProfileInfo from "../segments/UserProfileInfo";
import axios from "axios";

const UserProfile = () => {
  const [isSignUp, setIsSignUp] = React.useState(true);
  const [isLogged, setIsLogged] = React.useState(false);
  const [data, setData] = React.useState([]);

  const toggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const toggleLogged = () => {
    setIsLogged(true);
  };

  React.useEffect(() => {
    const apiUrl = "http://localhost/TourMeAround/user/checkUserLogin.php";

    axios
      .post(apiUrl, null, {})
      .then((response) => {
        setData(response.data);
        response.data.id !== "no" && toggleLogged();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const showPanel = isLogged ? (
    <UserProfileInfo id={data.id} />
  ) : isSignUp ? (
    <UserLoginForm toggleForm={toggleForm} isSignUp={isSignUp} />
  ) : (
    <UserSignupForm toggleForm={toggleForm} isSignUp={isSignUp} />
  );

  return <div className="profile">{showPanel}</div>;
};

export default UserProfile;
