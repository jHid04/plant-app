import React, { Fragment, useState } from "react";
import PlantTile from "./PlantTile";
import NewPlantForm from "./NewPlantForm";

const PlantContainer = ({ plants }) => {
  const [newPlant, setNewPlant] = useState([])

  const plantsList = plants.map((plant) => {
    return (
      <PlantTile
        key={plant.id}
        scientific_name={plant.scientific_name}
        img={plant.img}
        family={plant.family}
        genus={plant.genus}
      />
    )
  })

  const showForm = () => {
    setNewPlant(
      <NewPlantForm/>
    )
  }

  return (
    <Fragment>
      <div>
        <button className="button" onClick={showForm}>Add to your plant family</button>
      </div>
      <div>{newPlant}</div>
      <div>{plantsList}</div>
    </Fragment>
  )
}

export default PlantContainer