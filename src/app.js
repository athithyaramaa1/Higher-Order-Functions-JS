const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
function slice() {
  let modifiedFood = foods.slice(1, 4);
  return modifiedFood;
}

// Progression 2:
function spliced() {
  foods.splice(2, 0, "noodles", "icecream");
  return foods;
}

// Progression 3:
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isPrime(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}

function checkNumber(numberArray, operation) {
  let modifiedNumberArray = numberArray.filter(operation);
  return modifiedNumberArray;
}

// Progression 4:
function reject(numberArray) {
  let nonPrimeNumberArray = [];
  numberArray.forEach((number) => {
    if (isPrime(number)) {
    } else {
      nonPrimeNumberArray.push(number);
    }
  });
  return nonPrimeNumberArray;
}

function nonPrime(numberArray) {
  let ans = reject(numberArray);
  return ans;
}

// Progression 5:
const isEvenUsingLambda = (number) => {
  return number % 2 === 0;
};

// Progression 6:
function square(number) {
  return number * number;
}

function findSquareOfNumbers(myArray) {
  let squaredArray = myArray.map(square);
  return squaredArray;
}

// Progression 7:
function multiply(myArray) {
  return myArray.reduce((mul, number) => {
    return mul * number;
  }, 1);
}

function sumOfSquares(myArray) {
  return myArray.map(square).reduce((sum, number) => {
    return sum + number;
  }, 0);
}
