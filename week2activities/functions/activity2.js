

// let orderCount = 0;

// const takeOrder = (toppingOne, toppingTwo) => {
//   console.log(`Pizza with ${toppingOne} and ${toppingTwo}`);
//   orderCount++;
//   console.log(orderCount);
// };

// takeOrder("pineapple", "Pepperoni");

// -----------------------------------------------------------------------------------  LOCAL STORAGE AMMENDMENT

// // Retrieve the orderCount from localStorage or default to 0
// let orderCount = parseInt(localStorage.getItem('orderCount')) || 0;

// const takeOrder = (toppingOne, toppingTwo) => {
//   console.log(`Pizza with ${toppingOne} and ${toppingTwo}`);
//   orderCount++;
//   console.log(orderCount);
  
//   // Store the updated orderCount in localStorage
//   localStorage.setItem('orderCount', orderCount);
// };

// takeOrder("pineapple", "Pepperoni");

//------------------------------------------------------------------------------------------- STOPPED DECLARING "TAKEORDER" VALUE BEFORE FUNCTION

// let orderCount = 0;

// const takeOrder = (toppingOne, toppingTwo) => {
//   console.log(`Pizza with ${toppingOne} and ${toppingTwo}`);
//   orderCount++;
//   console.log(`Order count: ${orderCount}`);
// };

// takeOrder("pineapple"); // Output: Pizza with pineapple and undefined, Order count: 1

// takeOrder("pineapple", "Pepperoni"); // Output: Pizza with pineapple and Pepperoni, Order count: 2

//------------------------------------------------------------------------------------------------------------- ASKED HOW TO REMOVED "UNDEFINED" ADDED CHEESE STRING VALUE TO TOPPINGTWO AS A DEFAULT

// let orderCount = 0;

// const takeOrder = (toppingOne, toppingTwo = "Cheese") => {
//   console.log(`Pizza with ${toppingOne} and ${toppingTwo}`);
//   orderCount++;
//   console.log(`Order count: ${orderCount}`);
// };

// takeOrder("pineapple"); // Output: Pizza with pineapple and Cheese, Order count: 1

// takeOrder("pineapple", "Pepperoni"); // Output: Pizza with pineapple and Pepperoni, Order count: 2

//----------------------------------------------------------------------------------------------------------------- ASKED HOW TO HAVE THE OUTPUT SIMPLY DISPLAY THE ONE TOPPING, WAS PROVIDED WITH AN IF STATEMENT. 

// let orderCount = 0;

// const takeOrder = (toppingOne, toppingTwo) => {
//   if (toppingTwo) {
//     console.log(`Pizza with ${toppingOne} and ${toppingTwo}`);
//   } else {
//     console.log(`Pizza with ${toppingOne}`);
//   }
//   orderCount++;
//   console.log(`Order count: ${orderCount}`);
// };

// takeOrder("pineapple"); // Output: Pizza with pineapple, Order count: 1

// takeOrder("pineapple", "Pepperoni"); // Output: Pizza with pineapple and Pepperoni, Order count: 2

//--------------------------------------------------------------------------------------------------------------------- ASKED TO REFACTOR WHILST ALLOWING CUSTOMER A TOTAL OF 6 TOPPINGS, ADDED A "REST PARAMETER" BUT I THINK CHATGPT MISUNDERSTOOD.

// let orderCount = 0;

// const takeOrder = (...toppings) => {
//   if (toppings.length > 6) {
//     console.log("You can choose up to 6 toppings.");
//     return;
//   }

//   const pizza = `Pizza with ${toppings.join(" and ")}`;
  
//   console.log(pizza);
//   orderCount++;
//   console.log(`Order count: ${orderCount}`);
// };

// takeOrder("pineapple"); // Output: Pizza with pineapple, Order count: 1

// takeOrder("pineapple", "Pepperoni"); // Output: Pizza with pineapple and Pepperoni, Order count: 2

// takeOrder("pineapple", "Pepperoni", "Mushrooms", "Onions", "Bell peppers", "Olives", "Extra cheese"); // Output: You can choose up to 6 toppings.

//---------------------------------------------------------------------------------------------------------------------------------------------------------- MY MISTAKE, ASKED CHATGPT FOR A REFACTOR ALLOWING A MAXIMUM OF 6, NOT TOTAL

let orderCount = 0;

const takeOrder = (...toppings) => {
  if (toppings.length > 6) {
    toppings = toppings.slice(0, 6); // Limit toppings to the first 6 if more than 6 are provided
    console.log("You can choose up to 6 toppings. Only the first 6 will be used.");
  }

  const pizza = `Pizza with ${toppings.join(" and ")}`;
  
  console.log(pizza);
  orderCount++;
  console.log(`Order count: ${orderCount}`);
};

takeOrder("pineapple"); // Output: Pizza with pineapple, Order count: 1

takeOrder("pineapple", "Pepperoni"); // Output: Pizza with pineapple and Pepperoni, Order count: 2

takeOrder("pineapple", "Pepperoni", "Mushrooms", "Onions", "Bell peppers", "Olives", "Extra cheese"); // Output: Pizza with pineapple and Pepperoni and Mushrooms and Onions and Bell peppers and Olives, Order count: 3



