// Define calculator functions
const add = (input1, input2) => {
  return input1 + input2;
};

const subtract = (input1, input2) => {
  return input1 - input2;
};

const divide = (input1, input2) => {
  return input1 / input2;
};

const multiply = (input1, input2) => {
  return input1 * input2;
};

// make them available for export
module.exports = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide
};