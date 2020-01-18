import React from 'react';
import { Row, Col, Statistic, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { classify, classifyColor } from '../functions/class'

const { Paragraph } = Typography

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
            <Statistic title="Your Class" value={classify(mainPosts.length)}  valueStyle={{color: classifyColor(mainPosts.length)}} style={{ backgroundColor: 'white', padding: '20px'}}/>
          </Col>
        </Row>
        <Row>
          <Paragraph style={{marginLeft: '350px', color: '#BDBDBD'}}>
            {'Post Count < 10 : 초보, Post Count < 50 : 중수, Post Count < 100 : 고수, Post Count > 100 : 마스터'}
          </Paragraph>
        </Row>
      </div>
    </>
  )
}

export default Profile;