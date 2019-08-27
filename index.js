// Your code here
function mapToNegativize(array){
  let ans = []
  array.forEach(arr => {
    ans.push(-arr)
  })
  return ans
}

function mapToNoChange(array){
  return array
}

function mapToDouble(array){
  let ans = []
  array.forEach(arr => {
    ans.push(arr*2)
  })
  return ans
}

function mapToSquare(array){
  let ans = []
  array.forEach(arr => {
    ans.push(arr**2)
  })
  return ans
}

function reduceToTotal(array,start=0){
  let total=start
  array.forEach(arr=>{
    total+=arr
  })
  return total
}

function reduceToAllTrue(array){
  let i = 0
  while (i < array.length){
    if (Boolean(array[i]) === false){
      return false
    }
    else{
      i++;
    }
  }
  return true
}

function reduceToAnyTrue(array){
  let i=0
  while (i<array.length){
    if(!!array[i]){
      return true
    }else{
      i++
    }
  }
  return false
}
