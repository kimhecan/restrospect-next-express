import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';


const Buttons = () => {


  const StyledButton = styled(Button)`
    width: 500px;
    margin-top: 50px;
    height: 100px;
    background-color: white;
    border-color: black;
    border-radius: 10px;
    color: black;
  `

  const StyledImage = styled.img`
    width: 55px;
    margin-top: 15px;
    float: left;
  `
  const StyledPara = styled.p`
    color: gray;
    margin-top: 5px;

  `

  return (
    <>
      <br/>
      <br/>
      <StyledButton href="https://opentutorials.org/course/1" target="_blank">
          <StyledImage src="https://user-images.githubusercontent.com/39295881/72589647-2d107e80-393f-11ea-9f03-d8a7605841f4.png"/>
          <StyledPara style={{color: 'gray'}}>
            생활코딩은 프로그래밍을 알려주는 무료 온라인, 오프라인 수업<br/>
            입니다. 비전공자도 쉽게 배울 수 있도록 설명하며 다양한 분야<br/>
            를 넓게 배울 수 있습니다.

          </StyledPara>
          
      </StyledButton>
      <StyledButton href="https://programmers.co.kr/" target="_blank">
          <StyledImage src="https://user-images.githubusercontent.com/39295881/72590937-51218f00-3942-11ea-8021-bcb45af2c275.png"/>
        <StyledPara>
          프로그래머스코드 중심의 개발자 채용. 스택 기반의 포지션 매칭.<br/>
          개발자 맞춤형 프로필을 등록하고, 나와 기술 궁합이 잘 맞는<br/>
          기업들을 매칭 받으세요.
        </StyledPara>
      </StyledButton>
      <StyledButton href="https://www.acmicpc.net/" target="_blank">
          <StyledImage src="https://user-images.githubusercontent.com/39295881/72591712-37814700-3944-11ea-8e90-a8966b8a0ad1.png"/>
        <StyledPara>
          백준은 컴퓨터 프로그래밍 알고리즘 문제 풀이 서비스를<br/>
          제공해주는 웹사이트이다
        </StyledPara>
      </StyledButton>
    </>
  )
}


export default Buttons;