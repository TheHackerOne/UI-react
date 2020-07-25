import React from 'react';
import './App.css';
import Navbar from '../src/Components/Navbar/Navbar';
import InstaPosts from '../src/Components/InstaPosts/InstaPosts';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Route path="/" exact component={ Navbar }/>
      <Switch>
        <Route path="/getData" exact component={ InstaPosts }/>
      </Switch>
    </>
  );
}

export default App;
