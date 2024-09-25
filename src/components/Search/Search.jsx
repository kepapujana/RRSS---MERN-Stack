import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostByName } from '../../redux/posts/postsSlice';

const Search = () => {
  // const { posts } = useSelector((state) => state.posts);
  // const { postName } = useParams();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPostByName(postName));
  // }, [postName]);

  return <div>Search</div>;
};

export default Search;
