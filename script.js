"use strict"


// №1
const user = 'Твое прекрасное имя'; // создана переменная с присвоинным значением
alert(`Приветствую тебя: ${user}`); /*здесь использована функция(или не функция) alert которое выдает диалоговое окно*/

//переменные
let carWidth = 3000;
let carLength = 5000;


/*при использовании конкатенации нужно приложить усилия, чтобы увидеть,
 какая в итоге получится строка, по этому использована интерполяция*/

console.log(`Мерседес с шириной ${carWidth} мм и длиной ${carLength} мм`); 


//МАТЕМАТИЧЕСКИЕ ОПЕРАЦИИ
// 1
let a = 1 + 2 + 3;
alert(a + a);

// 2
let c = 10;
let d = 5;
let result = c + d;

console.log(result);

// 3
let a2 = 1;
let b2 = 2;
let c2 = 3 + b2 + a2;

console.log(c2);

//4
let a3 = 10;
let b3 = 5;
let c3 = a3 - b3;
let d3 = 7;
let result2 = c3 + d3;

console.log(result2);


//Не запуская код, определите, что выведется на экран:

let ba = 5 + 5 * 3;
alert(ba);// ответ 20

let ab = 5 + 5 * 3 + 3;
alert(ab);//ответ 23

let ac = 8 / 2 + 2;
alert(ac); //ответ 6

let ad = 8 + 2 / 2;
alert(ad); // ответ 9

let ae = 8 / 2 * 2;
alert(ae); //ответ 8

let af = 8 * 4 / 2 / 2;
alert(af);// ответ 8

let ag = (2 + 3) * (2 + 3);
alert(ag);// ответ 25

let ah = (2 + 3) * 2 + 3;
alert(ah);//ответ 25

let ak = 2 * (2 + 4 * (3 + 1));
alert(ak);//ответ 36

let al = 2 * 8 / 4;
alert(al);//ответ 4

let am = (2 * 8) / 4;
alert(am);//ответ 4

let an = (2 * 8) / 4;
alert(an);//ответ 4

// N10

let floatA = 1.5;
let floatB = 0.75;
let res = floatA + floatB;

console.log(res);

// N11
let negaA = -100;
console.log(negaA);

let negaB = -500;
console.log(-negaB);

// N12
let per = 13;
let perb = 5;
console.log(per % perb);

// 13
let pop = 2**10;
console.log(pop);

//Не запуская код, определите, что выведется на экран:

/*
let a = 3 * 2 ** 3;
alert(a); ответ 15  

let a = (3 * 2) ** 3;
alert(a); ответ 15

let a = 3 * 2 ** (3 + 1);
alert(a); ответ 625

let a = 2 ** 3 * 3;
alert(a); 64

let a = 3 * 2 ** 3 * 3;
alert(a);
*/

// 14

const name = 'Requ';
console.log(`Меня зовут ${name} я аватар, и когда мир нуждался во мне я пропал`);

// 15
let str = '!!!';
console.log(str);

let java = 'Java';
let script = 'Script';
console.log(java+script);

let hel = 'hello ';
let world = 'world';
console.log(hel+world);

// 16
let hel2 = 'hello '.length;
let world2 = 'world'.length;
console.log(hel2+world2);

// 17
let str1 = 'xxx';
let str2 = 'yyy';
let txt  = `aaa ${str1} bbb ${str2} ccc`;
console.log(txt);

let str4 = `a
            b
            c`;

// 18

let abs;

abs = 13;

console.log(abs);

let abc;

abc = null;

console.log(abc);

let abd;

abd = true;

console.log(abd);

let abi;

abi = false;

console.log(abi);

let abx = 'soul';
let axb = 'society';
console.log(abx*axb);

console.log(10 / 0);
console.log(-10 / 0);

// 19
let num = 39023;
console.log(num);

let num1 = 123;
let num2 = 456;
let num3 = 3278;
console.log(num1, num2, num3);


