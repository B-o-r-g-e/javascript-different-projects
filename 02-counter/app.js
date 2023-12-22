//set initial count
let count = 0;

//select values and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const style = e.currentTarget.classList
        if (style.contains('decrease')) {
            count--
        } else if (style.contains('reset')) {
            count = 0
        } else if (style.contains('increase')) {
            count++
        }

        if (count > 0) {
            value.style.color = 'green'
        } else if (count < 0) {
            value.style.color = 'red'
        } else if (count === 0 ) {
            value.style.color = '#222'
        }

        value.textContent = count
    })
})