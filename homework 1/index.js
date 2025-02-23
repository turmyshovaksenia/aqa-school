//TASK # 1

console.log('«Я JavaScript!».');

//TASK # 2

let admin, name1;
name1 = "Джон";
admin = name1;

console.log(admin);

//TASK # 3

let ourPlanetName = "Земля";
let currentUserName = "Пользователь";

//TASK # 4

let name2 = "Ilya";

console.log(`hello ${1}`);
console.log(`hello ${"name2"}`);
console.log(`hello ${name2}`);

//Task # 5 в отдельном файле

let name3 = "Олег"; // тк здесь в задании нужен promt, я задала значение переменной
console.log(name3);


//Task # 6 Постфиксная и префиксная формы -
// (Чему будут равны переменные a, b, c и d в примере ниже?)
let a1 = 1; 
let b1 = 1;

let c = ++a1; // 2
let d = b1++; // 1

console.log(c);
console.log(d);

//Task # 7 Результат присваивания
// (Чему будут равны переменные a и x после исполнения кода в примере ниже?)

let a = 2; 

let x = 1 + (a *=2); // a = 4, x = 5 

console.log(x);

//Task # 8 Преобразование типов
// (Какой результат будет у выражений ниже?)
console.log("" + 1 + 0); //= "10";
console.log("" - 1 + 0); //= -1;
console.log(true + false); //= 1;
console.log(6 / "3"); //= 2;
console.log("2" * "3"); //= 6;
console.log(4 + 5 + "px"); //= "9px";
console.log("$" + 4 + 5);  //= "$45";
console.log("4" - 2); //= 2;
console.log("4px" - 2); //= Nan;
console.log(" - 9 " + 5);  //= " - 9 5 ";
console.log(" - 9 " - 5);  //= -14;
console.log(null + 1); //= 1;
console.log(undefined + 1); //= Nan;
console.log(" \t \n " - 2); //= -2;

// Task # 9 Исправьте сложение
/* (Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.)
Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
В чём ошибка? Исправьте её. Результат должен быть 3.*/

let a4 = 1; // тк в задании был prompt, пришлось присвоить просто числовое значение переменной
let b4 = 2;

console.log(+a4 + +b4); 

// Task # 10 Каким будет результат этих выражений?

console.log(5 > 4); // true
console.log("ананас" > "яблоко"); // false
console.log("2" > "12"); // true (код ASCII)
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false 
console.log(null === +"\n0\n"); // false

// Task # 11 Выведется console.log?

if ("0") {
    console.log( 'Привет' );
}

// Task # 12 
/* напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“*/

let value = "ECMAScript"; //здесь был prompt 

if (value  === 'ECMAScript') {
    console.log('Верно!')
}
    else {
    console.log('Не знаете? ECMAScript!');    
    }

// Task # 13 
/* напишите код, который получает число через prompt */

    let number = 0 //здесь был prompt 

    if (number > 0) {
        console.log(1);
    }
    else if (number < 0) {
        console.log(-1);
    }
    else {
        console.log(0);
    }

// Task # 14 
/* Перепишите конструкцию if с использованием условного оператора '?'*/

    result = a + b < 4 ? 'Мало' : 'Много';

// Task # 15 
/* Перепишите if..else с использованием нескольких операторов '?'*/

    let message = (login === 'Сотрудник') ? 'Привет' :
    (login === 'Директор') ? 'Здравствуйте' :
    (login === '') ? 'Нет логина' :
    '' ;
// Task # 16 
/* Напишите условие if для проверки, 
что переменная age находится в диапазоне между 14 и 90 включительно.*/

const age = number
if (age >= 14 && age <= 90);

// Task # 17
/* Напишите условие if для проверки, 
что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.*/

if (age < 14 || age > 90);

//Task # 18
/* Напишите код, который будет спрашивать логин с помощью prompt.*/

let userName = "Админ"; // здесь был prompt

