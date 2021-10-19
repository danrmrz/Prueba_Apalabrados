import checkSpecials from "./checkSpecials.js"

const identifyType = (value) => {
  const word = {
    value: value,
    type: '',
    firstSpecial: false
  }

  if (value !== '') {
    if (isNaN(parseInt(value))) {
      let special = false
      for (let index = 0; index < value.length; index++) {
        if (checkSpecials(value[index])) {
          special = index
          index = value.length
        }
      }
      
      if (special === false) {
        word.type = 'text'
      } else {
        word.type = 'chars'
        word.firstSpecial = special
      }
    } else {
      word.type = 'number'
    }
  }

  return word
}

export default identifyType