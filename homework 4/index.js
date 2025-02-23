// Task # 66
/* Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n. */

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(sumTo(100));
  
  // Task # 67
  /* Вычислить факториал */
  function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  }
  console.log( factorial(5) );
  
  // Task # 68
  /* Числа Фибоначчи */
  
  function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  console.log( fib(3) ); 
  console.log( fib(7) );
  
  // Task # 69 
  /* Вывод односвязного списка */
  
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printList(list) {
    let tmp = list;
  
    while (tmp) {
      console.log(tmp.value);
      tmp = tmp.next;
    }
  
  }
  
  printList(list);
  
  // Task # 67
  /* Вывод односвязного списка в обратном порядке */
  
  let list1 = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printReverseList(list1) {
    let arr12 = [];
    let tmp = list1;
  
    while (tmp) {
      arr12.push(tmp.value);
      tmp = tmp.next;
    }
  
    for (let i = arr12.length - 1; i >= 0; i--) {
      console.log( arr12[i] );
    }
  }
  
  printReverseList(list);
  
  // Task # 68
  /* Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b. */
  
  function sum(a) {
  
    return function(b) {
      return a + b; 
    };
  
  }
  console.log( sum(1)(2) );
  console.log( sum(5)(-1) ); 
  
  // Task # 69
  /* Фильтрация с помощью функции */
  
  function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7];
  console.log( arr.filter(inBetween(3, 6)) ); 
  
  function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
  }
  
  let arr8 = [1, 2, 3, 4, 5, 6, 7];
  console.log( arr8.filter(inArray([1, 2, 10])) );
  
  // Task # 70
  /* Напишите функцию byField, которая может быть использована для этого. */
  
  function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
  }
  
  // Task # 71
  /* Армия функций */
  
  function makeArmy() {
  
    let shooters = [];
  
    for (let i = 0; i < 10; i++) {
      let shooter = function() { 
        console.log( i ); 
      };
      shooters.push(shooter);
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); 
  army[5](); 
  