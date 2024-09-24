import { useSelector } from 'react-redux';
import { Card } from 'antd';

const Profile = () => {
  // const { user } = useSelector((state) => state.postUser);

  return (
    <div className="posts">
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
