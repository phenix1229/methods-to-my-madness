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
  return string.slice(0, substring.length) === substring;
}

function endsWith(str, substring) {
  return str.slice(-substring.length, str.length) === substring
}

function includes(arr, item) {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === item){
      return true;
    }
  }
  return false
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
  const newArr = [];
  for (i = 0; i < str.length; i++){
    let newStr = ''
    if ();

  }

  

}

function trimStart(str) {
  let newStr = '';
  if(str[i] !== ' '){
    
  };


    
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
