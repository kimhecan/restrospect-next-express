import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
  width: 500px;
  margin-top: 50px;
  height: 100px;
  background-color: white;
  border-color: #0366d6;
  border-radius: 10px;
  color: black;
`

const Image = styled.img`
width: 55px;
margin-top: 5px;
`


const Buttons = () => {
  return (
    <>
      <Button href="https://opentutorials.org/course/1" target="_blank">
        <span>
          <Image src="https://user-images.githubusercontent.com/39295881/72589647-2d107e80-393f-11ea-9f03-d8a7605841f4.png"/>
        </span>
        <span>
          생활코딩은 프로그래밍을 알려주는 무료 온라인, 오프라인 수업<br/>
        </span>
      </Button>
      <Button href="https://programmers.co.kr/" target="_blank">
        <div style={{float: 'left'}}>
          <Image src="https://user-images.githubusercontent.com/39295881/72590937-51218f00-3942-11ea-8021-bcb45af2c275.png"/>
        </div>
        <p>
          프로그래머스코드 중심의 개발자 채용. 스택 기반의 포지션 매칭.<br/>
          개발자 맞춤형 프로필을 등록하고,<br/>
          나와 기술 궁합이 잘 맞는 기업들을 매칭 받으세요.
        </p>
      </Button>
      <Button href="https://www.acmicpc.net/" target="_blank">
        <div style={{float: 'left'}}>
          <Image src="https://user-images.githubusercontent.com/39295881/72591712-37814700-3944-11ea-8e90-a8966b8a0ad1.png"/>
        </div>
        <p>
          백준은 컴퓨터 프로그래밍 알고리즘 문제 풀이 서비스를<br/>
          제공해주는 웹사이트이다
        </p>
      </Button>
    </>
  )
}


export default Buttons;