import React, { Fragment, useState, useEffect } from "react";
import PlantTile from "./PlantTile";
import NewPlantForm from "./NewPlantForm";

const PlantContainer = ({ plants, postUpdate, setNewPlantSubmission, newPlantSubmission }) => {

  const plantsList = plants.map((plant) => {
    return (
      <PlantTile
      key={plant.id}
      id={plant.id}
      scientific_name={plant.scientific_name}
      img={plant.img}
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
        postUpdate={postUpdate}
        newPlantSubmission={newPlantSubmission}
        setNewPlantSubmission={setNewPlantSubmission}
        />
    </Fragment>
  )
}

export default PlantContainer