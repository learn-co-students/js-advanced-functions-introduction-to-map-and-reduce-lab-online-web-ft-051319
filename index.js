// Your code here

function mapToNegativize(array) {
    let negativize = [];
    array.forEach(element => {
        negativize.push(element * -1)
    })
    return negativize;
};

function mapToNoChange(array) {
    return array;
};

function mapToDouble(array) {
    let double = [];
    array.forEach(element => {
        double.push(element * 2)
    })
    return double;
};

function mapToSquare(array) {
    let square = [];
    array.forEach(element => {
        square.push(element ** 2)
    })
    return square;
};

function reduceToTotal(source, start) {
    if (!start) {
        let total = source[0];
        source.slice(1).forEach(element => {
            total += element;
        });
        return total;
    } else {
        let total = start;
        source.forEach(element => {
            total += element;
        })
        return total;
    }
};

function reduceToAllTrue(source) {    
    let falsy = []
    source.forEach(e => {
        if (!e) {
            falsy.push(e);
        }
    });

    return falsy.length ? false : true
};

function reduceToAnyTrue(source) {
    let truthy = []
    source.forEach(e => {
        if (e) {
            truthy.push(e);
        }
    });

    return truthy.length ? true : false
};