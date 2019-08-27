// Your code here

let mapToNegativize = function(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i] * -1)
    }
    return result;
}

let mapToNoChange = function(arr){
    return arr;
}

let mapToDouble = function(arr){
    let result = []
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i] * 2)
    }
    return result;
}

let mapToSquare = function(arr){
    let result = []
    for(let num of arr){
        result.push(num * num)
    }
    return result
}

let reduceToTotal = function(arr, start = 0){
    let result = start;
    for(let i = 0; i < arr.length; i++){
        result += arr[i];
    }
    return result;
}

let reduceToAllTrue = function(arr){

    for(let num of arr){
        if(!num){
            return false;
        }
    }
    return true;
}

let reduceToAnyTrue = function(arr){
    for(let num of arr){
        if(num){
            return true;
        }
    }
    return false;
}