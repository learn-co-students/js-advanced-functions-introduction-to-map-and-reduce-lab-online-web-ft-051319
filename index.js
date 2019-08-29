// Your code here
function mapToNegativize(sourceArray) {
  return sourceArray.map(x => x * -1);
}

function mapToNoChange(sourceArray) {
  return sourceArray.map(x => x);
}

function mapToDouble(sourceArray){
  return sourceArray.map(x => x * 2)
}

function mapToSquare(sourceArray){
  return sourceArray.map(x => x * x)
}

function reduceToTotal(sourceArray, startingPoint = 0){
  return sourceArray.reduce((current, next) => current + next) + startingPoint
}

function reduceToAllTrue(sourceArray){
  return sourceArray.reduce((current, next) => !!current && !!next, true);
}
//https://stackoverflow.com/questions/784929/what-is-the-not-not-operator-in-javascript
function reduceToAnyTrue(sourceArray){
  return sourceArray.reduce((current, next) => !!current || !!next, false);
}
