function mapToNegativize(arr) {
    let negativeArr = arr.map(element =>  {
        return element * -1
    });
    return negativeArr;
}

function mapToNoChange(arr) {
    let noChangeArr = arr.map(element => {
        return element;
    });
    return noChangeArr;
}

function mapToDouble(arr) {
    let doubleArr = arr.map(element => {
        return element * 2;
    });
    return doubleArr;
}

function mapToSquare(arr) {
    let sqrArr = arr.map(element => {
        return Math.pow(element, 2);
    });
    return sqrArr;
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let reducedTotal = sourceArray.reduce(function(total, num) {
        return total += num
    }, startingPoint);
    return reducedTotal;
}

function reduceToAllTrue(sourceArray) {
    let total = true;
    let result = sourceArray.reduce(function(total, element) {
        return Boolean(element) == total
    })
    return result;
}

function reduceToAnyTrue(sourceArray) {
    let total = false;
    let result = sourceArray.reduce(function(total, element) {
        if (Boolean(element) == true) {
            return total = true;
        } else {
            return total;
        }
    })
    return result;
}