let azz = '6575';
let aj = lol; //здесь ошибочка(
console.log(azz, aj);


// 20

const PI = 3.14;
const dii = 5;
const ll = PI * dii;
console.log(`Ответ длина окружности ${ll} cm`);


// 21

/*
let a = '5' + '2';
alert(a); 7

let a = '5' + 2;
alert(a); 52

let a = 5 + '2';
alert(a); 52

let a = 5 + 2;
alert(a); 7

let a = '5' * '2';
alert(a); 10

let a = '5' - '2';
alert(a); 3

let a = '5' / '2';
alert(a); 2,5

let a = '5' % '2';
alert(a); 1

let a = '5s' * '2';
alert(a); 5s2

let a = '5s' + '2';
alert(a); 5s2

let a = (-'5') + (-'2');
alert(a); -7

let a = '5' * 1 + '2' * 1;
alert(a); 7

let a = '5' * '1' + '2' * '1';
alert(a); 7

let a = '' + 3 + 1;
alert(a); 'пробел'4

*/


// 22 

let abba = '10';
let baab = '20';

console.log(Number(abba) + Number(baab));

/*
alert( Number('2') + Number('3') ); 5

alert( 2 + Number('3') ); 5

alert( '2' + Number('3') ); ошибка

let a = +'2';
let b = +'3';
alert(a + b); // выведет 5

*/
// 23

let int = parseInt('5px');
let int2 = parseInt('6px');
console.log(int + int2);

let float = parseFloat('5.5px');
let float2 = parseFloat('6.25px');
console.log(float + float2);

/* АЛЬТЕРНАТИВА
let float = parseFloat('5.5px');
let float2 = parseFloat('6.25px');
console.log(float + float2 + 'px');
*/


// 24
let nnn = 65;
let mmm = 76;
console.log(String(nnn) + String(mmm));

let xes = 100;
let y = String(xes);
console.log(y.length);

let xy = 1303;
let yx = 544;
console.log(String(yx).length + String(xy).length);
/**
let xy = 1303;
let yx = 544;
console.log(yx + xy);
 */

// 25

alert(true + 3); // ответ 4

alert(true + true);//2

alert(true - true); //0

alert(true + false);// 1

alert('1' + true); //1true

alert( String(true) + 1 ); // true1

alert( String(true) + Number(true) ); // true1

// 26

/*

let test = Boolean(3);
alert(test); true

let test = Boolean(0);
alert(test); false

let test = Boolean(-1);
alert(test); true

let test = Boolean(-0);
alert(test); false

let test = Boolean(+0);
alert(test); false

let test = Boolean('abc');
alert(test); true

let test = Boolean('');
alert(test); false

let test = Boolean('0');
alert(test); true

let test = Boolean(true);
alert(test); true

let test = Boolean(false);
alert(test); false

let test = Boolean('true');
alert(test); true

let test = Boolean('false');
alert(test); true

let test = Boolean(null);
alert(test) false

let test = Boolean('null');
alert(test); true

let test = Boolean(undefined);
alert(test); false

let test = Boolean('undefined');
alert(test); true

let test = Boolean(NaN);
alert(test);false

let test = Boolean('NaN');
alert(test);true

let test = Boolean(3 * 'abc');
alert(test); false

let test = Boolean(Infinity);
alert(test); true

let test = Boolean(1 / 0);
alert(test); true

 */

// 27
let arr = 'abcde';
console.log(arr[0], arr[2], arr[4]);


let arr2 = 'abcde';
console.log(arr2[4], arr2[3], arr2[2], arr2[1], arr2[0]);

let str9 = 'abcde';
let num9 = 2;
console.log(str9[num9]);

// 28

let str3 = 'abcde';
let last = str3.length - 1;
console.log(str3[last]);

 
//30 

/*
let num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
console.log(num);
*/

