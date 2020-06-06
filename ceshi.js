var {log} = console;


/*var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
i = 'fdsgfjjjj';
a[6](); // 10*/


// var a = [];
// for (let i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// console.log(i);
// i;
// a[6](); // 6



// var tmp = true;

// if (true) {
//     let tmp;
//   tmp = 'abc'; // ReferenceError
//   console.log(tmp);
// }

// console.log(typeof tmp);


// function func(arg) {
//     return arg+2;
//     {
//       let arg = 'hello';
//       return arg;
//     }
// }
// console.log(func(11));
// func() // 不报错




// var tmp = new Date();

// (function () {
//     var xx =tmp;
// console.log(tmp);
// //var tmp = 'hello world';
// }());
// console.log(tmp);




// function f() { console.log('I am gfhgjdjfdfhjfhghdkhffjgjkkhdhgfgjkghjdfgjgkhjgfdhf!'); }

// (function () {
//   if (false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }
//   console.log(f);
// }());


// var array= [];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// if(true)
// var abc='jj';
// if (true) 
// let x = 1;
// console.log(x)
  


// let [x, y, z] = new Set(['a', 'b', 'c']);
// console.log(x,y,z);


// function move({x , y } = {}) {
//   return [x, y];
// }

// move({x: 3, y: 8}); // [3, 8]
// move({x: 3}); // [3, 0]
// move({}); // [0, 0]
// log(move()); // [0, 0]


// 返回一个数组

// function example() {
//   return [1, 2, 3];
// }
// let [a, b, c] = example();

// 返回一个对象

// function example() {
//   return {
//     foo: 1,
//     bar: 2
//   };
// }
// let { foo, bar } = example();

  // 参数是一组有次序的值
// function f([x, y, z]) { ... }
// f([1, 2, 3]);

// 参数是一组无次序的值
// function f({x, y, z}) { ... }
// f({z: 3, y: 2, x: 1});

// let jsonData = {
//   id: 42,
//   status: "OK",
//   data: [867, 5309]
// };
// let { id, status, data: number } = jsonData;
// console.log(id, status, number);


// const map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');

// for (let [key, value] of map) {
//   console.log(key + " is " + value);
// }

// 普通字符串
//`In JavaScript '\n' is a line-feed.`

// 多行字符串
// `In JavaScript this is
//  not legal.`

// console.log(`string text line 1
// string text line 2`);

// 字符串中嵌入变量
// let name = "Bob", time = "today";
// `Hello ${name}, how are you ${time}?`

// let greeting = `\`Yo\` World!`;
// log(greeting)

//``英文状态的~

// let template = 
// `<ul>
//   <% for(let i=0; i < data.supplies.length; i++) { %>
//     <li><%= data.supplies[i] %></li>
//   <% } %>
// </ul>`;

// let evalExpr = /<%=(.+?)%>/g;
// let expr = /<%([\s\S]+?)%>/g;

// template = template
//   .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
//   .replace(expr, '`); \n $1 \n  echo(`');

// log(template)
// template = 'echo(`' + template + '`);';
// log('\n------------\n')
// log(template)



// function compile(template){
//   const evalExpr = /<%=(.+?)%>/g;
//   const expr = /<%([\s\S]+?)%>/g;

//   template = template
//     .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
//     .replace(expr, '`); \n $1 \n  echo(`');

//   template = 'echo(`' + template + '`);';

//   let script =
//   `(function parse(data){
//     let output = "";

//     function echo(html){
//       output += html;
//     }

//     ${ template }

//     return output;
//   })`;

//   return script;
// }


// let parse = eval(compile(template));
// div.innerHTML = parse({ supplies: [ "broom", "mop", "cleaner" ] });

// String.fromCodePoint()  //用于从 Unicode 码点返回对应字符
// String.raw()            //该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串  String.raw`Hi\\n` === "Hi\\\\n"
// codePointAt()           //codePointAt()方法会正确返回 32 位的 UTF-16 字符的码点。对于那些两个字节储存的常规字符，它的返回结果与charCodeAt()方法相同。
// let s = '𠮷a';
// s.codePointAt(0) // 134071
// s.codePointAt(1) // 57271
// s.codePointAt(2) // 97
// //codePointAt()方法是测试一个字符由两个字节还是由四个字节组成的最简单方法。
// function is32Bit(c) {
//   return c.codePointAt(0) > 0xFFFF;
// }

