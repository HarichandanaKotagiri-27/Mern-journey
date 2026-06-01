

const billAmount = document.querySelector("#bill-amount");

const tipButtons = document.querySelectorAll(".tip-button");

const customTip = document.querySelector("#custom-tip");

const numberOfPeople = document.querySelector("#people-number");

const form = document.querySelector("#bill-form");

form.addEventListener("submit", validateInputs);

let selectedTipPercent = 0;

tipButtons.forEach((button) => {
    button.addEventListener("click", calculateTip);
});

customTip.addEventListener("input", handleCustomTip);

function calculateTip(e) {
  customTip.value = ""
  selectedTipPercent = parseInt(e.target.textContent)

  // Remove active from all buttons
  tipButtons.forEach(btn => btn.classList.remove("active"))
  // Add active to clicked button
  e.target.classList.add("active")
}

function handleCustomTip() {

    // remove active state from buttons if needed
    tipButtons.forEach((button) => {
        button.classList.remove("active");
    });

    // use custom tip as selected tip
    selectedTipPercent = Number(customTip.value);
}

function validateInputs(e) {

    e.preventDefault();

    let tipAmount=parseFloat(billAmount.value);
    let persons=parseInt(numberOfPeople.value);
    let tipPercent=selectedTipPercent;
    
    if(!tipAmount || tipAmount<=0){
       showError(billAmount, "Please enter a valid bill amount")
    return
    }

    if (!persons || persons <= 0) {
    showError(numberOfPeople, "Please enter at least 1 person")
    return
  }
  if (tipPercent === 0) {
    showError(customTip, "Please select a tip percentage")
    return
  }


    let finalTip=(tipAmount*tipPercent)/100
    console.log(finalTip)//--3rd p tag
    document.getElementById("totalTip").textContent=`Total tip : ${finalTip.toFixed(2)}`;

    let tipPerPerson=finalTip/persons;
    console.log(tipPerPerson);//---1st p tag
    document.getElementById("totalAmount").textContent=`Tip amount per person : ${tipPerPerson.toFixed(2)}`;

    let totalPerPerson=(tipAmount+finalTip)/persons;
    console.log(totalPerPerson); //-- second p tag
    document.getElementById("totalPerPerson").textContent=`Total per person : ${totalPerPerson.toFixed(2)}`;

    let totalBill=tipAmount+finalTip;
    console.log(totalBill) //-- last p tag
    document. getElementById("totalBill").textContent=`Total bill : ${totalBill.toFixed(2)}`;
}


 function showError(input, message) {
  // Remove existing error first
  const existing = input.nextElementSibling
  if (existing && existing.classList.contains("error-msg")) {
    existing.remove()
  }

  input.style.borderColor = "red"
  
  const errorMsg = document.createElement("p")
  errorMsg.classList.add("error-msg")
  errorMsg.textContent = message
  errorMsg.style.color = "red"
  errorMsg.style.fontSize = "12px"
  input.insertAdjacentElement("afterend", errorMsg)
}

document.querySelector("#reset").addEventListener("click", () => {
  billAmount.value = ""
  numberOfPeople.value = ""
  customTip.value = ""
  selectedTipPercent = 0
  tipButtons.forEach(btn => btn.classList.remove("active"))
  document.getElementById("totalAmount").textContent = ""
  document.getElementById("totalPerPerson").textContent = ""
  document.getElementById("totalTip").textContent = ""
  document.getElementById("totalBill").textContent = ""
})

