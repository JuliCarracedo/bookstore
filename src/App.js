/* eslint-disable no-restricted-globals */
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';

function App() {
  return (
    <Router>

      <nav className="navbar">
        <div className="inner-nav">
          <button type="button" className="logo-link" onClick={() => location.reload()}>BOOKSTORE CMS</button>
          <div className="links">
            <NavLink className="nav-item" to="/">
              <p>BOOKS</p>
            </NavLink>
            <NavLink
              className="nav-item"
              to="/categories"
            >
              <p>CATEGORIES</p>
            </NavLink>
          </div>
          <div className="user">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" /></svg>
          </div>
        </div>
      </nav>

      <Switch>
        <Route className="content home" exact path="/"><Home /></Route>
        <Route className="content categories" path="/categories"><Categories /></Route>
      </Switch>

    </Router>
  );
}

export default App;
