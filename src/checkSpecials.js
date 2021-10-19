const lower = [97, 122]
const upper = [65, 90]

const checkSpecials = (letter) => {
  const code = letter.charCodeAt(0)

  const isLower = code >= lower[0] && code <= lower[1]
  const isUpper = code >= upper[0] && code <= upper[1]
  const isSpecial = (isLower || isUpper) ? false : true

  return isSpecial
}

export default checkSpecials