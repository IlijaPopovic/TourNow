import React from "react";
import axios from "axios";
import "../style/Profile.css";

const UserProfileInfo = (props) => {
  // console.log(localStorage.getItem("user"));

  const dataSend = { id: props.id };

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const apiUrl = "http://localhost/TourMeAround/user/getUser.php";

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
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfo;
