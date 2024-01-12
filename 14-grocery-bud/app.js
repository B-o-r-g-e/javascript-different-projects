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
  console.log(value)
  console.log('add something')
 }
 else if (value && editFlag){
  console.log('edit')
  console.log(value)
 }
 else {
  alert.textContent = 'empty value'
  alert.classList.add('alert-danger')
 }
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********

