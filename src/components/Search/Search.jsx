import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostByName } from '../../redux/posts/postsSlice';

const Search = () => {
  const { posts } = useSelector((state) => state.posts);
  const { postName } = useParams();
  const dispatch = useDispatch();
  console.log();
  useEffect(() => {
    dispatch(getPostByName(postName));
    console.log(postName);
  }, [postName]);

  return (
    <>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.username}</h2>
          <h3>{post.title}</h3>
        </div>
      ))}
    </>
  );
};

export default Search;
