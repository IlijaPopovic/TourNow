import React from "react";
import axios from "axios";
import Card from "./Card";
import AdminNavigation from "../header/AdminNavigation";
import "../style/Profile.css";

const AdminProfileInfo = (props) => {
  const dataSend = { id: props.id };
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL + "getAdminData.php";

    axios
      .post(apiUrl, dataSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  const organisationCards = data[1].map((item) => (
    <Card
      key={item.id}
      image={`http://localhost/TourMeAround/user/${item.image}`}
      title={item.name}
      subtitle={item.mail}
      description={item.about}
      deleteOranisationButtonID={item.id}
    />
  ));

  const userCards = data[0].map((item) => (
    <Card
      key={item.id}
      image={`http://localhost/TourMeAround/user/${item.image}`}
      title={"Name: " + item.name + " " + item.surname}
      subtitle={"Email: " + item.mail}
      description={"Enabled: " + item.verified}
      deactivationUserButtonID={item.id}
    />
  ));

  const handleLogOutButtonClick = () => {
    axios
      .post(process.env.REACT_APP_API_URL + "logOutAdmin.php")
      .then((response) => {
        console.log(response.data);
        if (response.data["status"] === "logged_out") {
          localStorage.removeItem("admin");
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
      <h1>Admin profile</h1>
      <AdminNavigation />
      <h2>Organisations</h2>
      <div>{organisationCards}</div>
      <h2>Users</h2>
      <div>{userCards}</div>
      <div className="info">
        <div className="profile-data">{button}</div>
      </div>
    </div>
  );
};

export default AdminProfileInfo;
