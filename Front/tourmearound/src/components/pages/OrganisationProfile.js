import React from "react";
import "../style/Form.css";
import OrganisationLoginForm from "../segments/OrganisationLoginForm";
import OrganisationSignupForm from "../segments/OrganisationSignupForm";
import OrganisationProfileInfo from "../segments/OrganisationProfileInfo";
import axios from "axios";

const OrganisationProfile = () => {
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
    const apiUrl =
      "http://localhost/TourMeAround/user/checkOrganisationLogin.php";

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
    <OrganisationProfileInfo id={data.id} />
  ) : isSignUp ? (
    <OrganisationLoginForm toggleForm={toggleForm} isSignUp={isSignUp} />
  ) : (
    <OrganisationSignupForm toggleForm={toggleForm} isSignUp={isSignUp} />
  );

  return <div className="profile">{showPanel}</div>;
};

export default OrganisationProfile;
