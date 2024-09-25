import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, reset } from '../../redux/posts/postsSlice';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
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
    <div className="posts">
      {isLoading
        ? 'Cargando...'
        : posts.map((post, index) => (
            <div key={post._id}>
              <Link to={`/post/${post._id}`}>
                <Card className="post">
                  Post nº {index + 1}
                  <img
                    src={`http://localhost:3001/${post.post_img}`}
                    alt=""
                    width="300px"
                  />
                  <p>
                    <b>@{post.username}</b> {post.body}
                  </p>
                </Card>
              </Link>
            </div>
          ))}
    </div>
  );
};

export default Posts;
