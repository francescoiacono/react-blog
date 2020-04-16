import React from 'react';
import classes from './Button.module.css';

const Button = (props) => (
  <a href={props.link} onClick={props.clicked} className={classes.Button}>
    {props.children}
  </a>
);

export default Button;
