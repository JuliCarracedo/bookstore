import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>

      <nav>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/categories">
          <p>Categories</p>
        </NavLink>
      </nav>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/categories"><p>Under construction</p></Route>
      </Switch>

    </Router>
  );
}

export default App;
