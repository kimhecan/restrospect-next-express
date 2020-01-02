import React from 'react';
import { Form, Input, Button } from 'antd';

const PostForm = () => {
  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data">
    <Input.TextArea maxLength={500} placeholder="어떤 신기한 일이 있었나요?" style={{ height: '200px'}}/>
    <div>
      <Button type="primary" style={{ float: 'right', backgroundColor: '#00001a', borderColor: '#00001a' }} htmlType="submit">발행</Button>
    </div>
  </Form>
  )
}

export default PostForm;