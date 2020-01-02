import React, { useEffect } from 'react';
import PostForm from '../components/PostForm';
import Login from '../components/login';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_USER_REQUEST } from '../reducer/user';

const Home = () => {

  const { user } = useSelector(state => state.user);

  return (
    <>
      {user.userId !== null  ? <PostForm /> : <Login />}
    </>
  )
}


Home.getInitialProps = async (context) => {
  console.log(Object.keys(context));
};

export default Home;
