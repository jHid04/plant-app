import React from "react";

// const plantCategories = ["Tropical and subtropical", "Succulents", "Forced bulbs", "Temperate plants"]

const NewPlantForm = (props) => {

  const categoryOptions = plantCategories.map((category) => {
    return (
      <option key={category} value={category}>
        {category}
      </option>
    )
  })

  return (
    <form className="callout">
      <label>
        Category:
        <select name="category">{categoryOptions}</select>
      </label>
      
    </form>
  )
}

export default NewPlantForm