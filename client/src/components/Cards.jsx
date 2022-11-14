import React from "react";
import Card from "./Card";
import NoMatch from "./NoMatch";
import Loading from "./Loading";
import "../styles/cards.css";
import { useSelector } from "react-redux";

function Cards({ countries }) {
  const { loading } = useSelector((state) => state);

  return (
    <div className="cards">
      {loading ? (
        <div className="loadingContainer">
          <Loading />
        </div>
      ) : countries.length ? (
        countries.map((country) => (
          <div key={country.id} className="cardContainer">
            <Card country={country} />
          </div>
        ))
      ) : (
        <NoMatch />
      )}
    </div>
  );
}

export default Cards;
