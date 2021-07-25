import React, { createContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../src/components/Home/Home/Home'

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
