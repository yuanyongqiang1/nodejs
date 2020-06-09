var {log} = console

//Object.is  比较两个值是否相等
// log(+0 === -0) //true
// log(NaN === NaN) // false

// log(Object.is(+0, -0)) // false
// log(Object.is(NaN, NaN)) // true

// const target = { a: 1, b: 1 };

// const source1 = { b: 2, c: 2 };
// const source2 = { c: 3 };

// Object.assign(target, source1, source2);
// log(target) // {a:1, b:2, c:3}

// let a = 2
// Object.assign(a)
// log(Object.assign(a))

// const v1 = 'abc';
// const v2 = true;
// const v3 = 10;

// const obj = Object.assign({}, v1, v2, v3);
// console.log(obj); // { "0": "a", "1": "b", "2": "c" }

// var a = Object.assign({b: 'c'},
// Object.defineProperty({}, 'invisible', {
//   //enumerable: false,
//   value: 'hello'
// })
// )

// log(a)

// const obj1 = {a: {b: 1}};
// const obj2 = Object.assign({}, obj1);

// obj1.a.b = 2;
// obj2.a.b // 2

// const target = { a: { b: 'c', d: 'e' } }
// const source = { a: { b: 'hello' } }
// Object.assign(target, source)
// { a: { b: 'hello' } }

//Lodash 的_.defaultsDeep方法，可以得到深拷贝的合并

// Object.assign([1, 2, 3], [4, 5])
// [4, 5, 3]

// const source = {
//     get foo() { return 1 }
//   };
//   const target = {};
  
//   Object.assign(target, source)
// { foo: 1 }

// （1）为对象添加属性

// class Point {
//   constructor(x, y) {
//     Object.assign(this, {x, y});
//   }
// }
// （2）为对象添加方法

// Object.assign(SomeClass.prototype, {
//   someMethod(arg1, arg2) {
//     ···
//   },
//   anotherMethod() {
//     ···
//   }
// });

// // 等同于下面的写法
// SomeClass.prototype.someMethod = function (arg1, arg2) {
//   ···
// };
// SomeClass.prototype.anotherMethod = function () {
//   ···
// };
// （3）克隆对象

// function clone(origin) {
//   return Object.assign({}, origin);
// }
//克隆继承的值
// function clone(origin) {
//     let originProto = Object.getPrototypeOf(origin);
//     return Object.assign(Object.create(originProto), origin);
// }
// 合并多个对象

// 将多个对象合并到某个对象。

// const merge =
//   (target, ...sources) => Object.assign(target, ...sources);
// 如果希望合并后返回一个新对象，可以改写上面函数，对一个空对象合并。

// const merge =
//   (...sources) => Object.assign({}, ...sources);
//（5）为属性指定默认值

// const DEFAULTS = {
//   logLevel: 0,
//   outputFormat: 'html'
// };

// function processContent(options) {
//   options = Object.assign({}, DEFAULTS, options);
//   console.log(options);
//   // ...
// }
// processContent()

// const source = {
//     set foo(value) {
//       console.log(value);
//     }
//   };
  
//   const target2 = {};
//   Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
//   Object.getOwnPropertyDescriptor(target2, 'foo')
// { get: undefined,
//   set: [Function: set foo],
//   enumerable: true,
//   configurable: true }

// const shallowMerge = (target, source) => Object.defineProperties(
// target,
// Object.getOwnPropertyDescriptors(source)
// );

// 将对象属性克隆到一个新对象。这属于浅拷贝。

// const clone = Object.create(Object.getPrototypeOf(obj),
//   Object.getOwnPropertyDescriptors(obj));

// // 或者

// const shallowClone = (obj) => Object.create(
//   Object.getPrototypeOf(obj),
//   Object.getOwnPropertyDescriptors(obj)
// );
// 上面代码会克隆对象obj。

// const obj = Object.create(prot);
// obj.foo = 123;

// 或者

// const obj = Object.assign(
//   Object.create(prot),
//   {
//     foo: 123,
//   }
// );
// 有了Object.getOwnPropertyDescriptors()，我们就有了另一种写法。

// const obj = Object.create(
//   prot,
//   Object.getOwnPropertyDescriptors({
//     foo: 123,
//   })
// );

// Object.getOwnPropertyDescriptors()也可以用来实现 Mixin（混入）模式。

// let mix = (object) => ({
//   with: (...mixins) => mixins.reduce(
//     (c, mixin) => Object.create(
//       c, Object.getOwnPropertyDescriptors(mixin)
//     ), object)
// });

// // multiple mixins example
// let a = {a: 'a'};
// let b = {b: 'b'};
// let c = {c: 'c'};
// let d = mix(c).with(a, b);

