import { people } from '../data/people.js'

// const men = people.filter(person => person.gender === "male");
// const women = people.filter(person => person.gender === "female");
// const other = people.filter(
    // person => (person.gender === "n/a") || (person.gender === "none") || 
    // (person.gender === "hermaphrodite"));

    // console.log(other);

    const tatooinePeeps = people.filter(person => person.homeworld === "https://swapi.co/api/planets/1/");
   console.log(tatooinePeeps);


    const homeLess = people.filter(person => person.homeworld === "https://swapi.co/api/planets/28/");
    
    tatooinePeeps.forEach(person => {
        let tatListCont = document.getElementById('#tatListCont')
        
        let tatList = document.createElement('div')
        tatList.className = 'tatList'
        let tatNameElement = document.createElement('p')
        tatList.appendChild(tatNameElement)
        tatNameElement.textContent = person.name

        tatListCont.appendChild(tatList)
    });
    
    // homeLess.forEach(person => {
    //     let homeListCont = document.getElementById('#homeListCont')

    //     let homeList = document.createElement('div')
    //     homeList.className = 'homeList'
    //     let homeNameElement = document.createElement('p')
    //     homeList.appendChild(homeNameElement)
    //     homeNameElement.textContent = person.name

    //     homeListCont.appendChild(homeList)
    // });
    

    