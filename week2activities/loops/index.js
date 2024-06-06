// ACTIVITY-1---------------------------------------------------------------------------------

// let faveSongs = [
//   "American Pie - Don McLean",
//   "Vampires - The Midnight",
//   "Light Years - The Midnight",
// ];

// console.log(faveSongs);

// faveSongs.push("Live Life - Crush 40");
// console.log(faveSongs);

// faveSongs.push("Waiting for a star to fall - Boy Meets Girl");
// console.log(faveSongs);

// faveSongs.pop();
// console.log(faveSongs);

// ARRAY-MAP---------------------------------------------------------------------------------

// let num = [18, 44, 76, 130, 662];
// let sqrtArr = num.map(Math.sqrt);

// console.log(sqrtArr);

// let numTwo = [7, 53, 78, 99, 234];
// let multArr = numTwo.map(myFunction);

// function myFunction(num) {
//   return num * 20;
// }

// console.log(multArr);

// ARRAY-SPLICE---------------------------------------------------------------------------------

// let arr = ["Orange", "Red", "Blue", "Purple", "Green"];

// console.log(arr);

// arr.splice(3, 0, "Yellow");

// console.log(arr);

// let oddNums = [];

// for (let i = 0; i < 20; i++) {
//   if (i % 2 != 0) {
//     oddNums.push(i);
//   }
// }

// console.log(oddNums);

// ACTIVITY-WHILE-LOOPS---------------------------------

// ACTIVITY-1-------------------------------------------

// let faveFilms = [
//   "Stardust",
//   "Shrek",
//   "Your Name",
//   "Cyberpunk 2077",
//   "Goofy Movie",
// ];

// faveFilms.push("Pokemon the movie 2000", "Back to the Future");

// for (let i = 0; i < faveFilms.length; i++) {
//   console.log(faveFilms[i]);
// }

// ACTIVITY-2------------------------------------------------------

// let ranNum = Math.floor(Math.random() * 50);
// let ranNumArr = [
//   `${ranNum}`,
//   `${ranNum}`,
//   `${ranNum}`,
//   `${ranNum}`,
//   `${ranNum}`,
//   `${ranNum}`,
// ];
// for (let i = 0; i < ranNumArr.length; i++) {
//   console.log(ranNumArr);
// }

// what is happening?
// all numbers are generating randomly, but they're all the same

// why is this happening?
// I have created an Array, each with `ranNum` as the target variable, so the number is being generated first and then my array is simply telling me the number 6 times

// what are my options?
// to remake the array but not assign any values inside of it, then us the .push method in my for loop to have my code generate a new number after generating another, up to a maximum of 6.

// how did it go and what have I learned?
// it went well and my problem was solved. I have learned that it's not always best to manually create arrays when dealing with random numbers.

let ranNumArr = [];

for (let i = 0; i < 6; i++) {
  ranNumArr.push(Math.floor(Math.random() * 50));
  console.log(ranNumArr);
}
