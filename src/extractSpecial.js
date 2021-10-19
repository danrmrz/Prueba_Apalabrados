import checkSpecials from "./checkSpecials.js"

const extractSpecial = (string, indexFirst) => {
  let chars = [string[indexFirst]]
  for (let index = indexFirst + 1; index < string.length; index++) {
    if (checkSpecials(string[index])) {
      chars.push(string[index])
    }
  }

  return chars
}

export default extractSpecial