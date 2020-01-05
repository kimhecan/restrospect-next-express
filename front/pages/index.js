import React from 'react';
import PostForm from '../components/PostForm';
import Login from '../components/login';
import { useSelector } from 'react-redux';
import PostCard from '../components/PostCard';
import { LOAD_POST_REQUEST } from '../reducer/post';

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
        {mainPosts.map((v) => {
          return (
            <PostCard key={v.id} post={v} />
          )
        })}
      </div>
      :
      <Login />}
    </>
  )
}
export default Home;
