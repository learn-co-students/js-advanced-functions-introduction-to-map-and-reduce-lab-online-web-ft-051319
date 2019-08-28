// Your code here
function mapToNegativize(numbers){
    let negative = []
    for(let i = 0; i < numbers.length; i++){
        negative.push(numbers[i] * -1) 
    }
    return negative
    }

function mapToNoChange(array){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(array[i]) 
    }
    return newArray
    }


function mapToDouble(numbers){
    let doubled = []
    for(let i = 0; i < numbers.length; i++){
        doubled.push(numbers[i] * 2) 
    }
    return doubled
    }
    

function mapToSquare(numbers){
    let squared = []
    for(let i = 0; i < numbers.length; i++){
        squared.push(numbers[i] ** 2) 
    }
    return squared
    }
function reduceToTotal(numbers, startingValue = 0){
    let sum = startingValue
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    return sum
    }

function reduceToAllTrue(array){
    for(let i = 0; i < array.length; i++){
        if (!array[i]) return false
    }
    return true
} 

function reduceToAnyTrue(array){
    for(let i = 0; i < array.length; i++){
        if (array[i]) return true 
    }
    return false 
}