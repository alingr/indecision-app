function square(x) {
  return x * x;
}

console.log(square(3));

// const squareArrow = (x) => {
//   return x * x;
// };

const squareArrow = x => x * x;

console.log(squareArrow(4));

//challenge function for get first name

function getFirstName1(fullName) {
  return fullName.split(" ")[0];
}
console.log(getFirstName1("Alin Groza"));

const getFirstName2 = fullName => fullName.split(" ")[0];
console.log(getFirstName2("Mike Smith"));
