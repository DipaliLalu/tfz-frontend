console.log('Type Conversion in Js');

//Converting string to Number
console.log("convert '3.14' in number", Number('3.14'));
console.log("convert '99 88' in number", Number('99 88'));
console.log("convert ' ' in number", Number(' '));
console.log("convert 'hello' in number", Number('hello'));
console.log("convert null in number", Number(null));
console.log("convert undefined in number", Number(undefined));

let a = 'demo';
console.log('use a parseInt() method:', parseInt(a));
console.log('use a parseFloat() method:', parseFloat(a));

//use a unary + operator
let y = "5";
let x = + y;
console.log('type of x:', typeof x);

let demo = 'hello';
let d = + demo;
let c = Number(demo);
console.log('type of c:', typeof c);
console.log('type of d:', typeof d);

//converting number to string
let xyz=5;
console.log('converting number(xyz) to string:',String(xyz)+ ' ,find the type of xyz:',typeof xyz);
console.log('converting number(50+20) to string:',String(50+20)+ ' ,find the type of 50+20:',typeof String(50+20));
console.log("use the toString() method",xyz.toString());

//Converting Booleans to Numbers
console.log('convert true to number:',Number(true));
console.log('convert false to number:',Number(false));

// Converting Booleans to Strings
console.log('convert true to string:',String(true));
console.log('convert false to string:',String(false));


