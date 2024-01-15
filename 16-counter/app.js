let count;

let value = document.querySelector('.value')
const btns = document.querySelectorAll('.btn')
const containers = document.querySelectorAll('.container')

count = value.textContent

containers.forEach(() => {
    buttons();
})


function buttons() {
    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const current = e.currentTarget.classList
            console.log(current)
            if (current.contains('decrease')) {
                count--
            } else if (current.contains('reset')) {
                count = 0
            } else if (current.contains('increase')) {
                count++
            }

            if (count < 0) {
                count = 0
            }

            value.textContent = count
        })
    })
}
