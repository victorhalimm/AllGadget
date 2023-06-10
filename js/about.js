var heroText = document.querySelector('.hero-big-text')
var heroTextHeight = heroText.offsetHeight
let nav = document.querySelector('.visible-body')

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop >= heroTextHeight) {
        nav.classList.add('nav-below')
    }
    else nav.classList.remove('nav-below')
})
