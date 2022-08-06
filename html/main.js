/*with node.js javascript is used for both front end and backend; js
runs in the browser as well as server ; js helps in making webpages more dynamic and
interactive
datatypes: string, null, number,undefined, boolean , symbol, objects

 HTML: Hyper Text Markup Language: basic structure of a webpade...

 CSS: Cascading Style Sheets: beautifies the web page...

 Javascript: high- level dynamic interpreted progamming lang; allows
  client side scripting
*/




//console.log("hello world...")

//variable types: containers to store data values:
//  var n1=12;
//  var n2=30;
//  console.log(n1+n2);

//  var s="srushti";
//  console.log(s); stirng can be written in both single/double quotes

//comment shortcut---> ctrl forward slash

// datatypes in javascript

// var n=10;
// var s1="hello"



// object in javascript
// var marks={
//   "srushti":99,
//   "smit":20
// } similar to key-value pairs




//  console.log(n);
//  console.log(s1)
//  console.log(marks)


// var a=true
// var b=false
// console.log(a,b)

// var a;  null and undefined are two different datatypes
// console.log(a);
// var b=undefined;
// console.log(typeof(b))

// var c=null;
// console.log(c);

// ARRAYS: COLLECTION OF ELEMENTS (CAN BELONG TO DIFFERENT DATATYPES)

/* datatypes: primitive :null,string,boolean,number,undefined,symbol
and reference: arrays,objects;
*/
//    var arr=[1,2,2,3,4,"srushti",5];
//  console.log(arr);
// console.log(arr[0]); //indexing starts from 0

// basic operators: +,-,*,/,power(**)
//console.log(2 ** 4);

//assignment op;

//  var a=10
//  b=a;
//  b+=a;
//  console.log(b);

//comparison operation

// var x=10
// var y=20
// console.log(x==y);
// console.log(x>y);

//logical operators:

// console.log(false && true);// and is true if all conditions are true
// console.log(true|| false); // or is true even if one condition is true
// console.log(!false);// reverses the condition




// functions in javascript
//FUNCTIONS BASED ON DRY PRINCIPLE: do not repeat yourself


// function avg(a,b){ //defining the function
//   return (a+b)/2;

// }
// c=avg(4,6); // invoking the function
// console.log(c);


// function concat(s1,s2){
//   return s1+" "+s2;

// }

// final=concat("srushti","thakar");
// console.log(final);

// conditional statements; loops; break and continue
// if, else if, else...

// var age=100
// if(age>=18){
//   console.log("u can vote...");
// }
// else if(age>100){
//   console.log("age not valid...");
// }
// else{

//   console.log("sorry u are not an adult...")
// }
//if cond is false; then else if is checked and then else is executed at last


//function...

// function age(a){
//   if(a>=18){
//     console.log("you can drink water...");
//   }
//   else{
//     console.log("u cannot drink water...");
//   }
// }

// var b=6
// age(b);



//LOOPS ...(FOR ,WHILE, DO... WHILE)


// console.log(arr);
// for(let i=0;i<arr.length;i++){
//   console.log(arr[i]);
// }

// arr.forEach(function(element){
//   console.log(element);
// })
// // for each can be used to iterate over a loop
// // let has a more local scope than var...

// const a=10;
// a=20;  //error , as value of constant cant be changed




// var j=0;
// while(j<arr.length){
//   console.log(arr[j]);
//   j++;
// }

// var j = 10;
// do {
//   console.log(arr[j]);
//   j++
// }
// while (j < arr.length);

//while loop checks the cond first, do while loop
//   gets executed atleast once even if the cond is wrong


// break and continue
// break : means looping stops...
//continue: that particular iteration stops and the loop continues from the next iteration


// var arr = [1, 2, 3, 4, 5, 6];
// for(let i=0;i<arr.length;i++){
//   if(i==3){
//     break;
//   }
//   console.log(arr[i]);
// }

// 1,2,3 printed...

// var arr = [1, 2, 3, 4, 5, 6];
// for(let i=0;i<arr.length;i++){
//   if(i==3){
//     continue;
//   }
//   console.log(arr[i]);
// }

//1,2,3,5,6 printed...


// ARRAY METHODS...

// let myList=[1,2,"hello",null,89];
// console.log(myList.length);
// myList.pop();// removes element from the end 
// console.log(myList);
// myList.push("smit");// adds element at the end
// console.log(myList);
// myList.shift();
// console.log(myList);// removes 1st element
// myList.unshift("smit");// element added at the beginning
// console.log(myList);
// myList.toString();//converts to string
// myList.sort()// to sort lists/arrays


//STRING METHODS...

// let s1 = "how u doin' how how";
// console.log(s1.length);
// console.log(s1.indexOf("how"));// index form where the string starts

// console.log(s1.lastIndexOf("how"));// returns last index of a given substr

// console.log(s1.slice(0, 10))
// // provides a sequence of elements

// s1 = (s1.replace("how", "hello"));
// console.log(s1); // replace only helps in replacing the 1st occurrence of elements



//DATES IN JAVASCRIPT...

// let myDate=new Date();
// console.log(myDate)
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// getday---. 1 monday; 2 tuesday ; 6 saturday


// Javascript DOM Manipulation: (used to make HTML : dynamic)

//DOM: Document Object Model


//   let element=document.getElementById("click");
//   console.log(element);
//  let elemClass=document.getElementsByClassName("container");
// console.log(elemClass);

//  elemClass[0].style.background="yellow";
//  element.style.background="yellow";

// // changing properties of classes , elements and ids using js;

// elemClass[0].classList.add("bg");  //adding a particular class
// elemClass[0].classList.add("text"); 


// DOM TECHNIQUES...

// 1. adding elements to the webpage...

// const body=document.body
//  //append can be used to add strings; not with appendchild
// //body.append("hello"," ","world");
// const div=document.createElement("div");// creating the element ; but not added to the page

// div.innerText=("hello world")  // adding text to div; both innertext and textcontent are used
// // div.innerHTML="<strong>hello world 2</strong>";  //innerHtml used to make changes in html using js
// body.append(div);// adding the element to the page

// const s=document.createElement("strong");
// s.innerHTML("hello world");




// Managing websites using JS window object...

// ALERT, PROMPT , CONFIRM ,


// console.log("hello");
// let a=window;
// console.log(a);  //all window objects are global
// alert("hello srushti");
// b=prompt("type your name");  // provides u a pop up to write something
// console.log(b);

// c=confirm("do u want to exit? ");
// console.log(c);// if u choose yes will return true else false
// a=window.innerHeight;
// console.log(a);
// b=window.innerWidth;
// console.log(b);
// a=scrollX;
// b=scrollY;
// a=location;
// console.log(a);
// a=history
// b=history.length
// c=history.go(-1)// takes you to ur previous history,a step back


// making a web layout using DOM : DOCUMENT OBJECT MODEL...

// let a=document;
// console.log(a);
// console.log(typeof(a));

// a=document.all;
// console.log(a);
// b=document.body;
// console.log(b);  // document. can be used to access diffenet individual elements
// c=document.head;
// console.log(c);

// let a=document;
// console.log(a);
// a=document.all;
// Array.from(a).forEach(function(element){  // array.from() is used to form an array
//   console.log(element);
// })

// b=document.links;
// console.log(b);
// document.images ---> returns the images in the given html file
//document.lists----> returns the scripts in the given html file

// html element selectors...

let a = document;
b = document.links;  // exercise: to find out all links that contain a specific word
console.log(b);

Array.from(b).forEach(function (element) {
  let s = element.href;
  let s1 = s.includes("srushti");
  if (s1 == true) {
    console.log(s);
  }
})
