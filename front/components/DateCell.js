import React from 'react';
import styled from 'styled-components';
import { isPostDate } from '../functions/postDate';

const Div = styled.div`
  background-color: #00f603;
  width: 65px;
  height: 3px;
  margin-top: 0px;
`

const DateCell = ({date}) => {

  const isPosted = isPostDate(date);

  return (
    <>
    {isPosted ? 
      <Div></Div>
      :
      null
    }
    </>
  )
}

export default DateCell;