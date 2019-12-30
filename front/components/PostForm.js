import React from 'react';
import { Form, Input, Button } from 'antd';

const dummy ={

};

const PostForm = () => {
  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data">
    <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
    <div>
      <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
    </div>
  </Form>
  )
}

export default PostForm;