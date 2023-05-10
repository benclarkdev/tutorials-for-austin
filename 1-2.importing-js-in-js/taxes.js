/* 
  taxes.js is another file where we are calculating tax specific info.

  because we are doing calculation, we can leverage the functionality
  defined in calculator.js again

  calculateTax isn't implemented anywhere because that's beyond the scope
  of this exercise. we are only defining it and moving on.
*/

// so here, we could import the calculator functions.
const calculator = require('./calculator.js');

// and when we define the calculateTax function, which is specifically
// calculating tax, we can use the calculator.
const calculateTax = (wage, taxRate) => {
  return calculator.multiply(wage, taxRate);
}
