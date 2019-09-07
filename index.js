// map-like
const mapToNegativize = function(sourceArray) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * -1)
    }
    return newArray
}

const mapToNoChange = function(sourceArray) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i])
    }
    return newArray
}

const mapToDouble = function(sourceArray) {
    let newArray = []
    sourceArray.forEach(function(num) {
        newArray.push(num * 2)
    })
    return newArray
}

const mapToSquare = function(sourceArray) {
    let newArray = []
    sourceArray.forEach(function(num) {
        newArray.push(num ** 2)
    })
    return newArray
}

// reduce-like
const reduceToTotal = function(sourceArray, startingPoint = 0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        total += sourceArray[i]
    }
    return total
}

const reduceToAllTrue = function(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === false) {
            return false
        }
    }
    return true
}

const reduceToAnyTrue = function(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === true) {
            return true
        }
    }
    return false
}