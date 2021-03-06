import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/login">Sign In</NavLink></li>
        <li><NavLink to="/signup">Sign Up</NavLink></li>
        <li><NavLink to="/testList">testList</NavLink></li>
        <li><NavLink to="/dashboard/item_1">Dashboard</NavLink></li>
      </ul>

    </nav>
  );
};

export default Navigation;