//31
 /*
 let num = 10;
num++;
num++;
num--;
alert(num);


let num = 3;
alert(++num); 4


let num = 3;
console.log(num++); 3

let num = 3;
alert(--num);2

let num = 3;
alert(num--);3

let num1 = 3;
let num2 = ++num1;
alert(num1); 4
alert(num2);4


let num1 = 3;
let num2 = num1++;
alert(num1);4
alert(num2);3
 
let num1 = 3;
let num2 = --num1;
alert(num1);2
alert(num2);2
*/

// 36

/**
 alert( 24 * 60 * 60); 86400

 alert( 24 * 30 * 60 * 60); 2592000

  alert( 24 * 365 * 60 * 60); 31536000

  alert(60 * 24); 1440

  alert(60 * 24 * 365);525600


  // 37
  let r = 15
  let s = r / 6.28;  //(6.28 = 2pi)
  console.log(s);


 */



  // 38 
/*
const arr = [1, 5, 6.6, 7];
console.log(arr);
alert(arr)


const arr = ['NoName', 'Rewuz', 'Glazar';
console.log(arr);
alert(arr)
*/

// 39 

/*

const arr = [1, 2, 3];
console.log(arr);

const arr = [1, 2, 3];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);


const arr = [1, 2, 3]; 
console.log(arr[0] + arr[1] + arr[2]);


let arr = ['a', 'b', 'c', 'd'];

console.log(arr);

*/





// 40

/*


let arr = ['a', 'b', 'c', 'd'];

console.log(arr.length);


let arr = [1, 2, 3];
console.log(arr[2]);

*/

// 41

/*

let arr = [1, 2, 3];
arr[0] = 'a';
arr[1] = '-b';
arr[2] = '-c';
console.log(arr);


let arr = ['a', 'b', 'c', 'd'];
arr[0] += 3
arr[1] += 3
arr[2] += 3
arr[3] += 3
console.log(arr)

let arr = [1, 2, 3];
arr[0]++
arr[1]++
arr[2]++
console.log(arr);


*/



// 42

/*

let arr = [];
arr[0] = 1;
и т д.



let arr = [1, 2, 3];
arr[3] = 4;
arr[4] = 5;





*/



// 43 

/*

Узнайте длину следующего массива:

let arr = [];

arr[3] = 'a';
arr[8] = 'b'; длина 9

*/



// 44

/*

let arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr);


let arr = [1, 2, 3];
arr.push(4)
arr.push(5)
console.log(arr)
*/



// 45

/*

let arr = ['a', 'b', 'c'];
let key = 1
console.log(arr[key])


let arr = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;
console.log(arr[key1] + arr[key2]);

*/


// 46

/*


let arr = [1, 2, 3, 4, 5];
delete arr[1];
console.log(arr)

let arr = ['a', 'b', 'c', 'd', 'e'];
delete arr[1];
delete arr[3];

console.log(arr.length); 5


*/


// 47

/*

let arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length]);  undefiend

let arr = [1, 2, 3, 4, 5];
console.log(arr[1] + arr[2] + arr[3] + arr[4] + arr[5]); NaN

let arr = {1, 2, 3, 4, 5};
console.log(arr.length]); error


let arr = [1, 2, 3, 4, 5];
console.log(arr.lenght); ошибка в функции leng"ht"

*/


// 48

/*

const info = {
    o: 'Sunday',
    t: 'Monday',
    th: 'Tuesday',
    f: 'Wednesday',
    fi: 'Thursday',
    s: 'Friday',
    se: 'Saturday',
}

console.log(info);

*/



// 49

/*

const month = {
    1: 'December',
    2: 'Junuary',
    3: 'February',
    4: 'March',
    5: 'April',
    6: 'May',
    7: 'June',
    8: 'July',
    9: 'August',
    10: 'September',
    11: 'October',
    12: 'November'
}

console.log(month)


*/



// 50 

/*

let user = {
    'name': 'OneRuqu',
    'surname': 'BigBaby',
    'patronymic': 'Tape'
}
console.log(user);

*/




