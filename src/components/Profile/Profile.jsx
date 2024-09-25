import { useSelector, useDispatch } from 'react-redux';
import { getPostByName } from '../../redux/posts/postsSlice';
import { Card } from 'antd';
import './Profile.styles.scss';

const Profile = () => {
  return (
    <div className="postsProfile">
      {/* {user.map((post, index) => (
        <div key={post._id}>
          <Card className="post">
            <h2>Post nº {index}</h2>
            <p>
              <b>@{post.username}</b> {post.body}
            </p>
          </Card>
        </div>
      ))} */}
    </div>
  );
};

export default Profile;
