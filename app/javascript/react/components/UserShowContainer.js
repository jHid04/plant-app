import React, { useEffect, useState } from "react";
import PlantContainer from "./PlantContainer";

const UserShowContainer = (props) => {

  const [user, setUser] = useState({})
  const [plants, setPlants] = useState([])
  const [newPlantSubmission, setNewPlantSubmission] = useState({
    name: "",
    img: "",
    family: "",
    category: ""
  })

  const fetchUser = async () => {
    try {
      const response = await fetch(`/api/v1/users/${props.match.params.id}`)
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        const error = new Error(errorMessage)
        throw (error)
      } else {
        const parsedUser = await response.json()
        setUser(parsedUser.user)
        setPlants(parsedUser.user.plants)
      }
      
      
    } catch (err) {
      console.log(`Error! - ${err}`)
    }
  }
  
  useEffect(() => {
    fetchUser()
  }, [])


  const handleSubmission = async (event) => {
    event.preventDefault()
    let body = new FormData()
    body.append("name", newPlantSubmission.name)
    body.append("img", newPlantSubmission.img)
    body.append("family", newPlantSubmission.family)
    body.append("category", newPlantSubmission.category)
    
    try {
      const response = await fetch(`/api/v1/plants`, {
        method: "POST",
        credentials: "same-origin",
        body: body
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const newPlant = await response.json()
      setPlants([
        ...plants,
        newPlant.plant
      ])
      setNewPlantSubmission({
        name: "",
        img: "",
        family: "",
        category: ""
      })
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  return (
    <div className="grid-x grid-margin-x">
      <div className="cell small-4">
        <p>Name: {user.first_name} {user.last_name}</p>
          <h3>About Me</h3>
          <li>{user.about}</li>
      </div>
      <div className="cell small-4 large-offset-2 plant-info">
        <PlantContainer
          newPlantSubmission={newPlantSubmission}
          setNewPlantSubmission={setNewPlantSubmission}
          plants={plants}
          handleSubmission={handleSubmission}
        />
      </div>
    </div>
  )
}


export default UserShowContainer