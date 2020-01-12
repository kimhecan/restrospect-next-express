import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Empty, Row, Col } from 'antd';
import PostForm from '../components/PostForm';
import Login from '../components/login';
import PostCard from '../components/PostCard';
import Introduce from '../components/Intoduce';

const Home = () => {

  const { user } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  return (
    <>
      {user.userId !== null  ? 
      <div>
        <PostForm />
        <br />
        <br />
        { mainPosts.length ? mainPosts.map((v) => {
          return (
            <PostCard key={v.id} post={v} />
          )
        })
        :
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}  style={{ width: '1000px'}}/>
       }

      </div>
      :
      <div>
        <Login/>
        <Introduce />
      </div>
      }
    </>
  )
}
export default Home;
