import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UserShowContainer from './UserShowContainer'


const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/users/:id" component={UserShowContainer}>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
