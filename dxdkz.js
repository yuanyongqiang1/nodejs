var {log} = console;

// let birth = '2000/01/01';

// const Person = {

//   name: '张三',

//   //等同于birth: birth
//   birth,

//   // 等同于hello: function ()...
//   hello() { console.log('我的名字是', this.name); }

// };

// let ms = {};

// function getItem (key) {
//   return key in ms ? ms[key] : null;
// }

// function setItem (key, value) {
//   ms[key] = value;
// }

// function clear () {
//   ms = {};
// }

// module.exports = { getItem, setItem, clear };

// var cart = {
//     _wheels: 4,
  
//     get wheels () {
//       return this._wheels;
//     },
  
//     set wheels (value) {
//       if (value < this._wheels) {
//         throw new Error('数值太小了！');
//       }
//       this._wheels = value;
//     }
//   }

//   //cart.wheels
//   //cart.set.wheels(6)
//   log(cart.get.wheels)


// let lastWord = 'last word';

// const a = {
//   'first word': 'hello',
//   [lastWord]: 'world'
// };

// a['first word'] // "hello"
// a[lastWord] // "world"
// a['last word'] // "world"


// const foo = 'bar';
// const baz = { [foo]: 'abc'};

// log(baz.bar)

// const keyA = {a: 1};
// const keyB = {b: 2};

// const myObject = {
//   [keyA]: 'valueA',
//   [keyB]: 'valueB'
// };

// myObject // Object {[object Object]: "valueB"}
// 上面代码中，[keyA]和[keyB]得到的都是[object Object]，所以[keyB]会把[keyA]覆盖掉，而myObject最后只有一个[object Object]属性。

// 属性的遍历
// ES6 一共有 5 种方法可以遍历对象的属性。

// （1）for...in

// for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

// （2）Object.keys(obj)

// Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。

// （3）Object.getOwnPropertyNames(obj)

// Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

// （4）Object.getOwnPropertySymbols(obj)

// Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。

// （5）Reflect.ownKeys(obj)

// Reflect.ownKeys返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

// 以上的 5 种方法遍历对象的键名，都遵守同样的属性遍历的次序规则。

// 首先遍历所有数值键，按照数值升序排列。
// 其次遍历所有字符串键，按照加入时间升序排列。
// 最后遍历所有 Symbol 键，按照加入时间升序排列。
// Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 })
// ['2', '10', 'b', 'a', Symbol()]
// log(Object.keys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 }))
// log(Object.getOwnPropertySymbols({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 }))
// log(Object.getOwnPropertyNames({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 }))

// const proto = {
//     foo: 'hello'
//   };
  
//   const obj = {
//     foo: 'world',
//     find() {
//       return super.foo;
//     }
//   };
  
//   Object.setPrototypeOf(obj, proto);
//   obj.find() // "hello"

// const proto = {
//     x: 'hello',
//     foo() {
//       console.log(this.x);
//     },
//   };
  
//   const obj = {
//     x: 'world',
//     foo() {
//       super.foo();
//     }
//   }
  
//   Object.setPrototypeOf(obj, proto);
  
//   obj.foo() // "world"

// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// x // 1
// y // 2
// z // { a: 3, b: 4 }

// let obj = { a: { b: 1 } };
// let { ...x } = obj;
// obj.a.b = 2;
// x.a.b // 2

// let o1 = { a: 1 };
// let o2 = { b: 2 };
// o2.__proto__ = o1;
// let { ...o3 } = o2;
// o3 // { b: 2 }
// o3.a // undefined
// log(o2.a)

// const o = Object.create({ x: 1, y: 2 });
// o.z = 3;

// let { x, ...newObj } = o;
// let { y, z } = newObj;
// x // 1
// y // undefined
// z // 3
// log(o.x,o.y,o.z)
// log(newObj.y)

// 上面代码中，变量x是单纯的解构赋值，所以可以读取对象o继承的属性；变量y和z是扩展运算符的解构赋值，只能读取对象o自身的属性，
// 所以变量z可以赋值成功，变量y取不到值。ES6 规定，变量声明语句之中，如果使用解构赋值，扩展运算符后面必须是一个变量名，
// 而不能是一个解构赋值表达式，所以上面代码引入了中间变量newObj，如果写成下面这样会报错。

// let { x, ...{ y, z } } = o;

// let z = { a: 3, b: 4 };
// let n = { ...z };
// z.a = 0
// log(n) // { a: 3, b: 4 }
// let t = z
// log(t)
//合并两个对象
// let ab = { ...a, ...b };
// 等同于
// let ab = Object.assign({}, a, b);

// let a = {z:99,x:88}

// let aWithDefaults = { x: 1, y: 2, ...a };
// log(aWithDefaults)
//有key的替换值，没有就追加
// let aWithOverrides = { ...a, x: 1, y: 2 };
// log(aWithOverrides)
// let x = 1.5
// const obj = {
//     ...(x > 1 ? {a: 1} : {}),
//     b: 2,
// };
// log(obj)

// log(undefined === false)

// a?.b
// 等同于
// a == null ? undefined : a.b

// a?.[x]
// 等同于
// a == null ? undefined : a[x]

// a?.b()
// 等同于
// a == null ? undefined : a.b()

// a?.()
// 等同于
// a == null ? undefined : a()

// let a = {q:88,b:77,}

// delete a?.b
// a == null ? undefined : delete a.b

// log(a)

// 报错
// lhs && middle ?? rhs
// lhs ?? middle && rhs
// lhs || middle ?? rhs
// lhs ?? middle || rhs
// 上面四个表达式都会报错，必须加入表明优先级的括号。

// (lhs && middle) ?? rhs;
// lhs && (middle ?? rhs);

// (lhs ?? middle) && rhs;
// lhs ?? (middle && rhs);

// (lhs || middle) ?? rhs;
// lhs || (middle ?? rhs);

// (lhs ?? middle) || rhs;
// lhs ?? (middle || rhs);