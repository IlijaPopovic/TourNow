import React from "react";
import axios from "axios";
import "../style/Profile.css";

const OrganisationProfileInfo = (props) => {
  const dataSend = { id: props.id };
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const apiUrl = "http://localhost/TourMeAround/user/getOrganisation.php";

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
          <p>About: {data.about}</p>
        </div>
      </div>
    </div>
  );
};

export default OrganisationProfileInfo;
