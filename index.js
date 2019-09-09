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
    for (const el of sourceArray) {
        startingPoint += el;
    };
    return startingPoint;
}

function reduceToAllTrue(sourceArray) {
    let result = sourceArray.find(el => el == false)
    return result == undefined ? true : false ;
}

function reduceToAnyTrue(sourceArray) {
    let result = sourceArray.find(el => el == true)
    return result == undefined ? false : true;
}