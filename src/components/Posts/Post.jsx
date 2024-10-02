import { Card } from 'antd';

const Post = ({ username, body, index }) => {
  return (
    <>
      <Card className="postHome">
        Post nº {index + 1}
        {/* <img
          src={`http://localhost:3001/${post.post_img}`}
          alt=""
          width="300px"
        /> */}
        <p>
          <b>@{username}</b> {body}
        </p>
      </Card>
    </>
  );
};

export default Post;
