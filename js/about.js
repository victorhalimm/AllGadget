var heroText = document.querySelector('.hero-big-text')
var heroTextHeight = heroText.offsetHeight
let nav = document.querySelector('.visible-body')
const parallax = document.querySelector('.parallax')

console.log('fuck')

parallax.addEventListener("scroll", () => {
    
    if (parallax.scrollTop >= heroTextHeight) {
        nav.classList.add('nav-below')
    }
    else nav.classList.remove('nav-below')
})
