import React, { useState, useEffect, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { ADD_POST_REQUEST, LOAD_POST_REQUEST } from '../reducer/post'

const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, setter, handler];
};


const PostForm = () => {

  const [firstText, setFirstText, changeFirstText] = useInput('');
  const [secondText, setSecondText, changeSecondText] = useInput('');
  const [thridText, setThridText,changeThridText] = useInput('');

  const { mainPosts } = useSelector(state => state.post);
  console.log(mainPosts);
  

  const dispatch = useDispatch();

  const onScroll = () => {
    if ( window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 100 ) {
      dispatch({
        type: LOAD_POST_REQUEST,
        lastId: mainPosts[mainPosts.length - 1].id
      })
    }  
  }

  useEffect(() => {
    if (mainPosts !== []) {
      dispatch({
        type: LOAD_POST_REQUEST
      }) 
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [mainPosts.length]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!firstText || !secondText || !thridText) {
      return alert('게시글을 작성하세요.');
    }
    const text = `º오늘 한 일 ${firstText} º문제점 ${secondText} º내일 할 일 ${thridText}`;
    dispatch({
      type: ADD_POST_REQUEST,
      data: text,
    });
    setFirstText('');
    setSecondText('');
    setThridText('');
  }
  return (
    <>
      <Form onSubmit={onSubmit} style={{ margin: '30px' }} encType="multipart/form-data">
        <Input.TextArea value={firstText}  onChange={changeFirstText} maxLength={500} placeholder="오늘 한 일(Facts (사실, 객관),Feelings (느낌, 주관),  Findings (배운 점)) " style={{ height: '150px', width: "1000px"}} />
        <Input.TextArea value={secondText} onChange={changeSecondText} maxLength={500} placeholder="문제점" style={{ height: '150px', width: "1000px"}}/>
        <Input.TextArea value={thridText} onChange={changeThridText} maxLength={500} placeholder="내일 할 일" style={{ height: '150px', width: "1000px"}}/><br /><br />
        <Button type="primary" style={{ backgroundColor: '#00001a', borderColor: '#00001a', width: "200px", marginLeft: "390px" }} htmlType="submit">발행</Button>
      </Form>
  </>
  )
}


export default PostForm;