// d.c // "c"
// d.b // "b"
// d.a // "a"

// Object.setPrototypeOf()（写操作）
// Object.getPrototypeOf()（读操作）
// Object.create()（生成操作）代替。

// var obj = Object.create(someOtherObj);
// obj.method = function() { ... };

// 实现上，__proto__调用的是Object.prototype.__proto__，具体实现如下。

// Object.defineProperty(Object.prototype, '__proto__', {
//   get() {
//     let _thisObj = Object(this);
//     return Object.getPrototypeOf(_thisObj);
//   },
//   set(proto) {
//     if (this === undefined || this === null) {
//       throw new TypeError();
//     }
//     if (!isObject(this)) {
//       return undefined;
//     }
//     if (!isObject(proto)) {
//       return undefined;
//     }
//     let status = Reflect.setPrototypeOf(this, proto);
//     if (!status) {
//       throw new TypeError();
//     }
//   },
// });

// function isObject(value) {
//   return Object(value) === value;
// }
// 如果一个对象本身部署了__proto__属性，该属性的值就是对象的原型。

// Object.getPrototypeOf({ __proto__: null })
// null

// let proto = {};
// let obj = { x: 10 };
// let qqq = {};

// proto.y = 20;
// proto.z = 40;
// Object.setPrototypeOf(obj, proto);
// Object.setPrototypeOf(qqq, obj);
// obj.x // 10
// log(obj.y) // 20
// obj.z // 40
// log(qqq.y,qqq)
// log(proto,obj)

// 该方法与Object.setPrototypeOf方法配套，用于读取一个对象的原型对象。

// function Rectangle() {
  // ...
// }

// const rec = new Rectangle();

// Object.getPrototypeOf(rec) === Rectangle.prototype
// true

// Object.setPrototypeOf(rec, Object.prototype);
// Object.getPrototypeOf(rec) === Rectangle.prototype
// false

// Object.keys
// var obj = { foo: 'bar', baz: 42 };
// Object.keys(obj)
// ["foo", "baz"]

// let {keys, values, entries} = Object;
// let obj = { a: 1, b: 2, c: 3 };

// for (let key of keys(obj)) {
//   console.log(key); // 'a', 'b', 'c'
// }

// for (let value of values(obj)) {
//   console.log(value); // 1, 2, 3
// }

// for (let [key, value] of entries(obj)) {
//   console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
// }

// const obj = { 100: 'a', 2: 'b', 7: 'c' };
// Object.values(obj)
// ["b", "c", "a"]
// Object.values只返回对象自身的可遍历属性。

// const obj = Object.create({}, {p: {value: 42}});
// Object.values(obj) // []

// const obj = Object.create({}, {p:
//     {
//       value: 42,
//       enumerable: true
//     }
// });
//将enumerable属性的值改为true
// log(Object.values(obj)) // [42]

// Object.values会过滤属性名为 Symbol 值的属性。

// Object.values({ [Symbol()]: 123, foo: 'abc' });
// ['abc']

// Object.entries({ [Symbol()]: 123, foo: 'abc' });
// [ [ 'foo', 'abc' ] ]

// let obj = { one: 1, two: 2 };
// for (let [k, v] of Object.entries(obj)) {
//   console.log(
//     `${JSON.stringify(k)}: ${JSON.stringify(v)}`
//   );
// }

// const obj = { foo: 'bar', baz: 42 };
// const map = new Map(Object.entries(obj));
// map // Map { foo: "bar", baz: 42 }

// Generator函数的版本
// function* entries(obj) {
//     for (let key of Object.keys(obj)) {
//         yield [key, obj[key]];
//     }
// }

//     // 非Generator函数的版本
// function entries(obj) {
//     let arr = [];
//     for (let key of Object.keys(obj)) {
//         arr.push([key, obj[key]]);
//     }
//     return arr;
// }

// Object.fromEntries()方法是Object.entries()的逆操作，用于将一个键值对数组转为对象。

// Object.fromEntries([
//   ['foo', 'bar'],
//   ['baz', 42]
// ])
// { foo: "bar", baz: 42 }

// 例一
// const entries = new Map([
//     ['foo', 'bar'],
//     ['baz', 42]
// ]);

// Object.fromEntries(entries)
// { foo: "bar", baz: 42 }

// 例二
// const map = new Map().set('foo', true).set('bar', false);
// Object.fromEntries(map)
// { foo: true, bar: false }
// 该方法的一个用处是配合URLSearchParams对象，将查询字符串转为对象。

// Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'))
// { foo: "bar", baz: "qux" }