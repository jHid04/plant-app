import React, { useEffect, useState } from "react";
import PlantContainer from "./PlantContainer";

const UserShowContainer = (props) => {
  const [user, setUser] = useState({})
  const [plants, setPlants] = useState([])

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
          plants={plants}
        />
      </div>
    </div>
  )
}


export default UserShowContainer