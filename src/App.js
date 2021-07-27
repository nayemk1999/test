<<<<<<< HEAD
import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../src/components/Home/Home/Home'
import PropertyDetailPage from './components/PropertyDetailPage/PropertyDetailPage/PropertyDetailPage';
import LoginForm from './components/Authentication/LoginForm';
import RegisterForm from './components/Authentication/RegisterForm';
import { getDecodedUser } from './components/Authentication/LoginManager';
=======
import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../src/components/Home/Home/Home";
import PropertyDetailPage from "./components/PropertyDetailPage/PropertyDetailPage/PropertyDetailPage";
import LoginForm from "./components/Authentication/LoginForm";
import RegisterForm from "./components/Authentication/RegisterForm";
import Contact from "./components/Home/Contact/Contact";
>>>>>>> origin/fahim

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(getDecodedUser());
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <Router>
        <Switch>
          <Route path="/detail">
            <PropertyDetailPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/register-form">
            <RegisterForm />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
