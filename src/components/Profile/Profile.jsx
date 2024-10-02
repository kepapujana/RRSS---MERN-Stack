import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostsUsername } from '../../redux/posts/postsSlice';
import { Card } from 'antd';
import './Profile.styles.scss';

const Profile = () => {
  const { posts } = useSelector((state) => state.posts);
  const { username } = useParams(); // Esto debe ser una cadena

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsUsername(username)); // Envía username para buscar posts
    console.log(username);
  }, [username]);

  return (
    <div className="postsProfile">
      {posts &&
        posts.map((post, index) => (
          <div key={post._id}>
            <Card className="post">
              <h2>Post nº {index}</h2>
              <p>
                <b>@{post.username}</b> {post.body}
              </p>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default Profile;