// 51

/*

const date = {
    year: 2022,
    month: 12,
    day: 365
}
console.log(date.year)

*/




// 52

/*

let obj = {
	'1a': 1,  //обяз
	'b2': 2,   //не обяз
	'с-с': 3, //обяз
	'd 4': 4, //обяз
	'e5': 5 // не обяз
};
console.log(obj)



let obj = {
	'1a': 1,
	b2: 2,
	'с-с': 3,
	'd 4': 4,
	e5: 5
};

console.log(obj[1a]);
console.log(obj.b2);
console.log(obj[c-c]);
console.log(obj[d 4]);
console.log(obj.e5);
*/  




// 53

/*

let obj = {x: 1, y: 2, z: 3};
obj.x *= 2;
obj.y *= 2;
obj.z *= 2;
console.log(obj)

*/


// 54

/*

let obj = {}
obj.name = 'SansLong';
obj.number = +996557065019;
obj.addres = 'Chu avenu 96b';

console.log(obj)
*/




// 55

/*

const obj = {
    1929: 'тысячи девятьсот двадцать девять',
    3: 'three',
    1: 281207,
    name: 'Mont'
} 
console.log(obj)

*/



// 56

/*

let obj = {x: 1, y: 2, z: 3};
let newObj = obj
console.log(newObj);

*/




// 57

/*


let obj = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj).length);

*/




// 58

/*

let obj = {x: 1, y: 2, z: 3};
let key = 'y';
console.log(obj[key]);

*/




// 59

/*

let obj = {x: 1, y: 2, z: 3};
console.log(obj['x']);  // ошибка исправлена


let obj = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj[key]);  // ошибка исправлена


*/





// 60

/*

let obj = {x: 1, y: 2, z: 3};

let prop = 'x';
console.log(obj[prop]);


let obj = {x: 1, y: 2, z: 3};

let prop = 'x';
console.log(obj[prop]);
*/






// 61

/*

let key = 'x';

let obj = {
	key: 1,
	y: 2,
	z: 3
};

console.log(obj.key);

let obj = {
	key1: 1,
	key2: 2,
	key3: 3
};

let key1 = 'x';
let key2 = 'y';
let key3 = 'z';


console.log(obj.key1 + obj.key2);
*/







// 62

/*

let obj = {x: 1, y: 2, z: 3};

console.log('x' in obj); true
console.log('w' in obj);  false

*/




// 63

/*

let obj = {x: 1, y: 2, z: 3};
delete obj.x;

console.log('x' in obj); false

*/

// 64

/*

Не запуская код, определите, что выведется в консоль:

console.log( typeof {x: 1, y: 2, z: 3} ); object

console.log( typeof {} ); object

let obj = {x: 1, y: 2, z: 3};
console.log( typeof obj ); object

let obj = {x: 1, y: 2, z: 3};
console.log( typeof obj['x'] );  number

*/





// 65

/*

console.log( typeof {x: 1, y: 2, z: 3} );  object

console.log( typeof [1, 2, 3] );  object


let arr = [1, 2, 3];
console.log( typeof arr );  object


let arr = [1, 2, 3];
console.log( typeof arr[0] );     number

let arr = ['1', '2', '3'];
console.log( typeof arr[0] );  string


*/




// 66

/*

console.log( Array.isArray([1, 2, 3]) );  true

console.log( Array.isArray({x: 1, y: 2, z: 3}) ); false

*/




// 67

/*

let test = {x: 1, y: 2, z: 3};
console.log(test);  object

let test = {x: 1, y: 2, z: 3};
console.log(test.x);  примитиввв

let test = [1, 2, 3];
console.log(test);  obj


let test = [1, 2, 3];
console.log(test[1]);  Примитив


let test1 = [1, 2, 3];
let test2 = 1;

console.log(test1); obj


let test1 = [1, 2, 3];
let test2 = 1;

console.log(test1[test2]); num

 Не подсматривая в учебник перечислите все примитивные типы данных в JavaScript.
 str int null undefined symbol boolean bigint

*/






