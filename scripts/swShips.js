import { starships } from '../data/starships.js';

let newShips = starships.filter( function(val) { 
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



