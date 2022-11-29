import React, { Fragment, useState, useEffect } from "react";
import PlantTile from "./PlantTile";
import NewPlantForm from "./NewPlantForm";

const PlantContainer = ({ plants, setNewPlantSubmission, newPlantSubmission, handleSubmission }) => {

  const plantsList = plants.map((plant) => {
    return (
      <PlantTile
      key={plant.id}
      id={plant.id}
      name={plant.name}
      img={plant.img.url}
      family={plant.family}
      genus={plant.genus}
      category={plant.category.title}
      />
      )
    })

  return (
    <Fragment>
      <div>{plantsList}</div>
      <NewPlantForm 
        handleSubmission={handleSubmission}
        newPlantSubmission={newPlantSubmission}
        setNewPlantSubmission={setNewPlantSubmission}
        />
    </Fragment>
  )
}

export default PlantContainer