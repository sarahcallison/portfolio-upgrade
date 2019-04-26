import { starships } from '../data/starships.js';

// Filtering starships array for "km letters"
// Slicing km off of the string
// Return only max_atmosphering_speed properties that don't equal n/a or unknown

let newShips = starships.filter(function (val) {
    let speedStr = val.max_atmosphering_speed
    let speedIndex = speedStr.indexOf('km')
    if (speedIndex !== -1) {
        val.max_atmosphering_speed = speedStr.slice(0, 4)
    }
    return val.max_atmosphering_speed !== "n/a" && val.max_atmosphering_speed !== "unknown"
});

// Sorting filtered array, newShips, by max_atmosphering_speed in ascending order

const fastest = newShips.sort((a, b) => a.max_atmosphering_speed - b.max_atmosphering_speed);

// Setting up getting ship ID from ship url property

const getLastNumber = url => {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

// Create image url with getLastNumber() on each ship in fastest array
// Assign images not available on Star Wars Visual Guide to Star Wars Logo

fastest.forEach(starship => {
    let imageURL = getLastNumber(starship.url)
    if (starship.name === "Rebel transport"){
        starship.imagePath = "images/2000px-Star_Wars_Yellow_Logo.svg.png"
    }
    else if (starship.name === "CR90 corvette"){
        starship.imagePath = "images/2000px-Star_Wars_Yellow_Logo.svg.png"
    }
    else if (starship.name === "Star Destroyer"){
        starship.imagePath = "images/2000px-Star_Wars_Yellow_Logo.svg.png"
    }
    else if (starship.name === "Republic attack cruiser"){
        starship.imagePath = "images/2000px-Star_Wars_Yellow_Logo.svg.png"
    }
    else if (starship.name === "arc-170"){
        starship.imagePath = "images/2000px-Star_Wars_Yellow_Logo.svg.png"
    }
    else if (starship.name === "Trade Federation cruiser"){
        starship.imagePath = "images/2000px-Star_Wars_Yellow_Logo.svg.png"
    }
    else if (starship.name === "Naboo star skiff"){
        starship.imagePath = "images/2000px-Star_Wars_Yellow_Logo.svg.png"
    }
    else if (starship.name === "V-wing"){
        starship.imagePath = "images/2000px-Star_Wars_Yellow_Logo.svg.png"
    }
    else if (starship.name === "Belbullab-22 starfighter"){
        starship.imagePath = "images/2000px-Star_Wars_Yellow_Logo.svg.png"
    }
    else if (starship.name === "Jedi Interceptor"){
        starship.imagePath = "images/2000px-Star_Wars_Yellow_Logo.svg.png"
    }
    else if (starship.name === "Solar Sailer"){
        starship.imagePath = "images/2000px-Star_Wars_Yellow_Logo.svg.png"
    }
    else if (starship.name === "Theta-class T-2c shuttle"){
        starship.imagePath = "images/2000px-Star_Wars_Yellow_Logo.svg.png"
    }else if (starship.name === "H-type Nubian yacht"){
        starship.imagePath = "images/2000px-Star_Wars_Yellow_Logo.svg.png"
    }
    else starship.imagePath = `https://starwars-visualguide.com/assets/img/starships/${imageURL}.jpg`
})

// Create image tiles and append to HTML container

fastest.forEach(starship => {
    let shipsCont = document.getElementById('ships-container')
    
    let tile = document.createElement('div')
    tile.className = "tile"

    let shipPic = document.createElement('img')
    shipPic.src = starship.imagePath
    shipPic.className = shipPic

    let titleElement = document.createElement('h4')
    titleElement.textContent = starship.name

    let speedElement = document.createElement('p')
    speedElement.textContent = starship.max_atmosphering_speed + " km"
    
    tile.appendChild(shipPic)
    tile.appendChild(titleElement)
    tile.appendChild(speedElement)
    shipsCont.appendChild(tile)
});



