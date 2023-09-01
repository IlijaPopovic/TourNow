import React from "react";
import Card from "../segments/Card";
import axios from "axios";
import "../style/Tour.css";
import { format } from "date-fns";

const Explore = (props) => {
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  React.useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL + "getTours.php";

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        //console.log(response.data);
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
        (!startDate || new Date(item.date_start) >= new Date(startDate)) &&
        (!endDate || new Date(item.date_end) <= new Date(endDate)) &&
        (!props.organisationID ||
          props.organisationID == item.organisation_id) &&
        (!props.destinationID || props.destinationID == item.destination_id)
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

  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  const cards = filteredData.map((item) => (
    <Card
      key={item.id}
      image={`${process.env.REACT_APP_API_URL}${item.image}`}
      title={item.title}
      subtitle={
        format(new Date(item.date_start), "dd.MM.yyyy") +
        " to " +
        format(new Date(item.date_end), "dd.MM.yyyy")
      }
      description={item.description}
      link={`/tour/${item.id}`}
    />
  ));

  const filter = (
    <div className="header-title-filter">
      <h1>Tours</h1>
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
  );

  const showNoToursLabel = filteredData.length > 0 ? <></> : <p>No tours</p>;

  return (
    <div>
      {filter}
      {showNoToursLabel}
      {cards}
    </div>
  );
};

export default Explore;
