import React, { Component } from 'react';
import classes from './Blog.module.css';

import Navbar from '../../components/Navigation/Navbar/Navbar';

class Blog extends Component {
  render() {
    return (
      <div className={classes.Blog}>
        <header>
          <h1>My Blog</h1>
          <Navbar />
        </header>
      </div>
    );
  }
}

export default Blog;
