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
  let newStr1 = str
  let counter = newStr1.length; 
  
  while (counter > 0){
    if (newStr1.includes(separator)){
      let newStr2 = newStr1.slice(0, newStr1.indexOf(separator));
      newStr1 = newStr1.slice(newStr1.indexOf(separator) + 1, newStr1.length);
      newArr.push(newStr2);
      counter - newStr2.length;
      } else {
        newArr.push(newStr1);
        counter = 0
      }
  }
  return newArr;
}

function trimStart(str) {
  for(i = 0; i < str.length; i++){
    if(str[i] !== ' '){
      return str.slice(i)
    }
  } 
  return ''
}
    


function trimEnd(str) {
  for(i = str.length - 1; i >= 0; i--){
    if(str[i] !== ' '){
      return str.slice(0, i + 1)
    }
  } 
  return ''
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
