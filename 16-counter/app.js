let count;

let value = document.querySelector('.value')
const btns = document.querySelectorAll('.btn')
let firstCounter = document.querySelector('.first-counter')
let secondCounter = document.querySelector('.second-counter')

count = value.textContent

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
       const current = e.currentTarget.classList.parent
        console.log(current)
        // if (current.contains('decrease')) {
        //     count--
        // } else if (current.contains('reset')) {
        //     count = 0
        // } else if (current.contains('increase')) {
        //     count++
        // }
        //
        // if (count < 0) {
        //     count = 0
        // }
        //
        // value.textContent = count
    })
})