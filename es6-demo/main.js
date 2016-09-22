'use strict';





let foo=42;

var result = [1, 2, 3].map(value => {

  return `The value is ${value} ${foo}`;
});
console.log(result);

















//
// foo([1, 2, 3]);
// function foo (arr) {
//   var i;
//   console.log(i);
//   const LENGTH = 100;
//   let sum = 0;
//
//   for (let i = 0; i < arr.length; i++) {
//     sum += i;
//     console.log(sum);
//   }
// }
