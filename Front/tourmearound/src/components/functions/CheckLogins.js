import React from "react";
import axios from "axios";

const ChecUserLogin = () => {
  React.useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL + "checkUserLogin.php";

    axios
      .post(apiUrl)
      .then((response) => {
        console.log(response.data);
        response.data.id == "no" && localStorage.removeItem("user");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
};

const ChecOrganisationLogin = () => {
  React.useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL + "checkOrganisationLogin.php";

    axios
      .post(apiUrl)
      .then((response) => {
        console.log(response.data);
        response.data.id == "no" && localStorage.removeItem("organisation");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
};

const ChecAdminLogin = () => {
  React.useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL + "CheckadminLogin.php";

    axios
      .post(apiUrl)
      .then((response) => {
        console.log(response.data);
        response.data.id == "no" && localStorage.removeItem("admin");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
};

export { ChecUserLogin, ChecOrganisationLogin, ChecAdminLogin };