// 68

/*

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
console.log(arr2);  'a'

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
arr2[1] = 'b';

console.log(arr1); a,b 

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
arr2[0] = 'b';

console.log(arr2); b




*/





// 69

/*

const arr = ['a', 'b', 'c'];
arr[1] = '!';
console.log(arr); '!'

const arr = ['a', 'b', 'c'];
arr = [1, 2, 3];
console.log(arr); error

const arr = ['a', 'b', 'c'];
arr = ['a', 'b', 'c'];
console.log(arr); error
*/





// 70

/*

const arr = [1, 2, 3, 4, 5];
const res = arr[1] + arr[2];

console.log(res);  

*/




// 71

/*

let obj = {x: 1, y: 2, z: 3};
console.log(obj.x); 

let obj = {x: 1, y: 2, z: 3};
let key = 'x';

console.log(obj[key]);

let obj = {x: 1, y: 2, z: 3};
let sum = obj.x + obj.y + obj.x;

console.log(sum);


let obj = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj).length);
*/





// 72

/*

ясноооо

*/




// 73

/*

let test = 0;

if (test > 10) {
    console.log('Hallo');
} else {
    console.log('world');
}


let test = 0;

if (test < 10) {
    console.log('rasen')
} else {
    console.log('gun')
}


let test = 0;

if (test >= 10) {
    console.log('Hallo');
} else {
    console.log('world');
}

let test = 0;

if (test <= 10) {
    console.log('rasen')
} else {
    console.log('gun')
}

*/





// 74

/*

let test = 0;

if (test == 10) {
    console.log('chi');
} else {
    console.log('dori');
}

*/




// 75

/*

let test = 0

if (test != 10) {
    console.log('mugen')
} else {
    console.log('cukiemi')
}

*/



// 76

/*

let test = 10000;
let test2 = 3789;

if (test > test2) {
    console.log('mugen')
} else {
    console.log('cukiemi')
}

if (test < test2) {
    console.log('rayton')
} else {
    console.log('makuton')
}
  if (test == test2) {
    console.log('runder')
  } else {
    console.log('hiper')
  }

    if (test != test2) {
    console.log('runder')
  } else {
    console.log('hiper')
  }

*/





// 77

/*

let test = 'abcd';
let test2 = 'dcba'

if (test == test2) {
    console.log('moon')
} else {
    console.log('sun')
}

*/






// 78

/*
let test1 = '123';
let test2 = 123;
// они равны по значению но не по типу

if (test1 == test2) {
    console.log('rider')
} else {
    console.log('mops')
}
*/





// 79

/*

Не запуская код, определите, что выведется в консоль:

let test1 = '3';
let test2 = '3';
		
if (test1 == test2) {
	console.log('+++'); вот этоооо
} else {
	console.log('---');
}


let test1 = '3';
let test2 = '3';
		
if (test1 === test2) {
	console.log('+++'); этооооо
} else {
	console.log('---');
}

let test1 = 3;
let test2 = '3';
		
if (test1 == test2) {
	console.log('+++');
} else {
	console.log('---'); этоооо
}

let test1 = 3;
let test2 = '3';
		
if (test1 === test2) {
	console.log('+++');
} else {
	console.log('---'); э т о
}

let test1 = 3;
let test2 = 3;
		
if (test1 === test2) {
	console.log('+++'); эт о
} else {
	console.log('---');
}
*/






// 80

/*

Не запуская код, определите, что выведется в консоль:

let test1 = '3';
let test2 = '3';
		
if (test1 != test2) {
	console.log('+++');
} else {
	console.log('---');  этооо
}


let test1 = '3';
let test2 = '3';
		
if (test1 !== test2) {
	console.log('+++');
} else {
	console.log('---'); этооо
}


let test1 = 3;
let test2 = '3';
		
if (test1 != test2) {
	console.log('+++');
} else {
	console.log('---'); этооо
}

let test1 = 3;
let test2 = '3';
		
if (test1 !== test2) {
	console.log('+++'); этооо
} else {
	console.log('---');
}


let test1 = 3;
let test2 = 2;
		
if (test1 !== test2) {
	console.log('+++');  этоооо
} else {
	console.log('---');
}
*/





