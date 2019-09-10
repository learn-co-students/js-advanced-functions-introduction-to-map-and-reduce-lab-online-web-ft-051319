// Your code here
const mapToNegativize = function (sourceArray) {
  return (sourceArray.map (x => x*(-1)))
}

const mapToNoChange = function (sourceArray) {
  return (sourceArray.map (x => x))
}

const mapToDouble = function (srcArray) {
  return (srcArray.map (x => x*2))
}
const mapToSquare = function (srcArray) {
  return(srcArray.map (x => x**2))
}

const reduceToTotal = function (srcArray, startingPoint=0) {
  return(srcArray.reduce((accumulator, currValue) => accumulator + currValue)+startingPoint)
}

const reduceToAllTrue = function (srcArray) {
  return(srcArray.reduce(function (boolTotal, element) { return boolTotal && !!element}))
}

const reduceToAnyTrue = function (srcArray) {
  return(srcArray.reduce((boolTotal, element) => boolTotal || !!element))
}
