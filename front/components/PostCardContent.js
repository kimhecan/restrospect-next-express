import React from 'react';
import PropsTypes from 'prop-types';

const PostCardContent = ({ postData }) => {
  return (
    <>
      {postData.split(/(\<[^\>]+\>)/g).map((v, i) => {
          if (v.match(/\<[^\>]+\>/)) {
            return (
              <strong key={i} style={{color: 'black', fontSize: '20px'}}>{v}</strong>
            )
          }
          return v.split('\n').map((value, i) => {
            return <p style={{color: 'black', fontSize: '15px'}} key={i}>{value}</p>
          })
        })
      }
    </>
  )
}

export default PostCardContent;