if (userName === 'Админ') {

  let pass = "Пароль?";

  if (pass === 'Я главный') {
    console.log( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    console.log( 'Отменено' );
  } else {
    console.log( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  console.log( 'Отменено' );
} else {
  console.log( "Я вас не знаю" );
}

// Task # 19 
/* Перепишите код используя операторы ??, ??= 
let num1 = 10,
    num2 = 20,
    result;

if (result === null || result === undefined) {
  if (num1 !== null && num1 !== undefined) {
    result = num1;
  } else {
    result = num2;
  }
} */

let num1 = 10;
let num2 = 20;
let result;

result ??= num1 ?? num2;
// Task # 20 
/* Какие значения выведет цикл for?*/
for (let i = 0; i < 5; i++) console.log( i ); // от 0 до 4
for (let i = 0; i < 5; ++i) console.log ( i ); // от 0 до 4

// Task # 21 Циклы while и for
/* При помощи цикла for выведите чётные числа от 2 до 10. */

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log( i );
  }
}

// Task # 22 Замените for на while
/* Перепишите код, заменив цикл for на while, 
без изменения поведения цикла.*/

/*for (let i = 0; i < 3; i++) {
  console.log( `number ${i}!` );
} */

let i = 0;
while (i < 3){
  console.log( `number ${i}!` )
  i++
}

// Task # 23 
//Напишите цикл, который предлагает prompt ввести число, большее 100.

let num; // не переписать без prompt , тк тогда задача не будет иметь смысла

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

// Task # 24
/* Напишите код, который выводит все простые числа из интервала от 2 до n.*/

let n = 10;
let anchor = 0;

for (let i = 2; i <= n; i++) { 
  anchor = 0; 
  for (let j = 2; j < i; j++) { 
    if (i % j === 0) {
      anchor = 1;
      break;
  }
}
  if (!anchor){
  console.log( i );
  }
}
// конструкция switch

//  Task # 25
/* Напишите if..else, соответствующий следующему switch */

if(browser == 'Edge') {
  console.log("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser === 'Firefox'
 || browser === 'Safari'
 || browser === 'Opera') {
  console.log( 'Okay we support these browsers too' );
} else {
  console.log( 'We hope that this page looks ok!' );
}

//  Task # 26
/* Перепишите код с использованием одной конструкции switch */

const number4 = 2; // здесь был prompt

switch (number4) {
  case 0:
    console.log('Вы ввели число 0');
    break;

  case 1:
    console.log('Вы ввели число 1');
    break;

  case 2:
  case 3:
    console.log('Вы ввели число 2, а может и 3');
    break;
}
// Task # 27
/* Сделайте два варианта функции checkAge: */

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

// Task # 27
/* Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b. */

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
// Task # 28 
/* Напишите функцию pow(g,h), которая возводит g в степень h и возвращает результат. */
function pow(g, h) {
  let result = g;

  for (let i = 1; i < h; i++) {
    result *= g;
  }

  return result;
}

let g = prompt("g?", ''); // без prompt не обойтись, если не хардкодить
let h = prompt("h?", '');

if (h >= 1 && h % 1 == 0) {
  console.log( pow(g, h) );
} else {
  console.log(`Степень ${h} не поддерживается, используйте натуральное число`);
}

 // Task # 29
 /* Замените код Function Expression стрелочной функцией */

 function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => console.log("Вы согласились."),
  () => console.log("Вы отменили выполнение.")
);

// Task # 30 
/* Напишите код, выполнив задание из каждого пункта отдельной строкой: */
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Task # 31 
/* Напишите функцию isEmpty(obj), которая возвращает true, 
если у объекта нет свойств, иначе false.*/

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// Task # 32
/* Можно ли изменить объект, объявленный с помощью const */

const user = {
  name: "John"
};
user.name = "Pete";

// Task # 33
/* Напишите код для суммирования всех зарплат и 
сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0. */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

// Task # 34
/* Создайте функцию multiplyNumeric(obj), 
которая умножает все числовые свойства объекта obj на 2. */

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
multiplyNumeric(menu);

menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
multiplyNumeric(menu);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}