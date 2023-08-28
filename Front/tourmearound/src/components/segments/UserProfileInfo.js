import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "../style/Profile.css";

const UserProfileInfo = (props) => {
  // console.log(localStorage.getItem("user"));

  const dataSend = { id: props.id };

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL + "getUser.php";

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
      .post(process.env.REACT_APP_API_URL + "logOutUser.php")
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
      <h1>User profile</h1>
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
          <p>Surname: {data.surname}</p>
          <p>Mail: {data.mail}</p>
          <p>Address: {data.address}</p>
          <p>Coutry: {data.country}</p>
          <p>Identity number: {data.identity_number}</p>
          <p>Mobile number: {data.mobile_number}</p>
          <NavLink to={"/CreateAttraction/"}>Create Attraction</NavLink>
          {button}
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfo;
