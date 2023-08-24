import React from "react";
import Card from "../segments/Card";
import axios from "axios";

const Organisations = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const apiUrl = "http://localhost/TourMeAround/user/getOrganisations.php";

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const cards = data.map((item) => (
    <Card
      key={item.id}
      image={`http://localhost/TourMeAround/user/${item.image}`}
      title={item.name}
      subtitle={item.mail}
      description={item.about}
      link={`/organisation/${item.id}`}
    />
  ));

  return (
    <div>
      <h1>Organisations</h1>
      {cards}
    </div>
  );
};

export default Organisations;
