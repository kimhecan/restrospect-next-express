import React from 'react';
import PostForm from '../components/PostForm';
import Login from '../components/login';


const dummy = {
  isLoggedIn: false,
}

const Home = () => {
  return (
    <>
      {dummy.isLoggedIn ? <PostForm /> : <Login />}
    </>
  )
}

export default Home;
