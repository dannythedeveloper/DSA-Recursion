/* eslint-disable strict */

/* Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

Input: 02/20/2020
Output: ["02", "20", "2020"] */

function stringSplitter(str, seperator) {
  if(!str.includes(seperator)) {
    return [str];
  }
  let slice = str.slice(0, str.indexOf(seperator));
  let unsliced = str.substring(str.indexOf(seperator) + 1, str.length);

  return [slice, ...stringSplitter(unsliced, seperator)];
}

console.log(stringSplitter('02/20/2020', '/'));