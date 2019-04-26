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

// Create lipstick tiles with image, brand, title, price

const tenContainer = document.getElementById('div1')
const twentyContainer = document.getElementById('div2')
const thirtyContainer = document.getElementById('div3')
const overThirtyContainer = document.getElementById('div4')


function createLipTile (arrayArg, divName) {
    arrayArg.forEach(lipstick => {
        let lipTile = document.createElement('div')
        let lipBrand = document.createElement('h4')
        let lipTitle = document.createElement('p')
        let lipFigure = document.createElement('figure')
        let lipImage = document.createElement('img')
        let lipPrice = document.createElement('figcaption')

        lipTile.className = 'lipTile'
        lipBrand.className = 'lipBrand'
        lipTitle.className = 'lipTitle'
        lipFigure.className = 'lipFigure'
        lipImage.className = 'lipImage'
        lipPrice.className = 'lipPrice'

        lipBrand.src = lipstick.brand
        lipTitle.src = lipstick.name
        lipImage.src = lipstick.image_link
        lipPrice.src = lipstick.price

        lipTile.appendChild(lipFigure)
        lipTile.appendChild(lipBrand)
        lipFigure.appendChild(lipImage)
        lipFigure.appendChild(lipPrice)
        lipTile.appendChild(lipTitle)

        divName.appendChild(lipTile)          
    });
}


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

document.getElementById("underTen").onclick = function () { createLipTile(underTenList, tenContainer); };
document.getElementById("underTwenty").onclick = function () { createLipTile(underTwentyList, twentyContainer); };
document.getElementById("underThirty").onclick = function () { createLipTile(underThirtyList, thirtyContainer); };
document.getElementById("overThirty").onclick = function () { createLipTile(overThirtyList, overThirtyContainer); };


jQuery(function(){
    $( document ).ready(function(){
        jQuery('.targetDiv').hide();  
   });

   jQuery('.showSingle').click(function(){
         jQuery('.targetDiv').hide();
         jQuery('#div'+$(this).attr('target')).show();
   });
});


