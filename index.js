import { start } from "repl";

function mapToNegativize(sourceArray){
   return sourceArray.map (number => (number * -1))
}

function mapToNoChange(sourceArray){
    return sourceArray.map (source => source)
}

function mapToDouble(sourceArray){
    return sourceArray.map (number => (number * 2))
}

function mapToSquare(sourceArray){
    return sourceArray.map(number => (number ** 2))
}

function reduceToTotal(sourceArray, startingPoint = 0){
    return sourceArray.reduce((startingPoint, current) => {
        return (startingPoint + current);
    }, startingPoint);
}

function reduceToAllTrue(sourceArray){
    return sourceArray.reduce((aggregate, current) => {
        if (current === false)
        return false 
        else
        return true
    }, 0);
}

function reduceToAnyTrue(sourceArray){
    return sourceArray.reduce((aggregate, current) => {
        if (current === true)
        return true 
        else
        return false
    }, 0);
}