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
      link={`/tour/${item.id}`}
    />
  ));

  return (
    <div>
      <p>This is Organisations page</p>
      {cards}
    </div>
  );
};

export default Organisations;
