function mapToNegativize(array) {
    let newArray = [];
    array.forEach(element => {
        newArray.push(-1 * element);
    });
    return newArray;
}

function mapToNoChange(array) {
    return array;
}

function mapToDouble(array) {
    let newArray = [];
    array.forEach(element => {
        newArray.push(2 * element);
    });
    return newArray;
}

function mapToSquare(array) {
    let newArray = [];
    array.forEach(element => {
        newArray.push(element ** 2);
    });
    return newArray;
}

function reduceToTotal(array, startingPoint = 0) {
    let total = startingPoint;
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total;
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) {
            return false;
        }
    }
    return true;
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            return true;
        }
    }
    return false;
}