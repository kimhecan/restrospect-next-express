import React from 'react';
import PostForm from '../components/PostForm';
import Login from '../components/login';
import { useSelector } from 'react-redux';

const Home = () => {

  const { user } = useSelector(state => state.user);

  return (
    <>
      {user.userId !== null  ? <PostForm /> : <Login />}
    </>
  )
}

export default Home;
