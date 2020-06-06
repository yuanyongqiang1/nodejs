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