let people = []
const container = document.querySelector('.container')

const moduleDiv = document.getElementById('module')
moduleDiv.querySelector('button')
  .addEventListener('click', addPerson)

function addPerson() {
  const template = document.createElement('div')
  template.classList.add('person')
  const cancelButton = document.createElement('span')
  cancelButton.classList.add('mdi')
  cancelButton.classList.add('mdi-close-circle')
  let name = document.querySelector('input').value
  people.push(name)
  template.innerHTML = `${name} `
  template.appendChild(cancelButton)
  container.appendChild(template)
  deleteEntry(cancelButton, name);
}

function deleteEntry(button, item) {
  button.addEventListener('click', () => {
    people = people.filter(input => input !== item)
    button.parentElement.style.display = 'none'
  })
}