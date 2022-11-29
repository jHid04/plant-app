import React from "react";

const PlantTile = ({ name, img, family, category, id }) => {
  return (
    <div className="callout">
      <div> 
        <p>Category: {category}</p> 
        <p>Name: {name}</p> 
        <p>Family: {family}</p>
      </div>
      <div>
        <img src={img}/>
      </div>
    </div>
  )
}

export default PlantTile