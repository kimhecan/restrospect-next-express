import React from 'react';
import { useSelector } from 'react-redux';
import { Empty } from 'antd';
import PostForm from '../containers/PostForm';
import Login from '../containers/login';
import PostCard from '../containers/PostCard';
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
