// Get current hour and change header greeting
const hour = new Date().getHours()
console.log(hour)
const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening"

const header = document.querySelector("header h1")
header.textContent = `${greeting}, I'm Harichandana 👋`


//Task 2 — Add a new project card dynamically (15 min)

function addProject(title,description){
    const card = document.createElement("div")
    card.classList.add("project-card")
    card.innerHTML=
       `<h4>${title}</h4>
       <p>${description}</p>`

       document.querySelector("#Projects").appendChild(card)
}

addProject("MERN Dashboard","A full-stack dashboard built with MongoDB , Express, React and Node.js")

//Task 3 — Skills highlighter (15 min)

const skills = document.querySelectorAll("#Skills li")

skills.forEach(skill=>{
    skill.style.cursor = "pointer"
    skill.addEventListener("click",function(){
        this.classList.toggle("highlighted")
    })
})

//Task 4 — Form validation without submission (20 min)

const form=document.querySelector("form")
const nameInput=document.querySelector("#Name")
const emailInput=document.querySelector("#Email")

form.addEventListener("submit",function(e){
    e.preventDefault()

    if(nameInput.value.trim()===""){
        showError(nameInput,"Name is required")
        return
    }
    if (!emailInput.value.includes("@")) {
        showError(emailInput, "Please enter a valid email")
       return
    }

  
  showSuccess()
})

function showError(input, message) {
  // Remove existing error first:
  const existing = input.nextElementSibling
  if (existing && existing.classList.contains("error-msg")) {
    existing.remove()
  }
  
  input.style.borderColor = "red"
  const errorMsg = document.createElement("p")
  errorMsg.classList.add("error-msg")  // add class so we can find it
  errorMsg.textContent = message
  errorMsg.style.color = "red"
  errorMsg.style.fontSize = "12px"
  input.insertAdjacentElement("afterend", errorMsg)
}
function showSuccess() {
  form.innerHTML = "<h3>Thank you! Message sent successfully ✅</h3>"
}
// Add this to your contact form textarea
const textarea = document.querySelector("#message")
const maxLength = 200

// Create counter element
const counter = document.createElement("p")
counter.style.fontSize = "12px"
counter.style.color = "var(--color-text-secondary)"
counter.textContent = `0 / ${maxLength} characters`
textarea.insertAdjacentElement("afterend", counter)

// Update on every keystroke
textarea.addEventListener("input", (e) => {
  const length = e.target.value.length
  counter.textContent = `${length} / ${maxLength} characters`

  // Change color when getting close to limit
  if (length > maxLength * 0.8) {
    counter.style.color = "orange"
  }
  if (length >= maxLength) {
    counter.style.color = "red"
  }
})

const skillSearch = document.querySelector("#skill-search")
const skillItems = document.querySelectorAll("#Skills li")

skillSearch.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase()

  skillItems.forEach(skill => {
    const skillName = skill.textContent.toLowerCase()
    if (skillName.includes(searchTerm)) {
      skill.style.display = "block"
    } else {
      skill.style.display = "none"
    }
  })
})

// Press '/' to focus search
// Press 'Escape' to clear search
// Press 'Ctrl + Enter' to submit form

document.addEventListener("keydown", (e) => {
  // '/' focuses the skill search
  if (e.key === "/" && document.activeElement !== skillSearch) {
    e.preventDefault()
    skillSearch.focus()
  }

  // 'Escape' clears search and shows all skills
  if (e.key === "Escape") {
    skillSearch.value = ""
    skillItems.forEach(skill => skill.style.display = "block")
    skillSearch.blur()
  }
})

document.querySelector("header").addEventListener("click", () => {
  console.log("header clicked")
})

document.querySelector("header h1").addEventListener("click", (e) => {
  e.stopPropagation()
  console.log("h1 clicked")
})