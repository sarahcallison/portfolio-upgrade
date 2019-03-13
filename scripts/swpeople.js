import { people } from '../data/people.js'

    const tatooinePeeps = people.filter(person => person.homeworld === "https://swapi.co/api/planets/1/");
//    console.log(tatooinePeeps);

 tatooinePeeps.forEach(person => {
    if (person.name === "Luke Skywalker") {
        person.quote = "There's not much to see. I used to live here you know. - The Empire Strikes Back"
    } 
    else if (person.name === "C-3PO") {
        person.quote = "What a desolate place this is. - A New Hope"
    }
    else if (person.name === "Darth Vader") {
        person.quote = "I don't like sand. It's coarse and rough and irritating and it gets everywhere. - Attack of the Clones"
    }
    else if (person.name === "Owen Lars") {
        person.quote = "It's only one more season. - A New Hope"
    }
    else if (person.name === "Beru Whitesun lars") {
        person.quote = "Owen, he can't stay here forever. - A New Hope"
    }
    else if (person.name === "R5-D4") {
        person.quote = "I have a bad motivator. - A New Hope"
    }
    else if (person.name === "Biggs Darklighter") {
        person.quote = "This planet? Big hunk of nothing. - A New Hope"
    }
    else if (person.name === "Anakin Skywalker") {
        person.quote = "Some day I'm going to fly away from this place. - Phantom Menace"
    }
    else if (person.name === "Shmi Skywalker") {
        person.quote = "The republic doesn't exist out here. We must survive on our own. - Phantom Menace"
    }

    else person.quote = "Those Tuskens walk like men, but they're vicious, mindless monsters. - Attack of the Clones";
 });

 console.log(tatooinePeeps);

    // const homeLess = people.filter(person => person.homeworld === "https://swapi.co/api/planets/28/");
    
    // const getLastNumber = url => {
    //     let end = url.lastIndexOf('/')
    //     let start = end - 2
    //     if (url.charAt(start) === '/'){
    //         start++
    //     }
    //     return url.slice(start, end)
    // }

    // tatooinePeeps.forEach(person => {
    //     let tatListCont = document.getElementById('tatListCont')
        
    //     let tatList = document.createElement('div')
    //     tatList.className = 'tatList'
    //     let tatNameElement = document.createElement('p')
    //     tatList.appendChild(tatNameElement)
    //     tatNameElement.textContent = person.name

    //     tatListCont.appendChild(tatList)
    // });



let tatListCont = document.querySelector('#tatListCont')
    tatooinePeeps.forEach(person => {
    let tatName = document.createElement('p')
    tatName.textContent = person.name
    let tatFig = document.createElement('figure')
    let tatPic = document.createElement('img')
    // person.tatPic.src = ""
    let tatCaption = document.createElement('figcaption')
    tatCaption.textContent = person.quote
    
    tatListCont.appendChild(tatName, tatFig, tatPic, tatCaption)

    })
    

    //<div class = "picContainer">
//set const = will have to look at example 
//create element in for each function for Image, figure, figcaption, and set figcaption with the text content attribute
//append the three elements to the container div
// senator.Pic.src = senator.imgURL


    // tatooinePeeps.forEach(person => {
    //     let tatListCont = document.getElementById('tatListCont')
        
    //     let tatList = document.createElement('div')
    //     tatList.className = 'tatList'
    //     let tatNameElement = document.createElement('p')
    //     tatList.appendChild(tatNameElement)
    //     tatNameElement.textContent = person.name

    //     tatListCont.appendChild(tatList)
    // });
    
    // homeLess.forEach(person => {
    //     let homeListCont = document.getElementById('#homeListCont')

    //     let homeList = document.createElement('div')
    //     homeList.className = 'homeList'
    //     let homeNameElement = document.createElement('p')
    //     homeList.appendChild(homeNameElement)
    //     homeNameElement.textContent = person.name

    //     homeListCont.appendChild(homeList)
    // });
    

    