// Challenge 1 — rewrite with arrow function shorthand
function square(n) {
  return n * n
}
console.log(square(5))
// Your arrow version here

const sqr= n => n*n
console.log(sqr(5))

// Challenge 2 — default parameter
// Write a function createGreeting(name, greeting)
// If no greeting provided, default to "Hello"
// createGreeting("Hari") → "Hello, Hari!"
// createGreeting("Hari", "Good morning") → "Good morning, Hari!"

function createGreeting(name,greeting="Hello"){
    if (!name){
        return "Please provide name"
    }
    return `${greeting}, ${name} !`

}
console.log(createGreeting())
console.log(createGreeting('Hari'))
console.log(createGreeting('Hari','Goodmorning'))

// Challenge 3 — scope question, what logs?
const x = 10
function test() {
  const x = 20
  console.log(x)
}
test()
console.log(x)

//20 logs first and 10 logs next because javascript first execute inner scope
// Write your answer as a comment before running it

const makeCounter = () => {
  let count = 0
  return () => {
    count++
    return count
  }
}

const counter = makeCounter()
console.log(counter())  // prediction: ?
console.log(counter())  // prediction: ?
console.log(counter())  // prediction: ?

// Let me show you what's actually happening:
// javascriptconst makeCounter = () => {
//   let count = 0        // this variable should "die" when function ends
//                        // but it DOESN'T — the inner function keeps it alive
//   return () => {
//     count++            // inner function remembers count from outer function
//     return count
//   }
// }
// Normally when a function finishes, its variables disappear. But here the inner function closes over the count variable and keeps it alive in memory.
// That's why it's called a closure — the inner function closes over the outer function's variables.

// Challenge 4 — rest parameters
// Write a function multiply(multiplier, ...numbers)
// that multiplies every number by the multiplier
// multiply(2, 1, 2, 3) → [2, 4, 6]

function multiply(multiplier, ...numbers){
    return numbers.map(n=>n*multiplier)
}
console.log(multiply(2,1,2,3))


// Challenge 6 — write a function isValidEmail(email)
// Returns true if email contains @ and a dot after @
// isValidEmail("hari@gmail.com") → true
// isValidEmail("harigmail.com") → false
// isValidEmail("hari@gmailcom") → false


function isValidEmail(email){
    let regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(regex.test(email)){
        return true
    }
    else{
        return false
    }
}
console.log(isValidEmail("hari@gmail.com"))
console.log(isValidEmail("hari@gmail.com"))   // true
console.log(isValidEmail("harigmail.com"))    // false
console.log(isValidEmail("hari@gmailcom"))    // false


// Challenge 7 — write a function clamp(number, min, max)
// Returns the number if between min and max
// Returns min if below min, max if above max
// clamp(5, 1, 10) → 5
// clamp(-5, 1, 10) → 1
// clamp(15, 1, 10) → 10
function clamp (number,min,max){
    if(number>=min && number<=max){
        return number
    }
    else if(number<=min){
        return min
    }
    else{
        return max
    }

}
console.log(clamp(5,1,10))
console.log(clamp(-5,1,10))
console.log(clamp(15,1,10))



// Challenge 8 — what is the output? Write answer before running
function outer() {
  let x = 10
  function inner() {
    let y = 20
    console.log(x + y)
  }
  inner()
  console.log(typeof y)
}
outer()

// 30 and undefined because it is innerscope

// Challenge 9 — rewrite using arrow function shorthand
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32
}
console.log(celsiusToFahrenheit(50))

const celToFah=n=>(n*9/5)+32

console.log(celToFah(50))


// Challenge 10 — write a function formatCurrency(amount, currency)
// Default currency = "INR"
// formatCurrency(1000) → "₹1,000"
// formatCurrency(1000, "USD") → "$1,000"
// Hint: use toLocaleString()
function formatCurrency(amount, currency = "INR") {
  return amount.toLocaleString("en-IN", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0
  });
}

// Examples
console.log(formatCurrency(1000));        // ₹1,000
console.log(formatCurrency(1000, "USD")); // $1,000

