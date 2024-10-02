import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../redux/posts/postsSlice';
import Posts from '../Posts/Posts';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      <Posts />
    </>
  );
};

export default Home;
