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
              <Card className="post">
                <Link to={`/post/${post._id}`}>Post nº {index + 1}</Link>
                <img
                  src={`http://localhost:3001/${post.post_img}`}
                  alt=""
                  width="300px"
                />
                <p>
                  <b>@{post.username}</b> {post.body}
                </p>
                {post.comments.length > 0 ? (
                  post.comments.map((comment) => (
                    <div key={comment._id}>
                      <p className="comment">{comment.comment}</p>
                    </div>
                  ))
                ) : (
                  <li>There isn't comments in the post</li>
                )}
              </Card>
            </div>
          ))}
    </div>
  );
};

export default Posts;
