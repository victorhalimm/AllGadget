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


function handleClick(event) {
    const selectedLink = event.target
    const linkIdx = Array.from(typeLinks).indexOf(selectedLink)
    activateLink(linkIdx)
    
}



typeLinks.forEach(typeLink => {
    typeLink.addEventListener('click', handleClick)
})

function activateLink(index) {
  const selectedItem = typeLinks[index];
  const offsetLeft = selectedItem.offsetLeft;
  const offsetWidth = selectedItem.offsetWidth;


  activeIndicator.style.transform = `translateX(${offsetLeft}px)`;
  activeIndicator.style.width = `${offsetWidth}px`;
}

// Activate the first link by default
activateLink(0);


const templateCard = document.querySelector('.product-card')
const productGallery = document.querySelector('#product-gallery')


fetch('./products.json')
    .then(response => response.json())
    .then(data => {

        data.products.forEach(product => {
            const clonedCard = templateCard.cloneNode(true)

            clonedCard.querySelector('.card-title').textContent = product.name
            clonedCard.querySelector('.card-price').textContent = '$' +  product.price
            clonedCard.querySelector('.card-desc').textContent = product.description
            if (product.hasOwnProperty('imgUrl')) {
                clonedCard.querySelector('.card-image').src = product.imgUrl
            }
            else {
                if (product.category === 'tablet') clonedCard.querySelector('.card-image').src = './assets/smartphones/tablet-empty.jpg' 
                else if (product.category === 'accessory') clonedCard.querySelector('.card-image').src = './assets/smartphones/accesory-empty.jpg'
                else clonedCard.querySelector('.card-image').src = './assets/smartphones/watches-empty.jpg'
            }
            clonedCard.classList.remove('hidden')
            clonedCard.querySelector('.card-desc').classList.add('hidden')
            clonedCard.dataset.type = product.category
            productGallery.appendChild(clonedCard)
        })
    })
    .then(() => {
        productGallery.removeChild(templateCard)
        const productCards = document.querySelectorAll('.product-card')

        productCards.forEach(productCard => {
            productCard.addEventListener('mouseenter', (event) => {
                const cardImage = event.currentTarget.querySelector('.card-image')
                const cardDesc = event.currentTarget.querySelector('.card-desc')
                cardDesc.classList.remove('hidden')
                cardImage.classList.add('card-image-hovered')
            })
            productCard.addEventListener('mouseleave', (event) => {
                const cardImage = event.currentTarget.querySelector('.card-image')
                const cardDesc = event.currentTarget.querySelector('.card-desc')
                cardDesc.classList.add('hidden')
                cardImage.classList.remove('card-image-hovered')
            })
            

            function animateOnScroll() {
                const productTop = productCard.getBoundingClientRect().top;
                const productBottom = productCard.getBoundingClientRect().bottom;
                const isVisible = productTop < window.innerHeight - 0.2 * window.innerHeight && productBottom >= 0
              
                if (isVisible) {
                  productCard.classList.add('animate');
                }
                else productCard.classList.remove('animate');
            }
            
            window.addEventListener('scroll', animateOnScroll)

        })
    })
    .then(() => {
        function handleCardChange(selectedType) {
            const productCards = document.querySelectorAll('.product-card')
            
            productCards.forEach(productCard => {
              const cardType = productCard.dataset.type;
          
              if (cardType === selectedType) {
                productCard.style.display = 'block';
              } 
              else {
                productCard.style.display = 'none';
              }
            })
        }
        handleCardChange('smartphone')
        typeLinks.forEach(typeLink => {
            typeLink.addEventListener('click', (event) => {
               const linkSelected = event.target
               const linkText = linkSelected.textContent.toLowerCase()

               handleCardChange(linkText)
            })
        })
    })
    
// const productCards = document.querySelectorAll('.product-card')

// productCards.forEach(productCard => {
//     productCard.addEventListener('mouseenter', (event) => {
//         const cardImage = event.currentTarget.querySelector('.card-image')
//         console.log(cardImage)
//         cardImage.classList.add('card-image-hovered')
//     })
//     productCard.addEventListener('mouseleave', (event) => {
//         const cardImage = event.currentTarget.querySelector('.card-image')
//         console.log(cardImage)
//         cardImage.classList.remove('card-image-hovered')
//     })
// })

