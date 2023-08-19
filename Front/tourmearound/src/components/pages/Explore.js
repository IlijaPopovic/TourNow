import React from "react";
import Card from "../segments/Card";
import axios from "axios";

const Explore = () => {
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  React.useEffect(() => {
    const apiUrl = "http://localhost/TourMeAround/user/getTours.php";

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
        (item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.destination.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!startDate || new Date(item.startDate) >= new Date(startDate)) &&
        (!endDate || new Date(item.endDate) <= new Date(endDate))
    );

    setFilteredData(filtered);
  }, [searchTerm, startDate, endDate, data]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const cards = filteredData.map((item) => (
    <Card
      key={item.id}
      image={`http://localhost/TourMeAround/user/${item.image}`}
      title={item.title}
      subtitle={item.date_start + " to " + item.date_end}
      description={item.description}
      link={`/tour/${item.id}`}
    />
  ));

  return (
    <div>
      <div className="header-title-filter">
        <h1>Explore</h1>
        <div className="filter">
          <input
            type="text"
            placeholder="Search by location"
            value={searchTerm}
            onChange={handleSearch}
          />
          <input
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={handleStartDateChange}
          />
          <input
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
      </div>
      {cards}
    </div>
  );
};

export default Explore;
