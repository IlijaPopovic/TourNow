import React from "react";
import Card from "../segments/Card";
import axios from "axios";
import { format } from "date-fns";

const Attractions = (props) => {
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  //console.log(props);

  React.useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL + "getAttractions.php";

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
    const filtered = data.filter((item) => {
      const itemStartDate = new Date(item.date_start);
      const itemEndDate = new Date(item.date_end);
      return (
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!startDate || itemStartDate >= new Date(startDate)) &&
        (!endDate || itemEndDate <= new Date(endDate)) &&
        (!props.destinationID || props.destinationID == item.destination_id)
      );
    });

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

  //console.log(filteredData);
  const cards = filteredData.map((item) => (
    <Card
      key={item.id}
      id={item.id}
      image={`${process.env.REACT_APP_API_URL}${item.image}`}
      title={
        item.title +
        " - " +
        format(new Date(item.date_start), "dd.MM.yyyy. HH:mm") +
        " to " +
        format(new Date(item.date_end), "dd.MM.yyyy. HH:mm")
      }
      subtitle={item.destination}
      description={item.description}
      reservationButton={localStorage.getItem("user") ? item.id : null}
    />
  ));

  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  const filter = (
    <div className="header-title-filter">
      <h1>Attractions</h1>
      <div className="filter">
        <input
          type="text"
          placeholder="Search by name"
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

  const showFiler = filteredData.length > 0 ? filter : <></>;

  return (
    <div>
      {filter}
      {cards}
    </div>
  );
};

export default Attractions;
