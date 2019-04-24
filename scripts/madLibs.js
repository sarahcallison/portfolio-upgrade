const submitButton = document.querySelector('button')
submitButton.addEventListener('click', function () {
  let newID = document.getElementById('enterID').value

  let newPerson = people.filter( function (person) {
    if (newID === person.id) {
      return [{
  name : person.name,
  height: person.height,
  mass : person.mass,
  imagePath: person.imagPath
    }] 
  }
   })
  createCard(newPerson)
})