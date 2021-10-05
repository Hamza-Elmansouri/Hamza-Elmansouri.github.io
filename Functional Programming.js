
const sum = arr => arr.reduce((sum, result)=>sum + result, 0);
const multiply = arr => arr.reduce((multiplication, result) => multiplication * result, 1);
const reverseSrt = str => str.split("").reverse().join("");
const filterLongWords = (words, i) =>words.filter(word => word.length > i).join(",");
