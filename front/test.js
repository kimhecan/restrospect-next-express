const moment = require('moment')

const month = ["None","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug", "Sep","Oct","Nov","Dec"];

console.log(month.indexOf("None"))

let calendarCell = 'Nov 09 2020';
let index = 0;

// for(var i = 0; i <= 12; i++) {
//   if(calendarCell.substring(0,3) == month[i]) {
//     if (Number(month.indexOf(month[i])) < 10) {
//       index =  '0'+ month.indexOf(month[i])
//     } else {
//       index = month.indexOf(month[i])
//     }
//     calendarCell = calendarCell.replace(calendarCell.substring(0,3), index)
//     console.log(calendarCell);
//   }
// }


console.log(month.length);
