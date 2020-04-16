import React from 'react';
import classes from './Navbar.module.css';
import { Route, NavLink } from 'react-router-dom';

import Posts from '../../../containers/Posts/Posts';
import NewPost from '../../../containers/NewPost/NewPost';

const Navbar = () => (
  <nav className={classes.Navbar}>
    <ul>
      <li>
        <NavLink to='./' exact>
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink to='/new-post'>New Post</NavLink>
      </li>
    </ul>

    <Route path='/' exact component={Posts} />
    <Route path='/new-post' component={NewPost} />
  </nav>
);

export default Navbar;