// 81

/*
let num = 3;

if (num > 0 && num <= 20) {
    console.log('+++')
} else {
    console.log('----')  
}

if (num >= 10 && num <= 20) {
    console.log('+++')
} else {
    console.log('---')
}

let num1 = 2;
let num2 = 3;

if (num1 <=  1 && num2 >= 3) {
    console.log('+++')
} else {
    console.log('---')
}
*/






// 82

/*

Не запуская код определите, что выведется в консоль:

let num1 = -10;
let num2 = -10;

if (num1 >= 0 || num2 >= 0) {
	console.log('+++');
} else {
	console.log('---'); ittttt
}

let num1 = 0;
let num2 = 0;

if (num1 >= 0 || num2 >= 0) {
	console.log('+++');
} else {
	console.log('---');
}


let num1 = 0;
let num2 = 5;

if (num1 >= 0 || num2 >= 0) {
	console.log('+++');  itttt
} else {
	console.log('---');
}


let num1 = 5;
let num2 = 5;

if (num1 >= 0 || num2 >= 0) {
	console.log('+++'); itttt
} else {
	console.log('---');
}



let num1 = -5;
let num2 = 15;

if (num1 >= 0 || num2 >= 0) {
	console.log('+++'); iiiiiiittttt
} else {
	console.log('---');
}


let num = 1;

if (num == 0 || num == 1) {
	console.log('+++'); it
} else {
	console.log('---');
}


let num = 2;

if (num == 0 || num == 1) {
	console.log('+++');
} else {
	console.log('---');  etoooo
}


let num = 2;

if (num == 0 || num == 1 || num == 2) {
	console.log('+++');  etooo
} else {
	console.log('---');
}



*/





// 83

/*


let num = 3;

if (num > 0 && num < 5 || num > 10 && num < 20) {
	console.log('+++');
} else {
	console.log('---');
}


if (num == 0 // здесь сравнивается значение num и 0 ||// значение ИЛИ  num > 1 // num больше 1 (факт) &&//И num < 5 // num меньше 5) {
	console.log('+++'); itt
} else {
	console.log('---');
}


*/






// 84

/*

let num1 = 3;
let num2 = 5;

if ( num1 > 0 && (num2 == 3 || num2 == 5) ) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 3;
		
if (num > 5//1 && num < 10 //2|| num == 20//3) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 3;
		
if (num > 5 //1 || num > 0 //2 && num < 3 //3) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 3;
		
if (num == 9 //3 || num > 10 && //1 num < 20 || num > 20 && //2 num < 30) {
	console.log('+++');
} else {
	console.log('---');
}


*/





// 85

/*

if ( !(num1 >= 0 || num2 <= 10)) {
	console.log('+++');
} else {
	console.log('---');
}



*/






// 86

/*

let test = true;

if (test == true) {
	console.log('+++');
} else {
	console.log('---');
}


let test = true;

if (test == false) {
	console.log('+++');
} else {
	console.log('---');
}

Проверьте, что переменная test равна false.

*/






// 87

/*
let test = -0;

if (Boolean(test) == true) {
	console.log('+++');
} else {
	console.log('---');
}

let test = null;
if (Boolean(test) == true) {
	console.log('+++');
} else {
	console.log('---');
}


let test = 1;
		
if (test == true) {
	console.log('+++');  it
} else {
	console.log('---');
}

let test = 0;
		
if (test == true) {
	console.log('+++');
} else {
	console.log('---'); itt
}


let test = 1;
		
if (test == false) {
	console.log('+++'); 
} else {
	console.log('---'); ittt
}


let test = 1;
		
if (test != true) {
	console.log('+++');
} else {
	console.log('---'); itttt
}

let test = '';
		
if (test == false) {
	console.log('+++');  ittt
} else {
	console.log('---');
}

let test;
		
if (test == true) {
	console.log('+++');
} else {
	console.log('---'); ittt
}


let test = 3 * 'a';
		
if (test == true) {
	console.log('+++');
} else {
	console.log('---'); iittt
}


*/






