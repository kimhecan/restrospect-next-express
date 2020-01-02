import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useInput } from '../pages/signup';
import { LOG_IN_REQUEST } from '../reducer/user';


const Login = () => {
  const [userId, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const dispatch = useDispatch();

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        userId,
        password
      }
    });
  }, [userId, password]);

  return (
    <>
      <div>
        <img src="https://user-images.githubusercontent.com/39295881/71653597-a2415880-2d70-11ea-9c14-719df1872c41.png"
             style={{position: 'absolute', left: '59%', top: '50%', width: '50px', margin: '15px'}}
        />
      </div>
      <div style={{  position: 'absolute', left: '55%', top: '50%', fontSize: '20px', marginTop: '75px' }}>
        <span>Sign in to Retrospect</span>

      </div>
      <div style={{ position: 'absolute', left: '50%', top: '50%', marginTop: '125px', padding:'40px', border: '2px solid #ccc', borderRadius: '5px' }}>
        <Form onSubmit={onSubmitForm}>
          <div>
            <label htmlFor="user-id" style={{ color: 'black', fontWeight: 'bold'}}>아이디</label>
            <br />
            <Input name="user-id" value={userId} onChange={onChangeId} style={{width: '250px'}} required />
          </div>
          <br />
          <div>
            <label htmlFor="user-password" style={{ color: 'black', fontWeight: 'bold'}}>비밀번호</label>
            <br />
            <Input name="user-password" value={password} onChange={onChangePassword} type="password" style={{width: '250px'}} required />
          </div>
          <br />
          <div style={{ marginTop: '10px' }}>
            <Button type="primary" htmlType="submit" style={{marginRight:'6px', width: '120px', backgroundColor: '#00001a', borderColor: '#00001a' }}>로그인</Button>
            <Link href="/signup"><a><Button style={{ width: '120px' }}>회원가입</Button></a></Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
