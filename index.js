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

// let age = 13;

// if(age >= 18) {
//     console.log("Your age is enough to enter this site");
// }
// else {
//     console.log("You must be 18+ to enter this site")
// }   




// let age = 18;

// if(age >= 17) {
//     console.log("Your age is enough to drive");

//     if(age >= 18) {
//         console.log("Surely you have a driving licence");
//     }
//     else {
//         console.log("But you have a temporary driving licence");
//     }
// }
// else if(age <= 0) {
//     console.log("Please enter a valid age");
// }
// else {
//     console.log("You must be 17+ to have at least temporary driving licence");
// }




// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");

// let age;

// mySubmit.onclick = function() {
//     age = Number(myText.value)
//     if(age >= 18) {
//         resultElement.textContent = `Your age is enough to  this site`;
//     }
//     else {
//         resultElement.textContent = `You must be 18+ to enter this site`;
//     } 
// }

  



/* CHECKED PROPERT */ 

// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPal = document.getElementById("payPal");
// const submitBtn = document.getElementById("submitBtn");
// const subResults = document.getElementById("subResults");
// const paymentResults = document.getElementById("paymentResults");

// submitBtn.onclick = function() {

//     if(myCheckbox.checked) {
//         subResults.textContent = `You are subscribed`;
//     }
//     else {
//         subResults.textContent = `You are NOT subscribed`;
//     }

//     if(visaBtn.checked) {
//         paymentResults.textContent = `You are paying via Visa Card`;
//     }

//     else if(masterCardBtn.checked) {
//         paymentResults.textContent = `You are paying via Master Card`;
//     }

//     else if(payPal.checked) {
//         paymentResults.textContent = `You are paying via PayPal`;
//     }

//     else {
//         paymentResults.textContent = `You must select a payment method`;
//     }
// }


 


/* TERNARY OPERATOR */ 

// let age = 21;
// let result = age >= 18 ? `Your are a adult` : `Your are a child`;
// console.log(result);




// let time = 13;
// let greeting = time >= 12 ? `Good Afternooon` : `Good Morning`;
// console.log(greeting);




// let student = false;
// let message = student ? `Your are a student` : `Youe are NOT a student`;
// console.log(message); 




// let price = 99;
// let discount = price >= 100 ? 10 : 0;
// console.log(`Your toatal price is $${price - price * (discount/100)}`);





/* SWITCHES */ 

// let day = 1;

// switch(day) {
//     case 1:
//         console.log("It is Monday");
//         break;
//     case 2:
//         console.log("It is Tuesday");
//         break;
//     case 3:
//         console.log("It is Wednesday");
//         break;
//     case 4:
//         console.log("It is Thursday");
//         break;
//     case 5:
//         console.log("It is Friday");
//         break;
//     case 6:
//         console.log("It is Saturday");
//         break;
//     case 7:
//         console.log("It is Sunday");
//         break;
//     default:
//         console.log(`${day} is not a day`);
// }




// let testScore = 52;
// let letterGrade;

// switch(true) {
//     case testScore >= 90:
//         letterGrade = "A";
//         break;
//     case testScore >= 80:
//         letterGrade = "B";
//         break;
//     case testScore >= 70:
//         letterGrade = "C";
//         break;
//     case testScore >= 60:
//         letterGrade = "D";
//         break;
//     default:
//         letterGrade = "F";
// }

// console.log(letterGrade)




/* STRING METHODS */ 

// let userName = "Sevindu";



// console.log(userName.charAt(0)); /*awashya thene thiyena character eka mokkd kiyla balanna puluwn */




// console.log(userName.indexOf("v")); /* awashya character eka thiyena thena dena ganna puluwn */ 




// console.log(userName.length); /* mn deepu string eke letter count eka balanna puluwn */ 




// userName = userName.trim();
// console.log(userName); /* white spaces ain karanna puluwn */ 




// userName = userName.toUpperCase();
// console.log(userName); /* mn deepu string eke letters okkoma upercase karana puluwn */




// userName = userName.toLowerCase();
// console.log(userName); /* mn deepu string eke letters okkoma lowercase karana puluwn */




// userName = userName.repeat(3);
// console.log(userName); /* mn deepu string eka kochchara pramanayak repeat karanna oneda kiyla */ 




// let start = userName.startsWith(" ");

// console.log(start); /* mn deepu string eka patan aran thiyenne kohomada kiyla balanna puluwn */ 

// if(start) {
//     console.log("your name can't begin with ' '");
// }
// else {
//     console.log(userName);
// }    /* meeka if statment eka use karana kota udaw wenawa */ 




// let end = userName.endsWith(" ");

// console.log(end); /* mn deepu string eka iwara wela thiyenne kohomada kiyla balanna puluwn */ 

// if(end) {
//     console.log("your name can't end with ' '");
// }
// else {
//     console.log(userName);
// }    /* meeka if statment eka use karana kota udaw wenawa */ 




// let result = userName.includes(" ");

// console.log(result); /* mn deepu string eke awashya dewal ain karanna use karanna puluwn */ 

// if(result) {
//     console.log("your name can't include ' '");
// }
// else {
//     console.log(userName);
// }     




// let phoneNumber = "012-345-6789";

// phoneNumber = phoneNumber.replaceAll("-", " ");  /* apita anawashay dewal replace karanna puluwn */

// console.log(phoneNumber);




// let phonenumber = "012-345-6789";

// phonenumber = phonenumber.padStart(15, "0");  /* apita one length eka denna... madi nm eya api "" athule dena character eken ithiri tika start eke idan fill kara gannawaa */

// console.log(phonenumber); 




// let number = "012-345-6789";

// number = number.padEnd(15, "0");  /* apita one length eka denna... madi nm eya api "" athule dena character eken ithiri tika end eke idan fill kara gannawaa */

// console.log(number);




