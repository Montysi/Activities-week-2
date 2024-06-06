// let pinNum = 1234;
// let balance = 1000;

// const cashMachine = (withdrawAmount, pinNum) => {
//   if (((pinNum = 1234), balance >= withdrawAmount)) {
//     console.log(`${withdrawAmount} has been withdrawn.`);
//   } else {
//     console.log(`${withdrawAmount} could not be withdrawn.`);
//   }
// };

// cashMachine(500, 1234);

// -----------------------------------------------------------------------------------------

let balance = 1000;

const cashMachine = (withdrawAmount, enteredPin) => {
  const correctPin = 1234; // Define the correct PIN inside the function
  
  if (enteredPin === correctPin && balance >= withdrawAmount) {
    balance -= withdrawAmount; // Deduct the withdrawn amount from the balance
    console.log(`${withdrawAmount} has been withdrawn. Remaining balance: ${balance}`);
  } else {
    console.log(`${withdrawAmount} could not be withdrawn.`);
  }
};

cashMachine(500, 1234); // Output: 500 has been withdrawn. Remaining balance: 500

//----------------------------------------------------------------------------------------------------

// let balance = 1000;

// const cashMachine = (withdrawAmount, enteredPin) => {
//   if (enteredPin === 1234 && balance >= withdrawAmount) {
//     balance -= withdrawAmount; // Deduct the withdrawn amount from the balance
//     console.log(`${withdrawAmount} has been withdrawn. Remaining balance: ${balance}`);
//   } else {
//     console.log(`${withdrawAmount} could not be withdrawn.`);
//   }
// };

// cashMachine(500, 1234); // Output: 500 has been withdrawn. Remaining balance: 500
