// Step 1 — define BASE_URL
const BASE_URL = "https://jsonplaceholder.typicode.com"

// Step 2 — define apiRequest function
async function apiRequest(endpoint, options = {}) {
  try {
    const url = `${BASE_URL}${endpoint}`
    
    const config = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers
      },
      ...options
    }

    const response = await fetch(url, config)

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return await response.json()

  } catch (error) {
    console.error("API Request failed:", error.message)
    throw error
  }
}

// Step 3 — define api object
const api = {
  get: (endpoint) => apiRequest(endpoint),
  post: (endpoint, data) => apiRequest(endpoint, {
    method: "POST",
    body: JSON.stringify(data)
  }),
  put: (endpoint, data) => apiRequest(endpoint, {
    method: "PUT",
    body: JSON.stringify(data)
  }),
  delete: (endpoint) => apiRequest(endpoint, {
    method: "DELETE"
  })
}

// Step 4 — NOW write your tasks below
async function getAllPosts() {
  // your code
}


async function getAllPosts() {

  const posts = await api.get("/posts")
  posts.slice(0, 5).forEach(post => {
    console.log(`${post.id}. ${post.title}`)
  })
}

getAllPosts()

async function createPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "My MERN Journey",
      body: "Learning MERN in 90 days",
      userId: 1
    })
  })
  const newPost = await response.json()
  console.log("Created post with id:", newPost.id)
}
createPost()

async function deletePost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
  })
  console.log("Delete status:", response.status)
}
deletePost()