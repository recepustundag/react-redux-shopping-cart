import React from "react";
import { Route, Switch } from 'react-router-dom'

import Home from './views/Home'
import Card from './views/Card'
import Error from './views/Error'

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-200 min-h-screen">
        <div className="container max-w-5xl mx-auto py-12">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/card/" component={Card} />
            <Route component={Error} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
