import axios from 'axios';

const API_URL = 'http://localhost:3001';

const getAll = async () => {
  const res = await axios.get(API_URL + '/posts');
  //para traer solo los datos del post, y no los estados...
  return res.data;
};

const getPostByName = async () => {
  const res = await axios.get(API_URL + '/posts/username');
  //para traer solo los datos del post, y no los estados...
  return res.data;
};

const postsService = { getAll, getPostByName };

export default postsService;
