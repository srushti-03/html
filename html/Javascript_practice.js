/*javascript is a high-level interpreted programming language of the browser used to make webpages/websites interactive*/
// comments are parts of the code: that are ignored...; runs on the client /browser as well as on server(Node.js)//
/* datatypes: null(defined , but contains nothing), undefined(not yet defined), boolean(true/false), string ,symbol(immutable value that is unique),number
 and object(can store a lot of key value pairs) */

 /*var myName="Srushti";  //var can be used throughout the program
 myName=10;
 let name="smit"; //let can only be used in within that paticular scope
 const pi=3.14;
 var a;
 a=15;
 var b=1125; console.log(b);
 b=a;
 //how to print values in console(using console.log(name of variable))

 console.log(a);
 console.log(b);*/
/* 2 strings get joined 
 var c="srushti"
 c=c+" thakar"
 console.log(c);


 //camelcasing is a great way of naming variables : marksInMaths,marksInChemistry;

 var sum=10+2345;
 console.log(sum);// basic mathematical operations like addition, subtraction, multiplication(*),division (/)

 var s=80;
 s++;
 console.log(s);  // incrementing and decrementing 

 console.log(4/2);
 console.log(55/2);
 console.log(11%2); module %2 is used to find out even and odd
 

 console.log("hello world");
 //alert('hello world');--> error: alert not defined
 console.log(10);
 console.error("error");//shows error with the exact line 
 console.warn("warn");// shows warning message with exact line
 const a=30;
 
 console.log(a);// you cannot reassign to a constant 
 

 //datatypes:string,numbers,null(defined and has value nothing),boolean(true and false),undefined(not yet defined),symbols and objects
/*
 
 const age=30;
 const marks=98.4;
 const x=null; //returns type -->object
 const y=undefined;
 let z;//undefined
 console.log(typeof marks); always use constants wherever possible

 /*concatenation
 const name='srushti';
 console.log( "my name is "+name);
 const s="hello";
 console.log(s.length);
 console.log(s.substring(0,2))
 console.log(s.toLowerCase());
 console.log(s.toUpperCase());
 console.log(s.charAt(4));
 console.log(s.split('')); split is used to convert the string into a list

 /*arrays--can contain more than one datatypes

 const num=[1,2,3,4,4]
console.log(num);
const a=[1,null,4,"smit"];
console.log(a);
console.log(a[3])

a[4]='srushti';
console.log(a);
a.push(1);
console.log(a);
a.pop();// removes the last element 
console.log(a);
a.unshift('smit');
console.log(a);// to make a particular element first
console.log(a.indexOf('smit'));
console.log(Array.isArray(a));// returns true/ false based on whether such array exists or not
;
*/

//object literals: are key value pairs...
//alert function provides a pop up
/*
const person={
    firstName:'srushti',
    lastName:'thakar',
    age:18,
    hobbies:['swimming','music','movies'],
    address:{
        city:'ahmedabad',
        state:'gujarat'
    }

}
console.log(person);
console.log(person.firstName,person.lastName);

console.log(person.address.state);

/*destructuring -pulling elements out of the object literals;

const { firstName , lastName,address:{city}}=person;
console.log(firstName)
console.log(city)
person.email="xyz@gmail.com";
console.log(person);

//json: javascript object notation, html: hyper text markup language, css:cascading stylesheets



const todos=[
    { id:1,
    text:'cleaning dishes',
    isCompleted:true


    },
    { id:2,
        text:'watering plants',
        isCompleted:false
    
    
        }

];
console.log(todos)

console.log(todos[0].text)

const todoJSON=JSON.stringify(todos);
console.log(todoJSON)
JSON.stringify is used to convert object literals in js to JSON

/*for loop

for(let i=0;i<5;i++){
    console.log(i+1)

}

let i=1;
while(i<10){
    console.log(`loop number: ${i+1}`)
    i++
}*/


/*forEach,map,filter...--->high order array methods

todos.forEach(function(todos) {
    console.log(todos.text)
})

const todoText=todos.map(function(todo){
    return todo.text
})

console.log(todoText)//returns array

const todoCompleted=todos.filter(function(todo){
    return todo.isCompleted===true
})

console.log(todoText)
*/

//conditionals...
/*basic if/else/else if statement 
const x=20
const y=15
if(x>=10 && y<=20){
    console.log("yes")
}
else if(y===20){
    console.log("yes")
}
else{
    console.log("no")
}
*/
//== compares only the value while === value as well as datatype


/*ternary operator:

const x=10

const color=x>10 ? 'red' : 'blue'  ; red is the condition is true and blue if it is not

switch(color){
    case 'red':
        console.log("color is red")

    case 'blue':
        console.log('color is blue')
    default:
        console.log("color is neither blue nor red")
}


function add(num1=10,num2=98){
    console.log(num1+num2)
}

add()
//one can even provide default values to parameters


const add=(num1,num2)=>(num1+num2);
 
console.log(add(5,10))
*/

//object oriented programming(OOP)//creating an obj named person(first letter always capital)

/*function Person(firstName,lastName,dob){
    this.firstName=firstName
    this.lastName=lastName
    this.dob=new Date(dob)//for exact date,day,time,month
    this.getYear=function(){
        return this.dob.getFullYear();
    }
   
}

//initiate person object

const p1=new Person('srushti','thakar','11-03-2003');


/*
console.log(p1.getYear());
console.log(p1.getFullName);

console.log(p1.firstName);



Person.prototype.getFullYear=function(){
    return this.dob.getFullYear();
}
console.log(p1);




class Person{
    constructor(firstName,lastName,dob){
        this.firstName=firstName
        this.lastName=lastName
        this.dob=new Date(dob)//for exact date,day,time,month
        
    }

    getFullYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const p1=new Person('srushti','thakar','11-03-2003');
console.log(p1.getFullName);*/

 

console.log("thank you for learning javascript.....")

console.log(10+20);










