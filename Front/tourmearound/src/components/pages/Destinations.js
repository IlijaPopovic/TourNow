import React from "react";
import Card from "../segments/Card";
import axios from "axios";

const Destinations = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const apiUrl = "http://localhost/TourMeAround/user/getDestinations.php";

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
      subtitle={item.country}
      description={item.description}
      link={`/destination/${item.id}`}
    />
  ));

  return (
    <div>
      <h1>Destinations</h1>
      {cards}
    </div>
  );
};

export default Destinations;