// 88

/*

Перепишите следующий код с использованием сокращенной формы:

let test = true;

if (test === true) {
	console.log('+++');
} else {
	console.log('---');
}


let test = true;

if (test) {
	console.log('+++');
} else {
	console.log('---');
}

*/





// 89

/*

Перепишите следующий код с использованием сокращенной формы:

let test = true;

if (test == false) {
	console.log('+++');
} else {
	console.log('---');
}

let test = true;

if (!test) {
	console.log('+++');
} else {
	console.log('---');
}


let test = true;

if (!test) {
	console.log('+++');
} else {
	console.log('---');
}

let test = true;

if (test) {
	console.log('+++');
} else {
	console.log('---');
}


*/




// 90

/*

let test = 3;

if (test) {
	console.log('+++'); itt
} else {
	console.log('---');
}


let test = 'abc';

if (test) {
	console.log('+++');  ittt
} else {
	console.log('---');
}



let test = '';

if (test) {
	console.log('+++');
} else {
	console.log('---'); ittt
}

let test = 3 * 'abc';

if (test) {
	console.log('+++');
} else {
	console.log('---'); itt
}

let test = null;

if (test) {
	console.log('+++');
} else {
	console.log('---'); itt
}

let test = false;

if (test) {
	console.log('+++');
} else {
	console.log('---'); itt
}

let test;

if (test) {
	console.log('+++');
} else {
	console.log('---'); ittt
}

let test = 0;

if (test) {
	console.log('+++');
} else {
	console.log('---');  itt
}


let test = '0';

if (test) {
	console.log('+++'); iitttt
} else {
	console.log('---');
}


let test = -1;

if (test) {
	console.log('+++'); iittt
} else {
	console.log('---');
}
*/




// 91

/*
let test1 = true;
let test2 = true;

if (test1 && test2) {
	console.log('+++'); itt
} else {
	console.log('---');
}


let test1 = true;
let test2 = true;

if (test1 && !test2) {
	console.log('+++');
} else {
	console.log('---'); it
}

let test1 = true;
let test2 = true;

if (test1 && !test2) {
	console.log('+++');
} else {
	console.log('---');
}


let test1 = true;
let test2 = true;

if (test && test2) {
	console.log('+++');
} else {
	console.log('---');
}

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 && test2 && test3) {
	console.log('+++');
} else {
	console.log('---');
}

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 || test2 && test3) {
	console.log('+++');
} else {
	console.log('---');
}

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 || !test2 && !test3) {
	console.log('+++');
} else {
	console.log('---');
}
*/




// 92

/*
Проверьте, что переменная test равна 10, то пусть на экран выведется 'yes'. В противном случае пусть ничего не произойдет.


let test = 10;

if (test == 10) {
    alert('yes');
}
*/





// 93

/*
let test = 3;

if (test > 0) 
	console.log('+++');
 else 
	console.log('---');


if (test > 0) 
	console.log('+++');


*/




// 94

/*

let day = 3;

if (day >= 1 && day <= 11) {
    console.log('first');
} else if (day >= 11 && day <= 21) {
    console.log('second');
} else if (day >= 21 && day <= 31) {
    console.log('3');
} else {
    console.log('error');
}

*/

// 95

/*

let num = 77;

if (num >= 10 && num <= 99) {
    console.log('сумма цифр двухзначна')
} else {
    console.log('сумма цифр однозначна')
}

*/



// 96

