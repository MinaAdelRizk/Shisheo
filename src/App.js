// import logo from './logo.svg';
import React from 'react';
import RestaurantsList from './components/restsList'
import Map from './components/map'
import NavBar from './components/navBar'
import NotFound from './components/notFound'
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

function App() {
  return (

    <React.Fragment>

      <div className="App">

        <div className="logo-holder">
          <h1>Shisheo</h1>
        </div>

        <Switch>
          <Route path="/home" component={RestaurantsList} />
          <Route path="/map" render={props => <Map {...props} />} />
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
