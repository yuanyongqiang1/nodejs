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
