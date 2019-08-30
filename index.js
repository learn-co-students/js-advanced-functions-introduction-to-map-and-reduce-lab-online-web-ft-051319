// Your code here

const mapToNegativize = (array) => {
   return array.map(function(num) {
      return -1 * num;
  })
}

const mapToNoChange = (array) => {
  return array.map(function(num) {
      return num;
  })
}

const mapToDouble = (array) => {
  return array.map(function(num) {
      return num * 2;
  })
}

const mapToSquare = (array) => {
  return array.map(function(num) {
      return num ** 2;
  })
}

// function mapToNegativize(src) {
//   let r = []
//   for (let i = 0; i < src.length; i++ ) {
//     r.push(-1 * src[i])
//   }
//   return r
// }
//
// function mapToNoChange(src) {
//   let r = []
//   for (let i = 0; i < src.length; i++ ) {
//     r.push(src[i])
//   }
//   return r
// }
//
// function mapToDouble(src) {
//   let r = []
//   for (let i = 0; i < src.length; i++ ) {
//     r.push(2 * src[i])
//   }
//   return r
// }
//
// function mapToSquare(src) {
//   let r = []
//   for (let i = 0; i < src.length; i++ ) {
//     r.push(src[i] * src[i])
//   }
//   return r
// }

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
            total = total + sourceArray[i] }
        return total
    }

    function reduceToAllTrue(sourceArray) {
        for (let i = 0; i < sourceArray.length; i++) {
                if (!sourceArray[i]) return false}
            return true
        }

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true}
        return false
    }
