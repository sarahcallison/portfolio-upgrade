import { films } from './films.js';

const intro = document.querySelector('.intro');

films.sort((a,b) => (a.episode_id > b.episodes_id) ? 1 : -1);

//let title = films[0].title
//let crawl = films[0].opening_crawl

//let titleElement = document.querySelector('.title')
//let crawlElement = document.querySelector('.crawl')

//titleElement.textContent = title
//crawlElement.textContent = crawl

films.forEach(film => {
    let tile = document.createElement('div')
    let titleElement = document.createElement('h1')
    tile.appendChild(titleElement)
    titleElement.textContent = film.title

let crawlElement = document.createElement('h4')
tile.appendChild(crawlElement)
crawlElement.textContent = film.opening_crawl

intro.appendChild(tile)
});