// variable tasks
console.log('variables tasks');
const a = 2, b = 3;
console.log("a * b = ", a * b);
const c = 6, d = 2;
console.log("c / d = ", c / d);
const e = 3, f = 4;
console.log("e + f", e + f);
const numb = 11, isTrue = true, str1 = "java script", str2 = "100";
console.log(numb, isTrue, str1, str2);
let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;

// prompt tasks
alert(prompt('Enter number') ** 2);
const firstVar = Number(prompt('Enter first variable ')), secondVar = Number(prompt('Enter second variable'));
alert((firstVar + secondVar) / 2);
const minutes = Number(prompt('Enter minutes'));
alert(minutes * 60);
const greetings = 'Hello ';
let userName = prompt('Enter your name ');
alert(greetings + userName + '!');

// condition tasks
console.log('condition tasks');
const guess = Number(prompt('Enter number to guess '));
if (guess === 10) {
   alert("You're right");
} else {
   alert("You're wrong");
}

let test = true;
if (test) {
   console.log("You're right");
} else {
   console.log("You're wrong");
}
if (!test) {
   console.log("You're right");
} else {
   console.log("You're wrong");
}
test = false;
if (test) {
   console.log("You're right");
} else {
   console.log("You're wrong");
}
if (!test) {
   console.log("You're right");
} else {
   console.log("You're wrong");
}

let payment = Number(prompt('Enter total payment '));
if (payment > 500 && payment <= 800) {
   alert(`Your payment with discount is ${payment - payment * 0.03} UAH`);
} else if (payment > 800) {
   alert(`Your payment with discount is ${payment - payment * 0.05} UAH`);
} else if (payment > 0 && payment <= 500) {
   alert(`Your payment doesn't have a discount - ${payment} UAH`)
} else {
   alert('incorrect payment data');
}

// loop task 1
console.log('loop tasks');
let i = 25;
let resultLoopTask1 = '';
while (i >= 0) {
   resultLoopTask1 += String(i) + " ";
   i--;
}
console.log(resultLoopTask1);

resultLoopTask1 = '';
for (i = 25; i >= 0; i--){
   resultLoopTask1 += String(i) + " ";
}
console.log(resultLoopTask1);

i = 25;
resultLoopTask1 = '';
do {
   resultLoopTask1 += String(i) + " ";
   i--;
} while (i >= 0);
console.log(resultLoopTask1);

// loop task 2
let j = 10, resultLoopTask2 = '';
while (j <= 50) {
   if (j % 5 == 0) {
      resultLoopTask2 += String(j) + " ";
   }
   j++;
}
console.log(resultLoopTask2);

resultLoopTask2 = '';
for (j = 10; j <= 50; j += 5){
   resultLoopTask2 += String(j) + " ";
}
console.log(resultLoopTask2);

j = 10;
resultLoopTask2 = '';
do {
   resultLoopTask2 += String(j) + " ";
   j += 5;
} while (j <= 50);
console.log(resultLoopTask2);

// loop task 3
i = 100, total = 0;
while (i) {
   total += i;
   i--;
}
console.log(total);

total = 0;
for (i = 100; i; i--){
   total += i;
}
console.log(total);

i = 100;
total = 0;
do {
   total += i;
   i--;
} while (i);
console.log(total);

// loop task 4
let resultLoopTask4 = Number(prompt('solve an example (2 + 2 * 2)'));
while (resultLoopTask4 !== 6) {
   resultLoopTask4 = Number(prompt('solve an example (2 + 2 * 2)'));
}
alert('congrats, you solved the example!');

resultLoopTask4 = Number(prompt('solve an example (2 + 2 * 2)'));
for (; resultLoopTask4 !== 6;){
   resultLoopTask4 = Number(prompt('solve an example (2 + 2 * 2)'));
}
alert('congrats, you solved the example!');

do {
   resultLoopTask4 = Number(prompt('solve an example (2 + 2 * 2)'));
} while (resultLoopTask4 !== 6);
alert('congrats, you solved the example!');


// switch task

let day = Number(prompt('Enter a digit 1-7 for full name of week '));

switch (day) {
   case 1:
      alert('Monday');
      break;
   case 2:
      alert('Tuesday');
      break;
   case 3:
      alert('Wednesday');
      break;
   case 4:
      alert('Thursday');
      break;
   case 5:
      alert('Friday');
      break;
   case 6:
      alert('Saturday');
      break;
   case 7:
      alert('Sunday');
      break;
   default:
      alert('inccorect data');
      break;
}

day = Number(prompt('Enter a digit of a day to show month decade (1-31 expect)'));

switch (true) {
   case day >= 1 && day <= 10:
      alert('First decade');
      break;
   case day >= 11 && day <= 20:
      alert('Second decade');
      break;
   case day >= 21 && day <= 31:
      alert('Third decade');
      break;
   default:
      alert('inccorect data');
      break;
}