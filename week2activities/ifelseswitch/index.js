// ACTIVITY-1--------------------------------------------

// let age = 17
// let country = "UK"

// if (age > 17 && country == "UK") {
//     console.log("Yes, I can serve you");
// } else {
//     console.log("You aren't old enough");
// }

// ACTIVITY-2--------------------------------------------

// let topping = "Mushrooms";

// switch(topping) {
//     case "Pepperoni":
//     case "Chicken":
//     case "Bacon":
//         console.log("These are important ingredients for my pizza.")
//         break;
//     case "Onions":
//     case "Peppers":
//     case "Beef":
//         console.log(`I don't mind having ${topping} on my pizza.`)
//         break;
//     default:
//         console.log(`${topping} should not be on pizza.`)
// }

// ACTIVITY-3---------------------------------------------

// let password = "Password";

// if (password.length < 8) {
//     console.log("The password is too short.")
// } else {
//     console.log(`${password}`)
// }

//STRETCH--------------------------------

// let num = 15;

// if (num % 3 === 0 || num % 5 === 0) {
//   console.log("This number is divisible by 3 or 5");
// } else {
//   console.log("This number is not divisible by 3 or 5");
// }

// ACTIVITY-4---------------------------------------------

// let num = 9;

// if (num % 3 === 0 && num % 5 === 0) {
//   console.log("Fizz Buzz")
// } else if (num % 5 === 0) {
//   console.log("Buzz");
// } else if (num % 3 === 0) {
//   console.log("Fizz");
// }

//ACTIVITY-5---------------------------------------------

// let num = 100

// let numString = num.toString();

// // let stringReversed = numString.reverse();   // .reverse not a function on it's own,  .split makes the characters of string into an array so they can be reversed?
// let stringReversed = numString.split('').reverse().join('');


// if (numString === stringReversed) {
//   console.log(`${num} is a palindrome`)
// } else {
//   console.log(`${num} is not a palindrome`)
// }

// ACTIVITY-6----------------------------------------------

// const time = 9
// const placeOfWork = "Shop"                   // unsure what to name these.
// const townOfHome = "Liverpool"

// if (time === 7) {
//   console.log(`I am at home in ${townOfHome}`)
// } else if (time === 8) {
//   console.log("I am commuting")
// } else if (time === 9) {
//   console.log(`I am working at the ${placeOfWork}`)
// }

// ACTIVITY-7------------------------------------------------

// const str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

// const vowels = "aeiou"; 

// let lastVowel = -1;

// for (let i = str.length - 1; i >= 0; i--) {     //iterates in reverse starting from the end of the string.
//       if (vowels.includes(str[i])) {
//         lastVowel = i;
//         break;
//       }
// };

// if (lastVowel !== -1) {   // not sure why "!== -1" is needed here but program will not work without it, need to use this more to understand properly.
//   console.log(`the index number ${lastVowel} is the location of the last vowel.`)
// };

// ACTIVITY-8-----------------------------------------------------

const word = "bob"

const firstLetter = word.charAt(0);
const lastLetter = word.charAt(word.length -1);

return firstLetter === lastLetter