import React from 'react';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

const Profile = () => {
  return (
    <>
      <div>
        <Card
          style={{ width: 500,margin: '50px',position: 'absolute', left: '40%' }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,
            <Icon type="ellipsis" key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>,
      </div>
    </>
  )
}

export default Profile;