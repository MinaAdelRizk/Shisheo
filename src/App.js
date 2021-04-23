// import logo from './logo.svg';
import React from 'react';
import RestaurantsList from './components/restsList'
import RestsMap from './components/restsMap'
import NavBar from './components/navBar'
import NotFound from './components/notFound'
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

function App() {
  return (

    <React.Fragment>

      <div className="App">

        <Switch>
          <Route path="/home" component={RestaurantsList} />
          <Route path="/locations" render={RestsMap} />
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
