import React from 'react';
import { useSelector } from 'react-redux'

//postsDate 2020-01-09
//calendatCell 01 09 2020


const DateCell = ({date}) => {

  const month = ["None","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug", "Sep","Oct","Nov","Dec"];
  const { mainPosts } = useSelector(state => state.post);
  const postsDate = mainPosts.map(v => String(v.createdAt).substring(0,10));
  let calendarCell = String(date._d).substring(4,15);
  let index = 0
  let isPosted = false;

  for(let i = 0; i <= 12; i++) {
    if(calendarCell.substring(0,3) == month[i]) {
      if (Number(month.indexOf(month[i])) < 10) {
        index =  '0'+ month.indexOf(month[i])
      } else {
        index = month.indexOf(month[i])
      }
      calendarCell = calendarCell.replace(calendarCell.substring(0,3), index)
    }
  }

  for(let i = 0; i < postsDate.length; i++) {
    if (postsDate[i].substring(0,4) == calendarCell.substring(6,10) &&
        postsDate[i].substring(5,7) == calendarCell.substring(0,2) &&
        postsDate[i].substring(8,10) == calendarCell.substring(3,5) ) {
          isPosted = true;
    }
  }
  

  return (
    <>
    {isPosted ? 
      <div style={{ backgroundColor:'#00f603', width: '65px', height: '3px', marginTop: '0px'}}></div>
      :
      null
    }
    </>
  )
}

export default DateCell;