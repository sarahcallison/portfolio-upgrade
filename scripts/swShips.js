import { starships } from '../data/starships.js';

let newShips = starships.filter(function (val) {
    let speedStr = val.max_atmosphering_speed
    let speedIndex = speedStr.indexOf('km')
    if (speedIndex !== -1) {
        val.max_atmosphering_speed = speedStr.slice(0, 4)
    }
    return val.max_atmosphering_speed !== "n/a" && val.max_atmosphering_speed !== "unknown"
});

// console.log(newShips);

const fastest = newShips.sort((a, b) => a.max_atmosphering_speed - b.max_atmosphering_speed);
// console.log(fastest);

const getLastNumber = url => {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

fastest.forEach(starship => {
    let imageURL = getLastNumber(starship.url)
    if (starship.name === "Rebel transport"){
        starship.imagePath = "2000px-Star_Wars_Yellow_Logo.png"
    }
    else if (starship.name === "CR90 corvette"){
        starship.imagePath = "2000px-Star_Wars_Yellow_Logo.png"
    }
    else if (starship.name === "Star Destroyer"){
        starship.imagePath = "2000px-Star_Wars_Yellow_Logo.png"
    }
    else if (starship.name === "Republic attack cruiser"){
        starship.imagePath = "2000px-Star_Wars_Yellow_Logo.png"
    }
    else if (starship.name === "arc-170"){
        starship.imagePath = "2000px-Star_Wars_Yellow_Logo.png"
    }
    else if (starship.name === "Trade Federation cruiser"){
        starship.imagePath = "2000px-Star_Wars_Yellow_Logo.png"
    }
    else if (starship.name === "Naboo star skiff"){
        starship.imagePath = "2000px-Star_Wars_Yellow_Logo.png"
    }
    else if (starship.name === "V-wing"){
        starship.imagePath = "2000px-Star_Wars_Yellow_Logo.png"
    }
    else if (starship.name === "Belbullab-22 starfighter"){
        starship.imagePath = "2000px-Star_Wars_Yellow_Logo.png"
    }
    else if (starship.name === "Jedi Interceptor"){
        starship.imagePath = "2000px-Star_Wars_Yellow_Logo.png"
    }
    else if (starship.name === "Solar Sailer"){
        starship.imagePath = "2000px-Star_Wars_Yellow_Logo.png"
    }
    else if (starship.name === "Theta-class T-2c shuttle"){
        starship.imagePath = "2000px-Star_Wars_Yellow_Logo.png"
    }else if (starship.name === "H-type Nubian yacht"){
        starship.imagePath = "2000px-Star_Wars_Yellow_Logo.png"
    }
    else starship.imagePath = `https://starwars-visualguide.com/assets/img/starships/${imageURL}.jpg`
})



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

console.log(fastest)


