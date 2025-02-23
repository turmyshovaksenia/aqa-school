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