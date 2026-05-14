const blogPost=
{
    id:"1",
    title:"New World",
    content:"AI Technology",
    author:{
        name:"Harichandana",
        email:"Harikotagiri@gmail.com"
    },
    tags:["AI","DataEngineering","MachineLearning"],
    published:true,
    CreatedAt: "2025-08-27",
    likes:15000
}

console.log(blogPost)

// Extract title, content, and author using destructuring
// Extract just the author's name using nested destructuring
// Extract the first two tags using array destructuring

const {title,content,author}=blogPost
console.log(title)
console.log(content)
console.log(author)

const {author : {name,email}}=blogPost;
console.log(name)
console.log(email)

const [first,second]=blogPost.tags
console.log(first)
console.log(second)

// Function 1 — getPostSummary(post)
// Returns object with just: title, authorName, tagCount, likes
// Use destructuring in the function parameters

function getPostSummary(post){
   const {title, author:{name},tags,likes}=post 
   return{
    title,
    authorName: name,
    tagCount:tags.length,
    likes
   }
}
console.log(getPostSummary(blogPost))





// Function 2 — publishPost(post)
// Returns new post object with published: true
// Don't modify original — use spread operator

function publishPost(post){
    return {...post,published : true}
}
console.log(publishPost(blogPost))

// Function 3 — addTag(post, newTag)
// Returns new post with tag added to tags array
// Don't modify original

function addTag(post,newTag){
   return {...post,tags:[...post.tags,newTag]
   }
}
console.log(addTag(blogPost,"DataScience"))
// Function 4 — updatePost(post, updates)
// Takes a post and an updates object
// Returns new post with updates applied
// updatePost(post, { title: "New Title", likes: 10 })

function updatePost(post,updates){
    return {...post,...updates}
}
console.log(updatePost(blogPost,{title:"New Title", likes :10}))

const posts = [

    {
    id:"1",
    title:"New World",
    content:"AI Technology",
    author:{
        name:"Harichandana",
        email:"Harikotagiri@gmail.com"
    },
    tags:["AI","DataEngineering","MachineLearning"],
    published:true,
    CreatedAt: "2025-08-27",
    likes:15000
},
{
    id:"2",
    title:"Finance",
    content:"Finance Accounts",
    author:{
        name:"Hemanth",
        email:"Hemanth@gmail.com"
    },
    tags:["Reconciliation","accounts"],
    published:true,
    CreatedAt: "2025-05-27",
    likes:12000
},
{
    id:"3",
    title:"IOT",
    content:"Internet of Things",
    author:{
        name:"Pooja",
        email:"Pooja@gmail.com"
    },
    tags:["Smart watch","accounts"],
    published:false,
    CreatedAt: "2025-04-27",
    likes:10000
}
]



// Using what you learned on Day 9:
// - Get titles of all published posts

const titles=posts
.filter(publish=>publish.published===true)
.map(publish=>publish.title)
console.log(titles)
// - Get posts sorted by likes

const sort =posts.sort((a,b)=>b.likes-a.likes)
console.log(sort)
// - Get total likes across all posts

const total=posts.reduce((sum,count)=>sum+count.likes,0)
console.log(total)
// - Find post by id

const foundPost = posts.find(post => post.id === "2");
console.log(foundPost);

function updatePost(post, updates) {
  return { ...post, ...updates }
  return Object.entries()
}

console.log(updatePost(blogPost, { title: "Updated Title", likes: 20000 }))