// is32Bit("𠮷") // true
// is32Bit("a") // false

// '\u01D1'==='\u004F\u030C' //false

// '\u01D1'.length // 1
// '\u004F\u030C'.length // 2

// log('\u01D1'.normalize() === '\u004F\u030C'.normalize())
// true

// '\u004F\u030C'.normalize('NFC').length // 1
// '\u004F\u030C'.normalize('NFD').length // 2
// 上面代码表示，NFC参数返回字符的合成形式，NFD参数返回字符的分解形式。

// includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
//这三个方法都支持第二个参数，表示开始搜索的位置。

// let s = 'Hello world!';

// log(s.startsWith('world', 6)) // true
// log(s.endsWith('Hello', 5)) // true
// log(s.includes('Hello', 6)) // false

// repeat()        //返回一个新字符串，表示将原字符串重复n次。如果repeat的参数是负数或者Infinity，会报错。
// 'x'.repeat(3) // "xxx"
// 'hello'.repeat(2) // "hellohello"
// 'na'.repeat(0) // ""
// 'na'.repeat(NaN) // ""
// 'na'.repeat('na') // ""
// 'na'.repeat('3') // "nanana"

// padstart();padend();       //补位函数共有两个参数，第一个参数代表位数，第二个参数是补位的字符串
//padStart()的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串。

// log('1'.padStart(10, '0')) // "0000000001"
// log('12'.padStart(10, '0')) // "0000000012"
// log('123456'.padStart(10, '0')) // "0000123456"

//提示字符串格式。

// log('12'.padStart(10, 'YYYY-MM-DD')) // "YYYY-MM-12"
// log('09-12'.padStart(10, 'YYYY-MM-DD')) // "YYYY-09-12"

//如果不填第二个参数默认用空格补，位数设置等于或小于字符串，直接返回字符串

// trim(); trimstart(); trimend();    //去除字符串中的空格，换行符，tab空白。

// const s = '  abc  ';

// s.trim() // "abc"
// s.trimStart() // "abc  "
// s.trimEnd() // "  abc"

// function codePointLength(text) {
//   var result = text.match(/[\s\S]/gu);
//   return result ? result.length : 0;
// }

// var s = '𠮷𠮷';

// log(s.length) // 4
// log(codePointLength(s)) // 2

//matchAll()


/*`es6对于正则表达式添加了 u 修饰符和 y 修饰符。
　　u 修饰符：含义为“Unicode模式”，用来正确处理大于\uFFFF的Unicode字符。
　　　　　　   该修饰符不光会正确处理正则表达式，还会正确处理被匹配的字符串。
　　　　　　   利用新增的正则实例对象属性 unicode ，可以判断正则表达式是否设置了u修饰符。（reg.unicode）
　　y 修饰符：叫做 “粘连”（sticky）修饰符。用来正确处理匹配粘连的字符串。
　　　　　　   它的作用和g修饰类似，也是全局匹配。
　　　　　　   它可以使用新增的正则对象属性sticky来判断正则对象是否设置了y修饰符。（reg.sticky）
　　　　　　　区别：（y 和 g）
　　　　　　　　　　1.    g 修饰符只要剩余位置中存在匹配的字符串就可以返回成功。
　　　　　　　　　　　　而y修饰符确保匹配必须是从剩余的所有位置中的第一个位置开始，这也是粘连的含义。
　　　　　　　　　　2.    y 修饰符隐含了头部匹配的标志^（^x表示匹配的字符串的首个字符必须是x）
　　s 修饰符：被称为 dotAll 模式，即点（dot）代表一切字符。
　　　　　　   可以使用正则对象新增属性 dotAll 来判断正则对象是否设置了 dotAll 模式。（reg.dotAll）
　　　　　　   作用是可以使得 . 可以匹配任意单个字符。
u、y、s都是新增的正则对象修饰符。
在js正则对象还有其他的元老修饰符，i(是否执行大小写不敏感匹配，设置了就不区分大小写)、m(多行匹配)、g(全局匹配)。`*/


// /^\S$/.test('𠮷') // false
// log(/^\S$/u.test('𠮷') )
// log(/^\S$/s.test('𠮷') )
//^\S$/u.test('𠮷') // true

// var s = 'aaa_aa_a';
// var r1 = /a+/g;
// var r2 = /a+/y;

