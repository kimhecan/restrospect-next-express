import React from 'react';
import PropsTypes from 'prop-types';
import { Typography } from 'antd';

const { Paragraph } = Typography;

const PostCardContent = ({ postData }) => {

  const content = postData.content;

  const onChange = (str) => {

  }

  
  return (
    <>
      {content.split(/(º오늘 한 일|º문제점|º내일 할 일)/g).map((v, i) => {
          if (v.match(/º오늘 한 일|º문제점|º내일 할 일/)) {
            return (
              <strong key={i} style={{color: 'gray', fontSize: '15px'}}>{v}</strong>
            )
          }
          return v.split('\n').map((value, i) => {
            return <p style={{ color: 'black'}} key={i}>{value}</p>
          })
        })
      }
    </>
  )
}

export default PostCardContent;