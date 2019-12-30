import React from 'react';
import Link from 'next/link';
import PropsTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';
import { useSelector } from 'react-redux';


const { SubMenu } = Menu;
const AppLayout = ({ children }) => {

  const { user } = useSelector(state => state.user);
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>restropect</a></Link></Menu.Item>
        <Menu.Item key="search">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
        <SubMenu title={ <span className="submenu">{user.nick}</span>} style={{ float: 'right' }}>
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </SubMenu>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={20}>
          {children}
        </Col>
        <Col xs={24} md={4}>
          달력예정
        </Col>
      </Row>
    </>
  )
}

AppLayout.propTypes = {
  children: PropsTypes.node,
}

export default AppLayout;