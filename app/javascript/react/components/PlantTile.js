import React from "react";

const PlantTile = ({ scientific_name, img, family, category }) => {
  return (
    <div>
      <div> 
        Name: {scientific_name} Family: {family} Category: {category}
      </div>
      <div>
        <img src={img}/>
      </div>
    </div>
  )
}

export default PlantTile