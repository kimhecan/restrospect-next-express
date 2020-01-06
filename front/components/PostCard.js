import React from 'react';
import { Avatar, Button, Card, Form, Icon, List } from 'antd';
import PropsTypes from 'prop-types';
import PostCardContent from './PostCardContent';
import { useDispatch } from 'react-redux';
import { DELETE_POST_REQUEST } from '../reducer/post';

const { Meta } = Card;
const PostCard = ({ post }) => {

  const dispatch = useDispatch();

  const onDeleteBtn = () => {
    alert('삭제하시겠습니까?');
    dispatch({
      type: DELETE_POST_REQUEST,
      data: post.id
      
    })
  }
  
  return (
    <>
      <Card
        style={{ margin: '30px', width: '1000px' }}
        actions={[
          <Icon type="setting" key="setting" />,
          <Icon type="edit" key="edit" />,
          <Icon type="delete" key="delete" onClick={onDeleteBtn} />,
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