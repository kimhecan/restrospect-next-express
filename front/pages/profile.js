import React from 'react';
import { Row, Col, Statistic } from 'antd';
import { useSelector } from 'react-redux';

const Profile = () => {

  const { mainPosts } = useSelector(state => state.post);
  

  return (
    <>
      <div>

        <Row gutter={16} style={{margin: 50, backgroundColor: '#F6F6F6', border: '2px soild black', padding: '150px'}}>
          <Col span={12}>
            <Statistic title="Post Count" value={mainPosts.length} valueStyle={{ color: '#3f8600' }} style={{ backgroundColor: 'white', padding: '20px'}} />
          </Col>
          <Col span={12}>
            <Statistic title="Your Class" value={'초심자'}  valueStyle={{color: '#FFD700'}} style={{ backgroundColor: 'white', padding: '20px'}}/>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Profile;