import React, { Component } from 'react';
import axios from '../../axios';
import classes from './NewPost.module.css';
import Button from '../../components/UI/Button/Button';
class NewPost extends Component {
  state = {
    title: '',
    body: '',
    author: 'Francesco',
  };

  postDataHandler = () => {
    const post = {
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
    };

    axios
      .post('/posts.json', post)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className={classes.NewPost}>
        <header className={classes.Section}>
          <p>Create a new post</p>
        </header>
        <div className={classes.Title}>
          <label>Topic Title</label>
          <input
            placeholder='Subject of your topic'
            type='text'
            value={this.state.title}
            onChange={(event) => this.setState({ title: event.target.value })}
          ></input>
        </div>
        <div className={classes.Body}>
          <label>Topic Body</label>
          <textarea
            placeholder='Write here'
            type='text'
            value={this.state.body}
            onChange={(event) => this.setState({ body: event.target.value })}
          ></textarea>
        </div>
        <div className={classes.Select}>
          <label>Topic Author</label>
          <select
            value={this.state.author}
            onChange={(event) => this.setState({ author: event.target.value })}
          >
            <option value='Francesco'>Francesco</option>
            <option value='Senno'>Senno</option>
          </select>
        </div>
        <div className={classes.Submit}>
          <Button clicked={this.postDataHandler}>Submit</Button>
        </div>
      </div>
    );
  }
}

export default NewPost;
