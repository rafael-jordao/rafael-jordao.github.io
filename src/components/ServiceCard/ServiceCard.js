import React from "react";
import "./ServiceCard.css"

const ServiceCard = ({ title, paragraph, setImage }) => {
  return (
    <div className="cardContainer">
      <div className="paddingContainer">
        <div className="iconContainer">
          <img className="icon" src={setImage}></img>
        </div>
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  )
}

export default ServiceCard;