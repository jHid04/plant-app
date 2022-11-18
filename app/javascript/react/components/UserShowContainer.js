import React, { useEffect, useState } from "react";
import PlantContainer from "./PlantContainer";

const UserShowContainer = (props) => {

  const [user, setUser] = useState({})
  const [plants, setPlants] = useState([])

  const [newPlantSubmission, setNewPlantSubmission] = useState({
    scientific_name: "",
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
        setUser(parsedUser)
        setPlants(parsedUser.plants)
      }
      
      
    } catch (err) {
      console.log(`Error! - ${err}`)
    }
  }
  
  useEffect(() => {
    fetchUser()
  }, [])

  const postUpdate = async (formPayload) => {
    try {
      const response = await fetch(`/api/v1/plants`, {
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify(formPayload),
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
        }
      })
      if (!response.ok) {
        const errorMessage = `${response.status} - ${response.statusText}`
        const error = new Error(errorMessage)
        throw (error)
      } else {
        const responseBody = await response.json()
        setPlants([...plants, responseBody])
        setNewPlantSubmission({
          scientific_name: "",
          img: "",
          family: "",
          category: ""
        })
      }
    } catch (err) {
      console.log(`Error! ${err}`)
    }
  }

  return (
    <div className="grid-x grid-margin-x">
      <div className="cell small-4">
        <p>Name: {user.first_name}{user.last_name}</p>
        <p>Member since:</p>
          <h3>About Me</h3>
          <li>{user.about}</li>
      </div>
      <div className="cell small-4 large-offset-2 plant-info">
        <PlantContainer
          postUpdate={postUpdate}
          newPlantSubmission={newPlantSubmission}
          setNewPlantSubmission={setNewPlantSubmission}
          plants={plants}
        />
      </div>
    </div>
  )
}


export default UserShowContainer