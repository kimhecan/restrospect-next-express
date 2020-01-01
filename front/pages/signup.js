import React, { useState, useCallback } from 'react';
import Link from 'next/link'
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { SIGN_UP_REQUEST } from '../reducer/user'; 

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signup = () => {
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const [userId, onChangeId] = useInput('');
  const [nick, onChangeNick] = useInput('');
  const [password, onChangePassword] = useInput('');
  const dispatch = useDispatch();

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  })

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if(password !== passwordCheck) {
      return setPasswordError(true);
    }
    dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        nick,
        userId,
        password,
      }
    })
    history.back();
  }, [nick, userId, password, passwordCheck]);


  return (
    <>
      <Form onSubmit={onSubmit} style={{ position: 'absolute', left: '50%', top: '50%', marginTop: '50px'}}>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input name="user-nick" value={nick} required onChange={onChangeNick} style={{width: '400px'}} />
        </div>
        <br />
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={userId} onChange={onChangeId} required style={{width: '400px'}}/>
        </div>
        <br />
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" type="password" value={password} onChange={onChangePassword} required style={{width: '400px'}}/>
          <br />
        </div>
        <br />
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <Input name="user-password-check" type="password" value={passwordCheck} onChange={onChangePasswordCheck} required style={{width: '400px'}}/>
          {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
        </div>
        <br />
        <div>
          <Button type="primary" htmlType="submit" style={{width: '400px'}}>가입하기</Button>
        </div>
      </Form>
    </>
  );
};

export default Signup;