// log(r1.exec(s)) // ["aaa"]
// log(r2.exec(s)) // ["aaa"]

// log(r1.exec(s)) // ["aa"]
// log(r2.exec(s)) // null


//const REGEX = /a/g;

// 指定从2号位置（y）开始匹配
//REGEX.lastIndex = 2;

// 匹配成功
//const match = REGEX.exec('axya');

// 在3号位置匹配成功
//match.index // 3

// 下一次匹配从4号位开始
//REGEX.lastIndex = 3 // 4

// 4号位开始匹配失败
//REGEX.exec('xaya') // null

//修饰符连用
// 'a1a2a3'.match(/a\d/y) // ["a1"]
// 'a1a2a3'.match(/a\d/gy) // ["a1", "a2", "a3"]

// const TOKEN_Y = /\s*(\+|[0-9]+)\s*/y;
// const TOKEN_G  = /\s*(\+|[0-9]+)\s*/g;

// tokenize(TOKEN_Y, '3 + 4')
// // [ '3', '+', '4' ]
// tokenize(TOKEN_G, '3 + 4')
// // [ '3', '+', '4' ]

// function tokenize(TOKEN_REGEX, str) {
//   let result = [];
//   let match;
//   while (match = TOKEN_REGEX.exec(str)) {
//     result.push(match[1]);
//   }
//   return result;
// }

// log(typeof(NaN) ) 

//============================================================================数值的扩展

// log(Number.isFinite(15));
// log(Number.isFinite(0.8));
// log(Number.isFinite(NaN));
// log(Number.isFinite(Infinity));
// log(Number.isFinite(-Infinity));
// log(Number.isFinite('foo'));
// log(Number.isFinite('15'));
// log(Number.isFinite(true));

// log(Number.isNaN(NaN))
// log(Number.isNaN(15))
// log(Number.isNaN('15'))
// log(Number.isNaN(true))
// log(Number.isNaN(9/NaN))
// log(Number.isNaN('true' / 0))
// log(Number.isNaN('true' / 'true'))


// //判断参数是否为整数
// log(Number.isInteger(25))
// log(Number.isInteger(25.1))
// //js中，整数跟浮点数的存储方法相同，所以25等同于25.0
// log(Number.isInteger(25))
// log(Number.isInteger(25.0))
// //若参数不是数值直接返回false
// log(Number.isInteger())
// log(Number.isInteger(null))
// log(Number.isInteger('15'))
// log(Number.isInteger(true))



// log(Number.EPSILON === Math.pow(2, -52))

// log(Math.pow(2, 3))

// BigInt.parseInt('9007199254740993', 10)
//5.551115123125783e-17

// log(Math.abs(0.1+0.2-0.3))

// log(NaN === NaN)



// let a = 1.5;
// log(a **= 2);
// 等同于 a = a * a;

// let b = 4;
// log(b **= 3);
// 等同于 b = b * b * b;

// Number.parseInt() 与 BigInt.parseInt() 的对比
// log(Number.parseInt('9007199254740993', 10))
// 9007199254740992
// log(BigInt.parseInt('9007199254740993', 10))
// 9007199254740993n


//可以使用Boolean()、Number()和String()这三个方法，将 BigInt 可以转为布尔值、数值和字符串类型。
// log(!0n) // true
// log(!1n) // false
//BigInt 类型的+、-、*和**这四个二元运算符，与 Number 类型的行为一致。除法运算/会舍去小数部分，返回一个整数。

//===========================================================================函数的扩展

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

//==============================================================数组的扩展

// function push(array, ...items) {
//   array.push(...items);
// }

// function add(x, y) {
//   return x + y;
// }

// const numbers = [4, 38];
// add(...numbers) // 42

// let a = new Date(...[2020, 6, 1,5]);
// log(a)

// log([1,2,3].map(x=>x*x))
//数组克隆不会改变原数组
// const a1 = [1, 2];
// // 写法一
// const a2 = [...a1];
// // 写法二
// const [...a2] = a1;

// const [first, ...rest] = [1, 2, 3, 4, 5];
// first // 1
// rest  // [2, 3, 4, 5]

// const [first, ...rest] = [];
// first // undefined
// rest  // []

// const [first, ...rest] = ["foo"];
// first  // "foo"
// rest   // []

// Number.prototype[Symbol.iterator] = function*() {
//   let i = 0;
//   let num = this.valueOf();
//   while (i < num) {
//     yield i++;
//   }
// }

