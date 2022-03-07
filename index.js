/*
let hello="Hello world!";
let message;
message=hello;
alert(hello);
alert(message);
let $=1;
let _=2;
alert ($+_);
const COLOR_RED="#00";
const COLOR_GREEN="0F0";
let color=COLOR_RED;
alert(color);

let name="Liya";
alert (`hello ${1}`);
alert (`hello ${"name"}`);
alert (`hello ${name}`);


let age = prompt(`How old are you?`, 100);
alert (`You ${age} old!`);

let name = prompt("What is you name?","");
alert(name);


let a = " ";
let b = 1;
let c = 0;
let d = a-b+c;
alert (d);

let f = " /t/n";
let y = 2;
let k = f-y;
alert (k);

let o = prompt ("Первое число?", 1);
let m = prompt ("Второе число?", 2);
alert (+o + +m);


let value = prompt ("Какое официальное название JS?","");
if (value=="ECMA") {
	alert ("Верно");
}
else {
	alert ("Не знаете?");
}

let result = prompt ("Введите число", 0);
if (result>0) {
	alert (1);
}
else if (result<0) {
	alert (-1);
}
else {
	alert (0);
}
*/


function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max + 1)) + min;
  }
  const num = getRandomNumber(0, 100);
  alert(`Загаданное число: ${num}`);
  while (true) {
  let number = prompt("Введите число от 1 до 100", " ");
  if (number > num) {
	  alert ("Загаданное число меньше вашего");
  }
  else if (number < num) {
	  alert ("Загаданное число больше вашего");
  }
  else  {
    break;
  }
}
alert ("Поздравляю, вы угадали!");








