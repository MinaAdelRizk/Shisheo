// import logo from './logo.svg';
import React from 'react';
import RestaurantsList from './components/restsList'
<<<<<<< HEAD
import Map from './components/map'
import NavBar from './components/navBar'
import NotFound from './components/notFound'
import { Switch, Route, Redirect } from 'react-router-dom';
=======
>>>>>>> a114a7afb6cda4901b5bec48a9d6c42d8e666b31

import './App.css';

function App() {
  return (

    <React.Fragment>

      <div className="App">

        <h1>Shisheo</h1>

        <Switch>
          <Route path="/home" component={RestaurantsList} />
          <Route path="/map" component={Map} />
          <Route path="/not-found" component={NotFound} />
          <Redirect exact from="/" to="/home" />
          <Redirect to="/not-found" />
        </Switch>

        <NavBar />

      </div>

    </React.Fragment>

  );
}

export default App;
