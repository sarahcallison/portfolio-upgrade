import { lipstick } from "../data/lipstick.js"

// Map through lipstick array to discard unused properties for each object

const newLipList = lipstick.map( lipstick => {
    return {
        brand: lipstick.brand,
        name: lipstick.name,
        image_link: lipstick.image_link,
        product_link: lipstick.product_link,
        price: lipstick.price
    }
})

// Filter through new array to return array without price values of 0 and null

const lipPriceList = newLipList.filter(lipstick => {
    return lipstick.price !== "0.0" && lipstick.price !== null
})

// Sort array so lipstick.price is in ascending order 

const priceOrderList = lipPriceList.sort((a, b) => a.price - b.price)

// Set up divs to append lipstick tiles to

const tenContainer = document.getElementById('div1')
const twentyContainer = document.getElementById('div2')
const thirtyContainer = document.getElementById('div3')
const overThirtyContainer = document.getElementById('div4')

// Create lipstick tiles with image, brand, title, price

function createLipTile (arrayArg, divName) {
    arrayArg.forEach(lipstick => {
        let lipLink = document.createElement('a')
        let lipTile = document.createElement('div')
        let lipBrand = document.createElement('h4')
        let lipTitle = document.createElement('figcaption')
        let lipFigure = document.createElement('figure')
        let lipImage = document.createElement('img')
        let lipPrice = document.createElement('p')

        lipLink.className = 'lipLink'
        lipTile.className = 'lipTile'
        lipBrand.className = 'lipBrand'
        lipTitle.className = 'lipTitle'
        lipFigure.className = 'lipFigure'
        lipImage.className = 'lipImage'
        lipPrice.className = 'lipPrice'

        lipLink.href = lipstick.product_link
        lipLink.target = '_blank'
        lipBrand.textContent = lipstick.brand
        lipTitle.textContent = lipstick.name
        lipImage.src = lipstick.image_link
        lipPrice.textContent = "$" + lipstick.price

        lipFigure.appendChild(lipImage)
        lipFigure.appendChild(lipTitle)
        
        lipTile.appendChild(lipBrand)
        lipTile.appendChild(lipFigure)
        lipTile.appendChild(lipPrice)
        lipLink.appendChild(lipTile)

        divName.appendChild(lipLink)          
    });
}

console.log(priceOrderList)

// filter array of objects by price parameters

let underTenList = priceOrderList.filter(lipstick => {
    if (lipstick.price < 10) {
        return lipstick
    }})


let underTwentyList = priceOrderList.filter(lipstick => {
    if (lipstick.price >= 10 && lipstick.price < 20) {
        return lipstick
    }
})

let underThirtyList = priceOrderList.filter(lipstick => {
    if (lipstick.price >= 20 && lipstick.price < 30) {
        return lipstick
    }
})

let overThirtyList = priceOrderList.filter(lipstick => {
    if (lipstick.price >= 30) {
        return lipstick
    }
})

// Call createLipTile with each filter category

createLipTile(underTenList, tenContainer)
createLipTile(underTwentyList, twentyContainer)
createLipTile(underThirtyList, thirtyContainer)
createLipTile(overThirtyList, overThirtyContainer)

// Show/hide on link clink

jQuery(function(){
    $( document ).ready(function(){
        jQuery('.targetDiv').hide();  
   });

   jQuery('.showSingle').click(function(){
         jQuery('.targetDiv').hide();
         jQuery('#div'+$(this).attr('target')).show();
   });
});


