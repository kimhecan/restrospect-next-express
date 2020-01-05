import React from 'react';
import PropsTypes from 'prop-types';

const PostCardContent = ({ postData }) => {
  return (
    <>
      {postData.split(/(\<[^\>]+\>)/g).map((v) => {
        if (v.match(/\<[^\>]+\>/)) {
          return (
            <strong key={+v} style={{color: 'black'}}>{v}</strong>
          )
        }
        return (
        <p key={+v}>{v +'\n'}</p>
        );
      })}
    </>
  )
}

export default PostCardContent;