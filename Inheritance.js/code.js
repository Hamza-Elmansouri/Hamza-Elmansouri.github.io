// Question 1:


String.prototype.filter = function(...words){
    let arr = this.split(" ");
    return arr.filter(a => !words.includes(a)).join(" ");
};

// Question 2:

Array.prototype.bubbleSort = function (){
    let tempArr = this
    let len = tempArr.length;
    let swap;
    do {
        swap = false;
        for (let i = 0; i < len; i++) {
            if (tempArr[i] > tempArr[i + 1]) {
                let tmp = tempArr[i];
                tempArr[i] = tempArr[i + 1];
                tempArr[i + 1] = tmp;
                swap = true;
            }
        }
    } while (swap);
    return tempArr;
}

// Question 3:

var Person = function() {};
Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function()
{
    return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject)
{
    return this.name + " just learned " + subject;
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function(){};
Teacher.prototype = new Person();
Teacher.prototype.teach = function (subject){ return this.name + " is now teaching " + subject}
var teacherKip = new Teacher();

teacherKip.initialize("Kip Nip", 50);



