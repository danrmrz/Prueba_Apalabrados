import identifyType from "./identifyType.js"
import updateTables from "./updateTables.js"

const input = document.querySelector('#input')
const button = document.querySelector('#button')
const tablesContainer = document.querySelector('#tablesContainer')

let tables = {
  'numbers': {
    number: 0,
    accumulated: 0
  },
  text: {
    text: '',
    initial: '',
    final: ''
  },
  chars: {
    chars: []
  }
}

const setTables = () =>{
  tables = updateTables(
    identifyType(input.value),
    tables
  )
  input.value = ''
  tablesContainer.innerHTML = `<div>${JSON.stringify(tables)}</div>`
}

input.onkeyup = (e) => {
  if (e.keyCode === 13) {
    setTables()
  }
}

button.onclick = (e) => {
  setTables()
}