/*
console.log(`Hello`);
console.log(`I'm fan of Samsung`);

window.alert('This an alert. Your device in very danger')
*/

/*
document.getElementById('myH1').textContent = 'Hello';
document.getElementById('myP').textContent = 'I like pizza';
*/

//this is just a comment




/* VARIABLES */

/*
let x;
x = '123';
console.log(x);
*/




// let insurance = 35;
// let oil = 15;
// let gas = "🥲";
// let maintaince = 25;
// let brand = 'nissan';

// console.log(typeof gas);
// console.log(`Your insuerance cost is $${insurance}`);
// console.log(`Your oil cost is $${oil}`);
// console.log(`Your gas cost is ${gas}`);
// console.log(`Your maintaince cost is $${maintaince}`);




// let online = true;
// let forSale = true;
// let isStudent = false;

// console.log(`bro is online: ${online}`);
// console.log(`is this car for ${forSale}`);
// console.log(`enrolled: ${isStudent}`);





// let fullname = "sevindu warusawithana";
// let age = 21;
// let isStudent = true;

// document.getElementById("p1").textContent = `your name is ${fullname}`;
// document.getElementById(`p2`).textContent = `your age is ${age}`;
// document.getElementById(`p3`).textContent = isStudent;
 




/* ARITHMETIC OPERATORS */

// let students = 30;
// // students = students + 1;
// // students += 1;
// // students = students % 2;

// console.log(students);





/* ACCEPT USER INPUTS IN WINDOW PROMT */

// let username;
// // username = window.prompt(`Enter your user name : `);
// console.log(username);





/* ACCEPT USER INPUTS IN HRML TEXTBOX */

// let username;
// document.getElementById(`mySubmit`).onclick = function(){
//     username = document.getElementById(`myText`).value;
//     document.getElementById(`heading`).textContent = `Hello ${username}`
// } 





/* TYPE CONVERSION */

// let age = Number(window.prompt(`Enter your age : `));
// age += 1;
// console.log(age, typeof age);

// x = ``;
// y = ``;
// z = ``;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);





/* CALCULATING CIRCUMFERENCE */

// const pi = 3.14159;
// let radius;
// let circumference;

// document.getElementById(`butt`).onclick = function() {
//     radius = document.getElementById(`in`).value;
//     radius = Number(radius);
//     circumference = 2 * pi * radius;
//     document.getElementById(`out`).textContent = `Circumference is : ${circumference} cm`;
// }





/* COUNTER PROGRAM */

// const decrease = document.getElementById(`decrease`);
// const reset = document.getElementById(`reset`);
// const increase = document.getElementById(`increase`);
// const number = document.getElementById(`number`);

// let count = 0;

// increase.onclick = function() {
//     count++;
//     number.textContent = count;
// }

// reset.onclick = function() {
//     count = 0;
//     number.textContent = count;
// }

// decrease.onclick = function() {
//     count--;
//     number.textContent = count;
// }




/* MATH */ 

// let x = 60;
// let y = 2;
// let z = 133;

// // z = Math.round(x);        asanna purna agayata watayanawa
// // z = Math.floor(x);        pahala purna agayata watayanawa
// // z = Math.ceil(x);         ihala purna agayata watayanawa
// // z = Math.trunc(x);
// // z = Math.pow(x, y);       sankya dekaka balaya balanawa... ex- 2*3 = 8  mulin thiyena eke mulin enne
// // z = Math.sqrt(x);         samachathurasraya gana kiyanawa
// // z = Math.log(x);          lagu balanna puluwn
// // z = Math.sin(x);          sin eka
// // z = Math.cos(x);          cos eka
// // z = Math.tan(x);          tan eka
// // z = Math.abs(x);          input ekata deeela thiyena ganama output karanwa
// // z = Math.sign(x);

// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);

// console.log(min);.





/* RANDOM NUMBER GENERATOR */

// const min = 50;
// const max = 100;

// const randomNum = Math.floor(Math.random() * (max-min) + min);

// console.log(randomNum);




// const btn = document.getElementById(`btn`);
// const lab1 = document.getElementById(`lab1`);
// const lab2 = document.getElementById(`lab2`);
// const lab3 = document.getElementById(`lab3`);
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// btn.onclick = function() {
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     randomNum3 = Math.floor(Math.random() * max) + min;
//     lab1.textContent = randomNum1;
//     lab2.textContent = randomNum2;
//     lab3.textContent = randomNum3;

// }




/* IF STATEMENT */ 

let age = 13;

if(age >= 18) {
    console.log("Your age is enough to enter this site");
}
else {
    console.log("You must be 18+ to enter this site")
}