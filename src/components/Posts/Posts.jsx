import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, reset } from '../../redux/posts/postsSlice';
import AddBook from './AddPosts';
import Post from './Post';
import { Link } from 'react-router-dom';
import './Posts.styles.scss';

const Posts = () => {
  const { posts } = useSelector((state) => state.posts);
  const { isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      await dispatch(getPosts());
      await dispatch(reset());
    };
    fetchPosts();
  }, [dispatch]);

  return (
    <>
      <div className="addPost">
        <AddBook />
      </div>
      <div className="posts">
        {isLoading
          ? 'Cargando...'
          : posts &&
            posts.map((post, index) => (
              <Link to={`/post/${post._id}`}>
                <Post
                  key={post._id}
                  index={index}
                  username={post.username}
                  body={post.body}
                />
              </Link>
            ))}
      </div>
    </>
  );
};

export default Posts;