/*
let lang = 'ru';

switch (lang) {
    case 'ru':
        console.log('rus')
    break;
    case 'en':
        console.log('eng')
    break;
    case 'ne':
        console.log('nem')
    break;
    default:
        console.log('i dont know')
    break;    
}
*/


// 97

/*

let num = 1;
let res;

if (num == 1 || num == 2) {
	res = 'a';
}

if (num == 3) {
	res = 'b';
}

console.log(res);

*/


// 98

/*

Перепишите следующий код через тернарный оператор:

let num = 1;
let res;

if (num >= 0) {
	res = '1';
} else {
	res = '2';
}

console.log(res);

let num = 1;
let res = num >= 0 ? '1': '2';

console.log(res);


let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult);

let age = 17;
let adult = age >= 14 ? true: false;

console.log(adult);

*/



// 99

/*

let a = 2 * (3 - 1);
let b = 6 - 2;

console.log(a == b);  true

let a = 5 * (7 - 4);
let b = 1 + 2 + 7;

console.log(a > b); true

let a = 2 ** 4;
let b = 4 ** 2;

console.log(a != b); false

*/



// 100

/*

Спросите у пользователя, есть ли ему уже 18 лет. Если есть -
выведите на экран алерт с текстом для взрослых, а если нет,
выведите сообщение о том, что доступ пользователю запрещен.

let q = confirm('Вам есть 18 лет?')

if (q) {
	alert('как 21 будет приходи')
} else {
	alert('Пошел вон маленький извр')
}

*/



// 101

/*

let age = 17;
let adult

if (age <= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult);

*/



// 102

/*

let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult);



let age = 17;
let res;

if (age >= 18) {
	if (age <= 23) {
		res = 'от 18 до 23';
	} else {
		res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}

console.log(res);


let age = 19;
let res;

if (age >= 18) {
	let res;
	
	if (age <= 23) {
		res = 'от 18 до 23';
	} else {
		res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}

console.log(res);


let age = 19;
let res;

if (age >= 18) {
	if (age <= 23) {
		res = 'от 18 до 23';
	} else {
		res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}

console.log(res);

*/

// 103

/*

let min = 59;

if (min >= 0 && min <= 14) {
	console.log('1 четверть');
}

if (min >= 15 && min <= 29) {
	console.log('2 четверть');
}

if (min >= 30 && min <= 44) {
	console.log('3 четверть');
}

if (min >= 45 && min <= 59) {
	console.log('4 четверть');
}


Решите аналогичную задачу, только определите в какую треть часа попадает указанное количество минут.

let min = 59;

if (min >= 0 && min <= 19) {
	console.log('1 четверть');
}

if (min >= 20 && min <= 39) {
	console.log('2 четверть');
}

if (min >= 40 && min <= 60) {
	console.log('3 четверть');
}

*/


// 104

/*

В переменной arr содержится некоторый массив с числами. Напишите условие, которое проверит, что в массиве 3 элемента.
Если это так, выведите на экран сумму элементов массива.


let arr = [1, 2, 3, 4, 5, 6]

if (arr.length > 3) {
	console.log(arr[0] + arr[1] + arr[2])
} else {
	console.log('sorry')
}


*/

// 105

/*

let str = 'popstar';

if (str[0] == 'a') {
	console.log('vottt')
} else {
	console.log('not')
}


let str = 'popstar';

if (str[6] == 'x') {
	console.log('vottt')
} else {
	console.log('not')
}

let str = 'popstar';

if (str[0] == 'a' || str[0] == 'b') {
	console.log('vottt')
} else {
	console.log('not')
}

*/



// 106

/*

let int = 3829423;

if (String(int)[6] == 0) {
	console.log('yesssssss')
} else {
	console.log('nnnooooot')
}


let num = 72893;

if () {
	
}

*/


// 107

/*

*/



// 108

/*

*/



// 109

/*

*/



// 94

/*

*/


// 94

/*

*/


// 94

/*

*/

// 94

/*

*/

// 94

/*

*/


