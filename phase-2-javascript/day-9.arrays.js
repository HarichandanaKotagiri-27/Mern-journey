const users = [
  { id: 1, name: "Harichandana", age: 22, role: "admin", active: true, score: 95 },
  { id: 2, name: "Priya", age: 25, role: "member", active: false, score: 72 },
  { id: 3, name: "Ravi", age: 28, role: "member", active: true, score: 88 },
  { id: 4, name: "Sneha", age: 21, role: "moderator", active: true, score: 61 },
  { id: 5, name: "Kiran", age: 30, role: "member", active: false, score: 45 },
  { id: 6, name: "Arjun", age: 26, role: "admin", active: true, score: 79 }
]

// Task 1 — get array of just names
// Expected: ["Harichandana", "Priya", "Ravi", "Sneha", "Kiran", "Arjun"]

let names=users.map(user=>user.name)
console.log(names)

// Task 2 — get only active users
// Expected: users where active === true

let activeUsers=users.filter(user=>user.active===true)
console.log(activeUsers)

// Task 3 — get only members (role === "member")
// Expected: [Priya, Ravi, Kiran]

let roles=users.filter(user=>user.role==="member")
let members=roles.map(user=>user.name)
console.log(members)


// Task 4 — get average score of all users
// Hint: use reduce to get total, then divide by length

let total=users.reduce((sum,total)=>sum + total.score,0)
console.log(total)

let avg=users.length
console.log(avg)

let totalAvg=total/avg;
console.log(totalAvg)

// Task 5 — get names of active admins only
// Expected: ["Harichandana", "Arjun"]

let admins=users
.filter(user=>user.role==="admin")
.filter(user=>user.active===true)
.map(user=>user.name)

console.log(admins)

// Task 6 — add a "senior" field to each user
// senior = true if age >= 25, false otherwise
// Hint: use map with spread operator

const NewField=users.map(user=>({
  ...user,
  senior:user.age>=25
}))

console.log(NewField)

// Task 7 — get users sorted by score (highest first)
// Hint: use sort with (a, b) => b.score - a.score

const sorted=users.sort((a,b)=>b.score - a.score)
console.log(sorted)


// Task 8 — check if ANY user has score below 50
// Expected: true (Kiran has 45)

let scores=users

.some(user=>user.score<50)


console.log(scores)

// Task 9 — check if ALL users are active
// Expected: false

const allActive = users.every(user => user.active === true)
console.log(allActive)

// Task 10 — search users by name
// Write a function searchUsers(users, searchTerm)
// searchUsers(users, "a") → users whose name includes "a" (case insensitive)
// Expected: Harichandana, Priya, Sneha, Arjun


function searchUsers(users, searchTerm) {
  return users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
}
console.log(searchUsers(users,"a"))


