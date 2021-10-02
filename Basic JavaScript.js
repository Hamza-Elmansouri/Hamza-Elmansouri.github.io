function max(x , y){
    if(x > y){
        return x;
    }
    else{
        return y;
    }
}

function maxOfThree(x, y, z){
    if(x > y && x > z){
        return x;
    }
    else if(y > x && y > z){
        return y;
    }
    else{
        return z;
    }
}

function isVowel(x){
    let vowls = "aeiou";
    return x.length === 1 && vowls.indexOf(x) >= 0;

}

function sum(array){
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];       
    }
    return result;
}

function multiply(array){
    let result = 1;
    for (let i = 0; i < array.length; i++) {
        result *= array[i];       
    }
    return result;
}

function reverse(word) {
    let result = "";
    for (let i = word.length-1; i >= 0; i--){
        result += word[i];
    }
    return result;
}

function findLongestWord(array) {
    let longest=0;
    for (let i = 0; i < array.length; i++) {
        if(array[i].length>array[longest].length) {longest=i;}
    }
    return array[longest].length;
}

function filterLongWords(array,j) {
    let newArr=[];
    for (let i = 0; i < array.length; i++) {
        if(array[i].length>j) {newArr.push(array[i])}
    }
    return newArr;
}

const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 10;
})
document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
  return elem == 3;});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
document.writeln(d2+ "<br/>");
document.writeln(d3);