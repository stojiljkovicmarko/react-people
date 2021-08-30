import React, { Fragment } from 'react';
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import './App.css';

function App() {

  return (
    <Fragment>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </Fragment>
  );

}

export default App;
