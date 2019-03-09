import { starships } from '../data/starships.js';

//add in images, card from Bulma? starwars-visualguide.com

let newShips = starships.filter( function(val) { 
    let speedStr = val.max_atmosphering_speed
    let speedIndex = speedStr.indexOf('km')
    if (speedIndex !==-1) {
        val.max_atmosphering_speed = speedStr.slice(0, 4)
    } 
    return val.max_atmosphering_speed !== "n/a" && val.max_atmosphering_speed !== "unknown"});

console.log(newShips);

const fastest = newShips.sort((a,b) => a.max_atmosphering_speed - b.max_atmosphering_speed);
console.log(fastest);

fastest.forEach(starship => {
    let shipsCont = document.getElementById('ships-container')

    let tile = document.createElement('div')
    tile.className = "tile"
    let titleElement = document.createElement('h4')
    tile.appendChild(titleElement)
    titleElement.textContent = starship.name

let speedElement = document.createElement('p')
tile.appendChild(speedElement)
speedElement.textContent = starship.max_atmosphering_speed
shipsCont.appendChild(tile)
});



