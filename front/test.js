const date2 = new Date().toLocaleDateString().split('-').map(v => Number(v));
console.log(date2, 'date2');



let createdAt = "2020-01-16T11:02:59.000Z";

const a = createdAt.substring(0,10).split('-').map(v => Number(v));
console.log(a);


// for(let i = 0; i < date2.length; i++) {
//   if (date2[i] == a[i]) {
//     continue;
//   } else {
//     console.log(성공);
//   }
// }





