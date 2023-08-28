import React from "react";
import axios from "axios";
import Explore from "../pages/Explore";
import "../style/Profile.css";
import OrganisationNavigation from "../header/OrganisationNavigation";

const OrganisationProfileInfo = (props) => {
  const limitStringLength = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + "...";
    }
  };

  const dataSend = { id: props.id };
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL + "getOrganisation.php";

    axios
      .post(apiUrl, dataSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setData(response.data[0]);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  const handleLogOutButtonClick = () => {
    axios
      .post(process.env.REACT_APP_API_URL + "logOutOrganisation.php")
      .then((response) => {
        console.log(response.data);
        if (response.data["status"] === "logged_out") {
          localStorage.removeItem("user");
          alert("Logged out");
          window.location.reload();
        } else {
          alert("Error");
        }
      });
  };

  const button = (
    <div>
      <br />
      <button onClick={handleLogOutButtonClick}>Log out</button>
    </div>
  );

  return (
    <div className="profileInfo">
      <h1>Organisation profile</h1>
      <div className="info">
        <div className="profile-picture">
          <img
            src={`http://localhost/TourMeAround/user/${data.image}`}
            alt="poster"
            className="tour-poster"
          />
        </div>
        <div className="profile-data">
          <p>Name: {data.name}</p>
          <p>Mail: {data.mail}</p>
          <p>About: {limitStringLength(data.about, 300)}</p>
          {button}
        </div>
      </div>
      <OrganisationNavigation />
      <Explore organisationID={localStorage.getItem("organisation")} />
    </div>
  );
};

export default OrganisationProfileInfo;
