import axios from 'axios';

const API_URL = 'http://localhost:3001';

const getAll = async () => {
  const res = await axios.get(API_URL + '/posts');
  //para traer solo los datos del post, y no los estados...
  return res.data;
};

const getById = async (id) => {
  const res = await axios.get(API_URL + '/posts/id/' + id);
  return res.data;
};

const getPostsUsername = async (username) => {
  const res = await axios.get(`${API_URL}/posts/username/${username}`);
  //para traer solo los datos del post, y no los estados...
  console.log(res.data);
  return res.data;
};

const getPostByName = async (postName) => {
  const res = await axios.get(`${API_URL}/posts/username/${postName}`);
  console.log(res.data);
  return res.data;
};

const postsService = { getAll, getById, getPostByName, getPostsUsername };

export default postsService;
