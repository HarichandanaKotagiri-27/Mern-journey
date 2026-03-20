function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  if (b === 0) {
    return "Error: cannot divide by zero"
  }
  return a / b
}

function percentage(a, b) {
  return (b / 100) * a
}

function isEven(num) {
  return num % 2 === 0
}

// Test all functions
console.log("add(5,3):", add(5, 3))
console.log("subtract(10,4):", subtract(10, 4))
console.log("multiply(6,7):", multiply(6, 7))
console.log("divide(15,3):", divide(15, 3))
console.log("divide(10,0):", divide(10, 0))
console.log("percentage(200,15):", percentage(200, 15))
console.log("isEven(4):", isEven(4))
console.log("isEven(7):", isEven(7))

console.log(typeof(null))