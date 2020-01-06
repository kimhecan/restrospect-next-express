import React from 'react';
import PropsTypes from 'prop-types';

const PostCardContent = ({ postData }) => {
  return (
    <>
      {postData ? 
        postData.split(/(\<[^\>]+\>)/g).map((v) => {
          if (v.match(/\<[^\>]+\>/)) {
            return (
              <strong key={v} style={{color: 'black', fontSize: '20px'}}>{v}</strong>
            )
          }
          return v.split('\n').map(value => {
            return <p style={{color: 'black', fontSize: '15px'}} key={value}>{value}</p>
          })
        }): undefined}
    </>
  )
}

export default PostCardContent;