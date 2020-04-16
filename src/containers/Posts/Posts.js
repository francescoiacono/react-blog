import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import axios from '../../axios';
import classes from './Posts.module.css';

class Posts extends Component {
  state = {
    posts: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get('/posts.json')
      .then((response) => {
        if (response.data != null) {
          const posts = response.data;
          console.log(posts);
          const updatedPosts = Object.keys(posts).map((post) => {
            return {
              ...posts[post],
              author: 'Francesco',
            };
          });

          this.setState({ posts: updatedPosts, loading: false });
        } else {
          this.setState({ loading: false });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  abstractHandler = (post) => {
    const chars = post.body.split('');
    if (chars.length > 100) {
      chars.splice(100, chars.length);
    }
    chars.join('');
    chars.push('...');

    return chars;
  };

  render() {
    let posts = <p>Loading...</p>;

    if (!this.state.loading && this.state.posts.length > 0) {
      posts = this.state.posts.map((p) => {
        const abstract = this.abstractHandler(p);
        return <Post key={p.id} title={p.title} body={abstract} />;
      });
    }
    if (!this.state.loading && this.state.posts.length === 0) {
      posts = (
        <p style={{ color: '#ccc', padding: '10px' }}>No content available</p>
      );
    }
    return <div className={classes.Posts}>{posts}</div>;
  }
}

export default Posts;
