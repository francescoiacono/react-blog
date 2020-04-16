import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-blog-tests.firebaseio.com/',
});

export default instance;
