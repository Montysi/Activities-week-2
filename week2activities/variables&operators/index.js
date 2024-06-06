
// ACTIVITY-1-------------------------------------------

// let myName = "Glorp"
// let myAge = 932
// let faveColour = "Green"

// console.log(`My name is ${myName}, I am ${myAge} years old and my favourite colour is ${faveColour}.`) //sentence-1
// console.log(`Hello Earthlings, my name is ${myName}, I am ${myAge} Earth years old and my favourite colour is ${faveColour}.`) //sentence-2-stretch



// ACTIVITY-2--------------------------------------------

// let breakfast = "Porridge"
// let lunch = "Ham Sandwich"
// let dinner = "Chicken Soup"

// console.log(`For breakfast today, I ate ${breakfast}, for lunch I ate a ${lunch} and for dinner I ate ${dinner}.`) //sentence-today
// console.log(`Tomorrow, for my breakfast, I will eat a ${breakfast}, for lunch I will eat ${lunch} and for dinner I will eat ${dinner}.`) //sentence-2-stretch


// ACTIVITY-3---------------------------------------------


// const today = new Date();
// today.setHours(0, 0, 0, 0);   //sets time to midnight, otherwise the answer will be different each time, as the current time changes

// const birthday = new Date(2024, 10, 24, 0, 0);

// // const daysLeft = birthday - today;  //  this line was displaying the answer as "14864400000 days"         displaying in milliseconds?
// const millisToDays = birthday - today;
// const daysLeft = Math.ceil(millisToDays / (1000 * 60 * 60 * 24));   //math.ceil rounds up the answer from the millisToDays equation.


// console.log(`There are ${daysLeft} days left until ${birthday}.`);


// ACTIVITY-4---------------------------------------------

const space1 = "x";
const space2 = "o";
const space3 = "";
const space4 = "x";
const space5 = "x";
const space6 = "";
const space7 = "o";
const space8 = "";
const space9 = "";

const gridArr = [
  `    |   |   `,
  ` ${space1}  | ${space2} |${space3}`,
  `    |   |   `,
  ` -----------`,
  `    |   |   `,
  ` ${space4}  | ${space5} |${space6}`,
  `    |   |   `,
  ` -----------`,
  `    |   |   `,
  ` ${space7}  | ${space8}  |${space9}`,
  `    |   |   `,
];

for(let i=0; i < gridArr.length; i++) {
    console.log(gridArr[i]);
}