import React from "react";
import Card from "../segments/Card";
import TransportCard from "../segments/TransportCard";
import "./Tour.css";

const Tour = () => {
  return (
    <div>
      <div>
        <img
          src={require("./placeholder.jpg")}
          alt="poster"
          className="tour-poster"
        />
      </div>
      <h1>Djerdapska klisura</h1>
      <p>Srbija</p>
      <p>Datum: 01.01.2023. - 01.05.2023.</p>
      <p>Slobodnih mesta: 5</p>
      <p>Cena po osobi: 12.000din</p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <h2>Organisation</h2>

      <Card
        image={require("./placeholder.jpg")}
        title="ATAS – ASSOCIATION OF TRAVEL AGENCIES OF SERBIA"
        dateStart="Polazak 01.01.2023. u 20:00h"
        dateEnd="Povratak u 01.07.2023. u 18:00h"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. "
        link="/tour/1"
      />
      <h2>Pick your Transport</h2>
      <div className="transports">
        <TransportCard
          image={require("./placeholder.jpg")}
          title="Prevoz autobusom Lasta"
          dateStart="Polazak 01.01.2023. u 20:00h"
          dateEnd="Povratak u 01.07.2023. u 18:00h"
          description="Transport type: Bus "
          link="/tour/1"
        />
        <TransportCard
          image={require("./placeholder.jpg")}
          title="Prevoz autobusom Lasta"
          dateStart="Polazak 01.01.2023. u 20:00h"
          dateEnd="Povratak u 01.07.2023. u 18:00h"
          description="Transport type: Bus "
          link="/tour/1"
        />
        <TransportCard
          image={require("./placeholder.jpg")}
          title="Prevoz autobusom Lasta"
          dateStart="Polazak 01.01.2023. u 20:00h"
          dateEnd="Povratak u 01.07.2023. u 18:00h"
          description="Transport type: Bus "
          link="/tour/1"
        />
        <TransportCard
          image={require("./placeholder.jpg")}
          title="Prevoz autobusom Lasta"
          dateStart="Polazak 01.01.2023. u 20:00h"
          dateEnd="Povratak u 01.07.2023. u 18:00h"
          description="Transport type: Bus "
          link="/tour/1"
        />
      </div>
      <h2>Pick your Accomodation</h2>
      <Card
        image={require("./placeholder.jpg")}
        title="Prevoz autobusom Lasta"
        dateStart="Polazak 01.01.2023. u 20:00h"
        dateEnd="Povratak u 01.07.2023. u 18:00h"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. "
        link="/tour/1"
      />
      <Card
        image={require("./placeholder.jpg")}
        title="Prevoz autobusom Lasta"
        subtitle="Polazak 01.01.2023. u 20:00h - Povratak u 01.07.2023. u 18:00h"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. "
        link="/tour/1"
      />
      <Card
        image={require("./placeholder.jpg")}
        title="Prevoz autobusom Lasta"
        subtitle="Polazak 01.01.2023. u 20:00h - Povratak u 01.07.2023. u 18:00h"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. "
        link="/tour/1"
      />
    </div>
  );
};

export default Tour;
