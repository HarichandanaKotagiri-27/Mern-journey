//Challenge 1 — Classic FizzBuzz


// Print numbers 1-100
// If divisible by 3 → print "Fizz"
// If divisible by 5 → print "Buzz"
// If divisible by both → print "FizzBuzz"
// Otherwise → print the number

for(let i=1;i<=100;i++){
    
   
    if (i%3===0 && i%5===0){
        console.log("FizzBuzz")
    }
    else if(i%3===0){
        console.log("Fizz")}
    else if(i%5===0){
        console.log("Buzz");
    }
    else{
        console.log(i)
    }
 
    }
//Challenge 2 — Sum of digits

// Write a function sumDigits(n)
// sumDigits(123) → 6 (1+2+3)
// sumDigits(9999) → 36 (9+9+9+9)
// Hint: convert number to string, split into array, convert back to numbers

function sumDigits(n){
    let num=String(n)
    let arr=[];
    let sum=0;
    for(i=0;i<num.length;i++)
    {
    arr.push(parseInt(num[i]))

    }
    console.log(arr) 
    
    for(j=0;j<arr.length;j++){
        sum=sum+arr[j];
    }
    console.log(sum)
}
sumDigits(123)


// Write a function reverseString(str)
// reverseString("hello") → "olleh"
// reverseString("Harichandana") → "anadnahciraH"
// No built-in reverse() on strings — use a loop or array methods

function reverseString(str){
    console.log(str)
    let arr=[];
    for(j=str.length-1;j>=0;j--){
         arr.push(str[j])
    }
  

    let reversed = arr.join("");

    console.log(reversed);
}
reverseString("Harichandana")

// Write a function countOccurrences(arr, value)
// countOccurrences([1,2,3,2,2,4], 2) → 3
// countOccurrences(["a","b","a","c","a"], "a") → 3

function countOccurrences(arr,value){
    
let count=0;
    for(i=0;i<=arr.length;i++){
        if(arr[i]===value){
            count=count+1;
        }

    }
    console.log(count)
}
countOccurrences([1,2,3,2,2,4,2],2)


// Write a function flatten(arr) WITHOUT using .flat()
// flatten([[1,2], [3,4], [5,6]]) → [1,2,3,4,5,6]
// Hint: loop through outer array, loop through inner array

function flatten(arr){
    let flatArray=[];
    for(i=0;i<arr.length;i++){
        let newArr=arr[i];
        for(j=0;j<newArr.length;j++){
            flatArray.push(newArr[j])
        }
     
    }
     console.log(flatArray)
   
}
flatten([[1,2],[3,4],[5,6]])


// Write a function findDuplicates(arr)
// findDuplicates([1,2,3,2,4,3,5]) → [2,3]
// Returns array of values that appear more than once
function findDuplicates(arr){
    const seen=[]
    const dup=[]
    for(const item of arr){
        if(seen.includes(item)&&!dup.includes(item)){
            dup.push(item)
        } else {
            seen.push(item)
        }
    }
    console.log(dup)
}
findDuplicates([1,2,3,2,4,3,5])

// Write a function multiplicationTable(n)
// multiplicationTable(3) prints:
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// ... up to 3 x 10 = 30

function multiplicationTable(n){
    for(i=1;i<=10;i++){
        let mul=n*i
        console.log(n ,"x", i,"=" ,mul)
    }
}
multiplicationTable(3)

// Write a function fibonacci(n)
// Returns array of first n fibonacci numbers
// fibonacci(8) → [0, 1, 1, 2, 3, 5, 8, 13]
// Each number = sum of previous two

function fibonacci(n) {
  const sequence = [0, 1]  // start with first two

  for (let i = 2; i < n; i++) {
    // next number = last number + second to last number
    const next = sequence[i-1] + sequence[i-2]
    sequence.push(next)
  }

  return sequence
}

console.log(fibonacci(8))  // [0, 1, 1, 2, 3, 5, 8, 13]