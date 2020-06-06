// function log(x, y) {
//   y = y || 'World';
//   console.log(x, y);
// }

// log('Hello') // Hello World
// log('Hello', 'China') // Hello China
// log('Hello', '') // Hello World

// function log(x, y ) {
//   if (typeof y === 'undefined') {
//     y = 'World';
//   }
//   console.log(x, y);
// }

// log('Hello') // Hello World
// log('Hello', 'China') // Hello China
// log('Hello', '') // Hello

// function log(x, y = 'World') {
//   console.log(x, y);
// }

// log('Hello') // Hello World
// log('Hello', 'China') // Hello China
// log('Hello', '') // Hello


//使用参数默认值时，函数不能有同名参数。

// function foo({x, y = 5}) {
//   console.log(x, y);
// }

// foo({x: 1}) // 1 5
// foo({x: 1, y: 2}) // 1 2
// foo() // TypeError: Cannot read property 'x' of undefined
// foo({}) // undefined 5
//             ||
// function foo({x, y = 5} = {}) {
//   console.log(x, y);
// }

// foo() // undefined 5


// 写法一
// function m1({x = 0, y = 0} = {}) {
//   //console.log(x, y);
//   return [x,y]
// }

// // 写法二
// function m2({x, y} = { x: 0, y: 0 }) {
//   console.log(x, y);
// }

// // 函数没有参数的情况
// log(m1()) // [0, 0]
// m2() // [0, 0]

// // x 和 y 都有值的情况
// m1({x: 3, y: 8}) // [3, 8]
// m2({x: 3, y: 8}) // [3, 8]

// // x 有值，y 无值的情况
// m1({x: 3}) // [3, 0]
// m2({x: 3}) // [3, undefined]

// // x 和 y 都无值的情况
// m1({}) // [0, 0];
// m2({}) // [undefined, undefined]

// m1({z: 3}) // [0, 0]
// m2({z: 3}) // [undefined, undefined]


// function f(x, y = 5, z) {
//   return [x, y, z];
// }

// f() // [undefined, 5, undefined]
// f(1) // [1, 5, undefined]
// f(1, ,2) // 报错
// f(1, undefined, 2) // [1, 5, 2]

// var x = 1;
// function foo(x, y = function() { x = 2; }) {
//   x = 3;
//   log(y());
//   console.log(x);
// }

// foo() // 3
// x // 1

// function push(array, ...items) {
//   items.forEach(function(item) {
//     array.push(item);
//     console.log(item);
//   });
// }

// var a = [];
// push(a, 1, 2, 3)
// log(a)


// 两种方法可以规避这种限制。第一种是设定全局性的严格模式，这是合法的。

// 'use strict';

// function doSomething(a, b = a) {
//   // code
// }
// 第二种是把函数包在一个无参数的立即执行函数里面。

// const doSomething = (function () {
//   'use strict';
//   return function(value = 42) {
//     return value;
//   };
// }());



// const full = ({ first, last }) => first + ' ' + last;

// 等同于
// function full(person) {
//   return person.first + ' ' + person.last;
// }

// let person = {first:'wwwww',last:'hhhhhhh'}
// log(full(person))


// function foo() {
//   setTimeout(() => {
//     console.log('id:', this.id);
//   }, 100);
// }

// var id = 21;

// foo.call({ id: 42 });


// function Timer() {
//   this.s1 = 0;
//   this.s2 = 0;
//   // 箭头函数
//   setInterval(() => this.s1++, 1000);
//   // 普通函数
//   setInterval(function () {
//     this.s2++;
//   }, 1000);
// }

// var timer = new Timer();

// setTimeout(() => console.log('s1: ', timer.s1), 3100);
// setTimeout(() => console.log('s2: ', timer.s2), 3100);

// var handler = {
//   id: '123456',

//   init: function() {
//     document.addEventListener('click',
//       event => this.doSomething(event.type), false);
//   },

//   doSomething: function(type) {
//     console.log('Handling ' + type  + ' for ' + this.id);
//   }
// };

// function foo() {
//   id: '123456',
//   setTimeout(() => {
//     console.log('id:', this.id);
//   }, 100);
// }

// foo(id = 1111)

// function foo() {
//   return () => {
//     return () => {
//       return () => {
//         console.log('id:', this.id);
//       };
//     };
//   };
// }

// //foo({id: 1})
// var f = foo.call({id: 1});
// var t1 = f.call({id: 2})()(); // id: 1
// var t2 = f().call({id: 3})(); // id: 1
// var t3 = f()().call({id: 4}); // id: 1

// const pipeline = (...funcs) =>
//   val => funcs.reduce((a, b) => b(a), val);

// const plus1 = a => a + 1;
// const mult2 = a => a * 2;
// const addThenMult = pipeline(plus1, mult2);

// log(addThenMult(5))

// const plus1 = a => a + 1;
// const mult2 = a => a * 2;

// mult2(plus1(5))


// function Fibonacci (n) {
//   if ( n <= 1 ) {return 1};

//   return Fibonacci(n - 1) + Fibonacci(n - 2);
// }

// // Fibonacci(10) // 89
// // Fibonacci(100) // 超时
// // Fibonacci(500) // 超时
// //尾递归优化过的 Fibonacci 数列实现如下。

// function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
//   if( n <= 1 ) {return ac2};
//   log(n,ac1,ac2)
//   return Fibonacci2 (n - 1, ac2, ac1 + ac2);
// }
// log(Fibonacci2(5))
// Fibonacci2(100) // 573147844013817200000