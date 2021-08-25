import React, { createContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../src/components/Home/Home/Home";
import PropertyDetailPage from "./components/PropertyDetailPage/PropertyDetailPage/PropertyDetailPage";
import LoginForm from "./components/Authentication/LoginForm";
import RegisterForm from "./components/Authentication/RegisterForm";
import Contact from "./components/Home/Contact/Contact";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { getDecodedUser } from "./components/Authentication/LoginManager";
import "./App.css"
import ShopPage from "./components/ShopPage/ShopPage";
import Maps from "./components/Maps/Maps";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(getDecodedUser());
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <Router>
        <Switch>
          <Route path="/property-detail/:id">
            <PropertyDetailPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/shopPage">
            <ShopPage />
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
          <Route path="/sold">
            <Maps />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
