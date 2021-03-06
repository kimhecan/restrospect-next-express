import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PropsTypes from 'prop-types';
import { Menu, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducer/user';
import Calendars from '../components/Calendar';
import Buttons from '../components/Buttons';
const { SubMenu } = Menu;

const AppLayout = ({ children }) => {

  const [current, setCurrent] = useState('home');
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    if (current === 'logout') {
      dispatch({
        type: LOG_OUT_REQUEST
      });

    }
    if(current === 'private') {
    }
    setCurrent('');
  }, [current])

  return (
    <>
      <Menu mode="horizontal" selectedKeys={current} onClick={handleClick} style={{ backgroundColor: '#00001a'}}>
        <Menu.Item key="home"><Link href="/"><a style={{ color: 'white'}}>RESTROSPECT</a></Link></Menu.Item>
        <Menu.Item key="search">
          {/* <Input.Search enterButton style={{ verticalAlign: 'middle', backgroundColor: '#000066' }}  /> */}
        </Menu.Item>
        <SubMenu title={ <span className="submenu" style={{color: 'white'}}>{user ? user.nick : ''}</span>} style={{ float: 'right' }}>
          <Menu.Item key="private"><Link href="/profile"><a>개인정보</a></Link></Menu.Item>
          <Menu.Item key="help"><Link href="/help"><a>Help</a></Link></Menu.Item>
          <Menu.Item key="logout"><Link href="/"><a>로그아웃</a></Link></Menu.Item>
        </SubMenu>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={16}>
          {children}
        </Col>
        <Col xs={24} md={8}>
          {user.nick ?  <Calendars /> : '' }
          {user.nick ? <Buttons /> : ''}
        </Col>
      </Row>
    </>
  )
}

AppLayout.propTypes = {
  children: PropsTypes.node,
}


export default AppLayout;