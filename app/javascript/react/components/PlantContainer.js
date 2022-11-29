import React, { Fragment, useState, useEffect } from "react";
import PlantTile from "./PlantTile";
import NewPlantForm from "./NewPlantForm";
import ErrorList from "./ErrorList";
const PlantContainer = ({ plants, setNewPlantSubmission, newPlantSubmission, handleSubmission, errors }) => {

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
    <ErrorList errors={errors} />
      <NewPlantForm
        handleSubmission={handleSubmission}
        newPlantSubmission={newPlantSubmission}
        setNewPlantSubmission={setNewPlantSubmission}
        />
    </Fragment>
  )
}

export default PlantContainer