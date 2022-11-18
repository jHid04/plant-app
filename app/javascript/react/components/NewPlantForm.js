import React, { useEffect, useState } from "react";

const NewPlantForm = ({ postUpdate, setNewPlantSubmission, newPlantSubmission }) => {

  const categories = ["","Foliage Plant", "Succulents & Cacti", "Flowering Plants" , "Herbs"]

  const categoriesList = categories.map((category) => {
    return (
      <option
        key={category}
        value={category}>{category}</option>
    )
  })

  const handleChange = (event) => {
    setNewPlantSubmission({
      ...newPlantSubmission,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmission = async (event) => {
    event.preventDefault()
    postUpdate(newPlantSubmission)
  }

  return (
    <form className="callout" onSubmit={handleSubmission}>
      <h3>Add To Your Plant Family</h3>
      <label>
        Category:
        <select 
          name="category"
          id="category" 
          value={newPlantSubmission.category}
          onChange={handleChange}>{categoriesList}</select>
      </label>
      <label>
        Name:
        <input 
          name="scientific_name"
          id="scientific_name"
          type="text"
          value={newPlantSubmission.scientific_name}
          onChange={handleChange}
        />
      </label>
      <label>
        Picture:
        <input 
          name="img"
          id="img"
          type="text"
          value={newPlantSubmission.img}
          onChange={handleChange}
        />
      </label>
      <label>
        Family:
        <input 
          name="family"
          id="family"
          type="text"
          value={newPlantSubmission.family}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Add Plant" className="button"/>
    </form>
  )
}

export default NewPlantForm