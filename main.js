// //Event objects

// const logo = document.querySelector('img');

// function onClick(e){
//    console.log(e.target);
//    console.log(e.currentTarget);

// };

// logo.addEventListener('click', onClick);

//Arrays Challenge
const arr = [1, 2, 3, 4, 5];
arr.unshift(0);
arr.push(6);
arr.reverse();
console.log(arr)

// Challenge two : Instructions:

// Combine arr1 and arr2 into a new array called arr3 with the following elements:

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = arr1.slice(0, 4).concat(arr2);

console.log(arr3);