const slides = document.querySelectorAll('.slide')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')

slides.forEach( (slide, index) => {
    slide.style.left = `${index * 100}%`
})

let counter = 0
nextBtn.addEventListener('click', () => {
    counter++
})
prevBtn.addEventListener('click', () => {
    counter--
})

function carousel() {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}