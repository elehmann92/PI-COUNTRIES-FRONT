import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";

function Card({ country }) {
  return (
    <div className="card">
      <img className="flag" src={country.flag} alt={country.name} />
      <label className="cardName">{country.name}</label>
      <label className="cardContinent">{country.continent}</label>
      <Link className="cardLink" to={`/country_details/${country.id}`}>Know more...</Link>
    </div>
  );
}

export default Card;
