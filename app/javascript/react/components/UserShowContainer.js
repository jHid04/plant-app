import React, { useEffect, useState } from "react";
import PlantContainer from "./PlantContainer";
import ErrorList from "./ErrorList";
import _ from 'lodash'

const UserShowContainer = (props) => {

  const [user, setUser] = useState({})
  const [plants, setPlants] = useState([])
  const [newPlantSubmission, setNewPlantSubmission] = useState({
    name: "",
    img: "",
    family: "",
    category: ""
  })
  const [currentUser, setCurrentUser] = useState({})

  const getCurrentUser = async () => {
    try {
      const response = await fetch('/api/v1/current-user')
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        const error = new Error(errorMessage)
        throw (error)
      } else {
        const parsedUser = await response.json()
        setCurrentUser(parsedUser.user)
      }
    } catch (err) {
      console.log(`Error! - ${err}`)
    }
  }
  
  useEffect(() => {
    getCurrentUser()
  }, [])

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

  const [errors, setErrors] = useState({})

  const validSubmission = () => {
    let submitErrors = {}
    if (newPlantSubmission.name.trim() === "") {
      submitErrors = {
        ...submitErrors,
        name: "is blank"
      }
    }
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmission = async (event) => {
    event.preventDefault()
    if (validSubmission()) {
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
        setErrors({})
      } catch (error) {
        console.error(`Error in Fetch: ${error.message}`)
      }
    }
    }

  const date = new Date(user.created_at)
  const month = date.toLocaleString('default', {
    month: 'short',
  })
  const year = date.getFullYear()

  let showEdit = null

  if (currentUser.id === user.id){
    showEdit = <a href="/users/edit">Edit Information</a>
  }

  return (
    <div className="grid-x grid-margin-x">
      <div className="cell small-4">
        <p>Name: {user.first_name} {user.last_name}</p>
        <p>Member Since: {month} {year}</p>
          <h3>About Me</h3>
          <li>{user.about}</li>
          {showEdit}
      </div>
      <div className="cell small-4 large-offset-2 plant-info">
        <PlantContainer
          errors={errors}
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