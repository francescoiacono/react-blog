import React from 'react';
import classes from './Post.module.css';

import Button from '../UI/Button/Button';

const Post = (props) => {
  return (
    <div className={classes.Post}>
      <div className={classes.Title}>
        <h2>{props.title}</h2>
      </div>
      <div className={classes.Body}>
        <p>{props.body}</p>
      </div>
      <div className={classes.ReadMore}>
        <Button link='./Post'>Read More</Button>
      </div>
    </div>
  );
};

export default Post;
