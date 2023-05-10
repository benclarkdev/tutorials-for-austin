/* 
  let's say we wanted to write a payroll application.
  it is easy to understand we'll need a calculator for some part of that. 

  so, if this payroll.js file was doing something more complex, like calculating
  the payroll for a whole team.

  calculatePay isn't implemented anywhere because that is beyond the scope 
  of this lesson.
*/

// so here, we could import the calculator functions.
const calculator = require('./calculator.js');

// and when we define the calculatePaySum function, which is specifically
// calculating payroll, we can use the calculator.
const calculatePay = (wage, numberOfHours) => {
  return calculator.multiply(wage, numberOfHours);
}