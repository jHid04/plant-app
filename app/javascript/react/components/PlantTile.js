import React from "react";

const PlantTile = ({ scientific_name, img, family }) => {
  return (
    <div>
      <div> 
        Name: {scientific_name} Family: {family}
      </div>
      <div>
        <img src={img}/>
      </div>
    </div>
  )
}

export default PlantTile