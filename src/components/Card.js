import React from "react";
import "../styles/CardGrid.css"

const Card = (props) => {

  return (
    <div className="card-container" onClick={() => props.handleClick(props.country.id)}>
      <img src={props.country.flag_url} alt={props.country.flag_url_alt}></img>
      <p>{props.country.name}</p>
    </div>
  );
};

export default Card;
