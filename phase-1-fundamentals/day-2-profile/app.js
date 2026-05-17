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
  input.style.borderColor = "red"
  
  const errorMsg = document.createElement("p")
  errorMsg.textContent = message
  errorMsg.style.color = "red"
  errorMsg.style.fontSize = "12px"
  input.insertAdjacentElement("afterend", errorMsg)
}

function showSuccess() {
  form.innerHTML = "<h3>Thank you! Message sent successfully ✅</h3>"
}
