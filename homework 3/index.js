// Task # 35
/* Что выведется на экран? */

let str = "Привет";

str.test = 5;

console.log(str.test); //undefined

// Task # 36
/* Создайте скрипт, который запрашивает ввод двух чисел (
используйте prompt) и после показывает их сумму. */

let wa = +prompt("Введите первое число", ""); //тут в задании "используйте prompt"
let ab = +prompt("Введите второе число", "");

console.log(wa + ab);

// Task # 37
/* Создайте функцию readNumber, 
которая будет запрашивать ввод числового значения до тех пор, 
пока посетитель его не введёт. */

function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0); // в задании просьба ввести числовое значение 
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}
console.log(`Число: ${readNumber()}`);

// Task # 38
/* Напишите функцию random(min, max), 
которая генерирует случайное число с плавающей точкой от min до max 
(но не включая max). */
function random(min, max) {
  return min + Math.random() * (max - min);
}
console.log( random(1, 5) );
console.log( random(1, 5) );
console.log( random(1, 5) );

// Task # 39 
/* Напишите функцию randomInteger(min, max), 
которая генерирует случайное целое (integer) число от min до max 
(включительно). */

function randomInteger(min, max) {

  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
console.log( randomInteger(1, 3) );

// Task # 40
/* Напишите функцию ucFirst(str), 
возвращающую строку str с заглавным первым символом. */
function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}
console.log( ucFirst("алина") );

// Task # 41 
/*Напишите функцию checkSpam(str), возвращающую true, 
если str содержит 'viagra' или 'XXX', а иначе false. */
function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
console.log (checkSpam('buy ViAgRA now') );
console.log (checkSpam('free xxxxx'));
console.log (checkSpam('innocent rabbit'));

// Task # 42
/* Создайте функцию truncate(str, maxlength), 
которая проверяет длину строки str и, если она превосходит maxlength, 
заменяет конец str на "…", так, чтобы её длина стала равна maxlength. */

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

// Task # 43
/* Создайте функцию extractCurrencyValue(str), которая будет из такой строки 
выделять числовое значение и возвращать его. */
function extractCurrencyValue(str) {
  return +str.slice(1);
}

// Task # 44
/*  Что выведет следующий код? */
let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;

shoppingCart.push("Банан");
console.log(fruits.lenghth);

// Task # 45
/* 5 операций с массивом. */

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log( styles.shift() );
styles.unshift("Рэп", "Регги");

// Task # 46 
/* Вызов в контексте массива */

let arr2 = ["yy", "ff"];

arr2.push(function() {
  console,log( this );
})

arr2[2]();

// Task # 47 
/* Сумма введённых чисел */

function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("Введите число", 0); //в задании нужно использовать prompt

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
console.log(sumInput() );

// Task # 48
/* Подмассив наибольшей суммы */
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }

  return maxSum;
}
console.log (getMaxSubSum([-1, 2, 3, -9]));
console.log (getMaxSubSum([-1, 2, 3, -9, 11]));
console.log (getMaxSubSum([-2, -1, 1, 2]));
console.log (getMaxSubSum([100, -9, 2, -3, 5]));
console.log (getMaxSubSum([1, 2, 3]));
console.log (getMaxSubSum([-1, -2, -3]));

//Task # 49
/* Напишите функцию camelize(str), 
которая преобразует строки вида «my-short-string» в «myShortString». */
function camelize(str) {
  return str
    .split('-')
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); 
}
// Task # 50 
/* Фильтрация по диапазону */
let arr3 = [5, 3, 8, 1];

filterRangeInPlace(arr3, 1, 4);

console.log(arr3);

// Task # 51
/* Сортировать в порядке по убыванию */

let arr4 = [5, 2, 1, -10, 8];

arr4.sort((a, b) => b - a);
console.log(arr9);

// Task # 52
/* Скопировать и отсортировать массив */
function copySorted(arr) {
  return arr9.slice().sort();
}

let arr11 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr11);
console,log(sorted);
console.log(arr11);

// Task # 53 
/* Создать расширяемый калькулятор */

function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

// Task # 54
/* Трансформировать в массив имён */
let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 28 };

let users1 = [ vasya1, petya1, masha1];

let names = users.map(item => item.name);
console.log(names);

// Task # 55
/* Трансформировать в объекты */
let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya2, petya2, masha2 ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
console.log( usersMapped[0].id );
console.log(usersMapped[0].fullName )

// Task # 56 
/* Отсортировать пользователей по возрасту */
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 28 };

let arr5 = [ vasya3, petya33, masha3 ];

sortByAge(arr5);

console.log(arr[0].name); 
console.log(arr[1].name); 
console.log(arr[2].name); 

// Task # 57
/* Перемешайте массив */

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr7 = [1, 2, 3];
shuffle(arr7);
console.log(arr7);

// Task # 58
/* Получить средний возраст */
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let vasya5 = { name: "Вася", age: 25 };
let petya5 = { name: "Петя", age: 30 };
let masha5 = { name: "Маша", age: 29 };

let arr6 = [ vasya5, petya5, masha5 ];

console.log( getAverageAge(arr6) );

// Task # 59
/* Оставить уникальные элементы массива */

function unique(arr7) {
  let result = [];

  for (let str of arr7) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];
console.log( unique(strings) );

// Task # 60
/* Создайте объект с ключами из массива */
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}
// Task # 62
/*Напишите функцию sumSalaries(salaries), 
которая возвращает сумму всех зарплат 
с помощью метода Object.values и цикла for..of. */

function sumSalaries() {
  let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250
  };
  let counter = 0;
  for (let salary of Object.values(salaries)) {
    counter += salary;
  }
  return counter;
}
console.log(sumSalaries());

// Task # 63 
/* Напишите функцию count(obj), которая возвращает количество свойств объекта: */
let user98 = {
  name: 'John',
  age: 30
};
console.log(Object.keys(user98).length)

// Task # 64
/* Деструктурирующее присваивание */
let user = {
  name5: "John",
  years: 30
};

let {name5, years: age, isAdmin = false} = user;
console.log(name5);
console.log(age);
console.log(isAdmin);

// Task # 65
/* Максимальная зарплата */

function topSalary(salaries) {

  let max = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}