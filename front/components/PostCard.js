import React from 'react';
import { Avatar, Button, Card, Form, Icon, List } from 'antd';
import PropsTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import PostCardContent from './PostCardContent';

const { Meta } = Card;
const PostCard = ({ post }) => {
  console.log(post);
  const dispatch = useDispatch();

  

  return (
    <>
      <Card
        style={{ margin: '10px 0 20px' }}
        actions={[
          <Icon type="setting" key="setting" />,
          <Icon type="edit" key="edit" />,
          <Icon type="ellipsis" key="ellipsis" />,
        ]}
      >
        <Meta
          title="게시글"
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
    </>
  )
}


export default PostCard;