var heroText = document.querySelector('.hero-big-text')
var heroTextHeight = heroText.offsetHeight
let nav = document.querySelector('.visible-body')

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop >= heroTextHeight) {
        nav.classList.add('nav-below')
    }
    else nav.classList.remove('nav-below')
})

const typeLinks = document.querySelectorAll('.type-link');
const activeIndicator = document.querySelector('.active-indicator');

const findUsCards = document.querySelectorAll('.findus-card')

findUsCards.forEach(findUsCard => {
    
    findUsCard.addEventListener('mouseenter', (event) => {
        const card = event.target
        const cardImg = card.querySelector('.findus-image')
        const cardDetails = card.querySelectorAll('.store-address')
        cardImg.classList.add('image-selected')
        cardDetails.forEach(cardDetail => {
            cardDetail.classList.remove('hidden')
        })
    })

    findUsCard.addEventListener('mouseleave', (event) => {
        const card = event.target
        const cardImg = card.querySelector('.findus-image')
        const cardDetails = card.querySelectorAll('.store-address')
        cardImg.classList.remove('image-selected')
        cardDetails.forEach(cardDetail => {
            cardDetail.classList.add('hidden')
        })
    })
})
