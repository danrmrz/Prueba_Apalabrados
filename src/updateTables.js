import extractSpecial from "./extractSpecial.js"

const updateTables = (word, tables) => {
  if (word.type === 'number') {
    tables.numbers.number = parseInt(word.value)
    tables.numbers.accumulated += parseInt(word.value)
  } else if (word.type === 'text') {
    tables.text.text = word.value
    tables.text.initial = word.value[0]
    tables.text.final = word.value[word.value.length - 1]
  } else if (word.type === 'chars') {
    tables.chars.chars = tables.chars.chars.concat(
      extractSpecial(word.value, word.firstSpecial)
    )
  }
  
  return tables
}

export default updateTables