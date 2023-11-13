// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(`The four numbers add up to 50: ${isSum50}.`);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(`At least two of the four numbers are odd: ${isTwoOdd}.`);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(`None of the four numbers are larger than 25: ${isUnder25}.`);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(`All four numbers are unique numbers: ${isUnique}.`);

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;


// Finally, log the results.
console.log(`All four numbers add up to 50 and\
 at least two are odds and all are under 25 and\
 all are unique numbers: ${isValid}.`);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// Check if all numbers are divisible by 5
// if the sum of the reminders when all the numbers are
// divided by 5 is zero, all numbers are divisible by 5

const divisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
console.log(`All four numbers are divisible by 5: ${divisibleBy5}.`);

// Check if the first number is larger than the last
// if n1 > n4, then n1-n4 should be larger than zero
const n1greaterthann4 = (n1 - n4) > 0  
console.log(`The first number is larger than the last: ${n1greaterthann4}.`);

// Subtract the first number from the second number, Multiply the result by the third number, 
// Find the remainder of dividing the result by the fourth number.

const arithmeticChain = ((n2-n1)*n3) % n4;
console.log(`The difference between the first and second number\
 multiplied by the third number\
 and then divided by the fourth number yields: ${arithmeticChain}.`);