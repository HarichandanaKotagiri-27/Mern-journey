async function getUser(id) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const user = await response.json()
    console.log(user.name)
  } catch (error) {
    console.error("Something went wrong:", error.message)
  }
}

getUser(1)


async function getUserWithPosts(userId) {
  try {
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user = await userResponse.json()

    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    const posts = await postsResponse.json()

    console.log(`${user.name} has ${posts.length} posts`)
  } catch (error) {
    console.error("Error:", error.message)
  }
}

getUserWithPosts(1)


// Instead of waiting one by one:
// user1 → wait → user2 → wait → user3 → wait (3 seconds)

// Fetch all at the same time:
// user1, user2, user3 all start together (1 second)

async function fetchMultipleUsers(ids) {
  try {
    const promises = ids.map(id => 
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(r => r.json())
    )
    
    const users = await Promise.all(promises)
    users.forEach(user => console.log(user.name))
  } catch (error) {
    console.error("Error:", error.message)
  }
}

fetchMultipleUsers([1, 2, 3, 4, 5])