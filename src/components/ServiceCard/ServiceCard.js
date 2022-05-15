import React from "react";
import "./ServiceCard.css"

const ServiceCard = ({title, paragraph}) => {
    return (
        <div className="cardContainer">
            <div className="paddingContainer">
              <h2>{title}</h2>
              <p>{paragraph}</p>
            </div>
          </div>
    )
}

export default ServiceCard;