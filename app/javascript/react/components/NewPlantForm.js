import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";

const NewPlantForm = ({ setNewPlantSubmission, newPlantSubmission, handleSubmission }) => {

  const categories = ["","Foliage Plant", "Succulents & Cacti", "Flowering Plants" , "Herbs"]
  const [files, setFiles] = useState([])

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

  const handleFileUpload = (acceptedFiles) => {
    setNewPlantSubmission({
      ...newPlantSubmission,
      img: acceptedFiles[0]
    })

    setFiles([
      ...files,
      <li key={acceptedFiles[0].path}>
      {acceptedFiles[0].path} - {acceptedFiles[0].size} bytes
    </li>
    ])
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
          name="name"
          id="name"
          type="text"
          value={newPlantSubmission.name}
          onChange={handleChange}
        />
      </label>
      <div className="dropzone">
        <Dropzone onDrop={handleFileUpload}>
          {({getRootProps, getInputProps}) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag image here, or click to select files</p>
              </div>
            </section>
          )}
          </Dropzone>
          <aside>
            <ul>{files}</ul>
           </aside>
        </div>  
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