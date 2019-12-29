import React from 'react';
import Login from './login';

const dummy = {
  isLoggedIn: true
}

const Home = () => {
  return (
    <>
      {dummy.isLoggedIn ? <Login /> : ''}
    </>
  )
}

export default Home;