// console.log([...5]) // [0, 1, 2, 3, 4]】

// let arrayLike = {
//   '0': 'a',
//   '1': 'b',
//   '2': 'c',
//   length: 3
// };

// // TypeError: Cannot spread non-iterable object.
// let arr = Array.from(arrayLike)//[...arrayLike];
// log(arr)

// Array.from(arrayLike, x => x * x);
// // 等同于
// Array.from(arrayLike).map(x => x * x);

// Array.from([1, 2, 3], x => x * x)
// // [1, 4, 9]


// Array.of方法用于将一组值，转换为数组。

// Array.of(3, 11, 8) // [3,11,8]
// Array.of(3) // [3]
// Array.of(3).length // 1

// Array() // []
// Array(3) // [, , ,]
// Array(3, 11, 8) // [3, 11, 8]

// Array.prototype.copyWithin(target, start = 0, end = this.length)
// 它接受三个参数。

// target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
// start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
// end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。
// 将3号位复制到0号位
// [1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

// -2相当于3号位，-1相当于4号位
// [1, 2, 3, 4, 5].copyWithin(0, -2, -1)
// [4, 2, 3, 4, 5]

// 将3号位复制到0号位
// log([].copyWithin.call({length: 5, 3: 1}, 0, 3))
// // {0: 1, 3: 1, length: 5}

// ({0:undefined,1:undefined,2:undefined,3: 1,4:undefined,5:undefined,length: 5}).copyWithin(0,3,5);
// 结果为：
// {0:1,1:undefined,2:undefined,3: 1,4:undefined,5:undefined,length: 5};
// 也就是
// {0:1,3:1,length:5}

// a={length: 5, 3: 1};
// console.log(a.length);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]);
// [].copyWithin.call(a, 0, 3); 
// console.log(a[0]);
// console.log(a[3]);

// 将2号位到数组结束，复制到0号位
// let i32a = new Int32Array([1, 2, 3, 4, 5]);
// i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// 对于没有部署 TypedArray 的 copyWithin 方法的平台
// 需要采用下面的写法
// [].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]

// [1, 5, 10, 15].find(function(value, index, arr) {
//   return value > 9;
// }) // 10
// [1, 5, 10, 15].findIndex(function(value, index, arr) {
//   return value > 9;
// }) // 2

// function f(v){
//   return v > this.age;
// }
// let person = {name: 'John', age: 20};
// [10, 12, 26, 15].find(f, person);    // 26

// let arr = new Array(3).fill({name: "Mike"});
// arr[0].name = "Ben";
// arr
// [{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]

// let arr = new Array(3).fill([]);
// arr[0].push(5);
// arr
// [[5], [5], [5]]

// for (let [index, elem] of ['a', 'b'].entries()) {
//   console.log(index+':'+ elem);
// }
// 0 "a"
// 1 "b"

// let letter = ['a', 'b', 'c'];
// let entries = letter.entries();
// console.log(entries.next().value); // [0, 'a']
// console.log(entries.next().value); // [1, 'b']
// console.log(entries.next().value); // [2, 'c']

// Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。

// [1, 2, 3].includes(2)     // true
// [1, 2, 3].includes(4)     // false
// [1, 2, NaN].includes(NaN) // true

// const contains = (() =>
//   Array.prototype.includes
//     ? (arr, value) => arr.includes(value)
//     : (arr, value) => arr.some(el => el === value)
// )();
// contains(['foo', 'bar'], 'baz'); // => false

// [1, 2, [3, [4, 5]]].flat()
// [1, 2, 3, [4, 5]]

// [1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]

// 如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数。

// [1, [2, [3]]].flat(Infinity)
// // [1, 2, 3]
// 如果原数组有空位，flat()方法会跳过空位。

// [1, 2, , 4, 5].flat()
// [1, 2, 4, 5]

// let arr = [, ,];
// for (let i of arr) {
//   console.log(1);
// }
// log(...arr)

// const arr = [
//   'peach',
//   'apple',
//   'spork',
//   'straw',
// ];

// const stableSorting = (s1, s2) => {
//   if (s1[0] < s2[0]) return -1;
//   return 1;
// };

// log(arr.sort(stableSorting))


// log([...'fdsga'].sort())
// let aa = [...'fdsga']
// log(aa)
// log(aa.sort())

