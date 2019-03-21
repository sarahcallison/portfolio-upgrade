import { people } from '../data/people.js'


const tatooinePeeps = people.filter(person => person.homeworld === "https://swapi.co/api/planets/1/");


const getLastNumber = url => {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}


tatooinePeeps.forEach(person => {
    if (person.name === "Luke Skywalker") {
        person.quote = "Luke Skywalker: There's not much to see."
    }
    else if (person.name === "C-3PO") {
        person.quote = "C-3PO: What a desolate place this is."
    }
    else if (person.name === "Darth Vader") {
        person.quote = "Darth Vader (as Anakin): I don't like sand."
    }
    else if (person.name === "Owen Lars") {
        person.quote = "Owen Lars: It's only one more season."
    }
    else if (person.name === "Beru Whitesun lars") {
        person.quote = "Beru Lars: Owen, he can't stay here forever."
    }
    else if (person.name === "R5-D4") {
        person.quote = "R5-D4: I have a bad motivator."
    }
    else if (person.name === "Biggs Darklighter") {
        person.quote = "Biggs Darklighter: This planet? Big hunk of nothing."
    }
    else if (person.name === "Anakin Skywalker") {
        person.quote = "Anakin Skywalker: Some day I'm going to fly away from this place."
    }
    else if (person.name === "Shmi Skywalker") {
        person.quote = "Shmi Skywalker: The republic doesn't exist out here. We must survive on our own."
    }
    else person.quote = "Cliegg Lars: Those Tuskens walk like men, but they're vicious, mindless monsters.";

    let imageURL = getLastNumber(person.url)
    person.imagePath = `https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`
});


tatooinePeeps.forEach(person => {
    let tatContainer = document.getElementById('tatContainer')
    let tileElement = document.createElement('div')
    tileElement.className = 'tile'
    let figure = document.createElement('figure')
    let figurePic = document.createElement('img')
    let figureCap = document.createElement('figcaption')
    let captionText = document.createTextNode(person.quote)

    figurePic.src = person.imagePath

    figureCap.appendChild(captionText)
    figure.appendChild(figurePic)
    figure.appendChild(figureCap)
    tileElement.appendChild(figure)
   
    tatContainer.appendChild(tileElement)
})



    // tatooinePeeps.forEach(person => {
    //     let tatListCont = document.getElementById('tatListCont')

    //     let tatList = document.createElement('div')
    //     tatList.className = 'tatList'
    //     let tatNameElement = document.createElement('p')
    //     tatList.appendChild(tatNameElement)
    //     tatNameElement.textContent = person.name

    //     tatListCont.appendChild(tatList)
    // });


