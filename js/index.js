var itemSlides = document.querySelectorAll('.item-box')
var currSlide = 0

var itemInterval = setInterval(nextSlide, 4000)

function nextSlide() {
    itemSlides[currSlide].classList.remove('active')
    currSlide = (currSlide + 1) % itemSlides.length
    itemSlides[currSlide].classList.add('active')
    event.preventDefault()
}

var heroText = document.querySelector('.hero-big-text')
var heroTextHeight = heroText.offsetHeight
let nav = document.querySelector('.visible-body')

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop >= heroTextHeight) {
        nav.classList.add('nav-below')
    }
    else nav.classList.remove('nav-below')
})

