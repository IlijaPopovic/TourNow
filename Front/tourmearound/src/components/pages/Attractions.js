import React from "react";
import Card from "../segments/Card";
import axios from "axios";

const Attractions = (props) => {
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);

  console.log(props);

  React.useEffect(() => {
    const apiUrl = "http://localhost/TourMeAround/user/getAttractions.php";

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

  React.useEffect(() => {
    const filtered = data.filter(
      (item) =>
        !props.destinationID || props.destinationID === item.destination_id
    );

    setFilteredData(filtered);
  }, [data]);

  const cards = filteredData.map((item) => (
    <Card
      key={item.id}
      image={`http://localhost/TourMeAround/user/${item.image}`}
      title={item.title}
      subtitle={item.destination}
      description={item.description}
      button={item.id}
      // link={`/tour/${item.id}`}
    />
  ));

  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Attractions</h1>
      {cards}
    </div>
  );
};

export default Attractions;
