// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// edit option
let editElement;
let editFlag = false
let editID = '';

// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem)

// ****** FUNCTIONS **********
function addItem(e) {
 e.preventDefault();
 const value = grocery.value
 const id = new Date().getTime().toString()

 /*
 * The if statement check for when value is not empty and editFlag is true
 * The else if is when value is not empty (true) & editFlag is false (ln12)
 * */
 if (value && !editFlag){
  const element = document.createElement('article')
  /* Add class*/
  element.classList.add('grocery-item')
  /* Add id*/
  const attr = document.createAttribute('data-id')
  attr.value = id
 }
 else if (value && editFlag){
  console.log('edit')
  console.log(value)
 }
 else {
  displayAlert('Please enter value', 'danger')
 }
}

/* Display Alert*/
function displayAlert(text, action) {
 alert.textContent = text
 alert.classList.add(`alert-${action}`)

 /* remove alert */
 setTimeout(() => {
  alert.textContent = ''
  alert.classList.remove(`alert-${action}`)
 }, 1000)
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
