import React from "react";
import "../style/Form.css";
import AdminLoginForm from "../segments/AdminLoginForm";
import AdminProfileInfo from "../segments/AdminProfileInfo";
import axios from "axios";

const AdminProfile = () => {
  const [isLogged, setIsLogged] = React.useState(false);
  const [data, setData] = React.useState([]);

  const toggleLogged = () => {
    setIsLogged(true);
  };

  React.useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL + "checkAdminLogin.php";

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
    <AdminProfileInfo id={data.id} />
  ) : (
    <AdminLoginForm />
  );

  return <div className="profile">{showPanel}</div>;
};

export default AdminProfile;
