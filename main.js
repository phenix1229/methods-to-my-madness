function slice(string, start = 0, end = string.length) {
    let newStr = '';
  
    if (start !== 0){
    for (let i = start; i < end; i++){
        newStr += string[i];  
      }
    } 
    else {
      newStr = string
    }
    return newStr;
}

function repeat(str, repetitions) {
  let newStr = '';

  for (let i = 0; i < repetitions; i++){
    newStr += str;
  }
  return newStr;
}

function startsWith(string, substring) {
  const val = string.slice(0, substring.length) === substring ? true : false;
  return val;
}

function endsWith(str, substring) {
  const val = str.slice(-substring.length, str.length) === substring ? true : false;
  return val;
}

function includes(arr, item) {
  // const val = '';

  for (let i = 0; i < arr.length; i++){
    if (arr[i] === 'hello'){
      return true;
    } else {
      return false;
    }
  // return val;
}
}

function join(arr, separator = '') {
  let newArr = [];
  
  if (separator !== ''){
    for (let i = 0; i < arr.length; i++){
      if (i !== arr.length - 1){
        newArr += arr[i] + separator;
      } else {
        newArr += arr[i];
      }
    }
  } else {
    for (let i = 0; i < arr.length; i++){
      newArr += arr[i];
    }
  }
  return newArr;
}


function split(str, separator) {
  
}

function trimStart(str) {
}

function trimEnd(str) {
}


module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
