console.log('regular expression');

let str="hello everyone, how are you";
let regExp=/..o./ig;
let result=str.match(regExp);
result.forEach((value)=>{
    console.log(value);   
});

let str2="visit our company";
let regExp2=/company/i;
let r=str2.replace(regExp2,"Microsoft");
console.log(str2);
console.log(r);

let str3="abc is nice!";
let regExp3=/[abc]/m;
let r2=str3.match(regExp3);
console.log(r2);

let text = "re, green, red, green, gren, gr, blue, yellow";
let result3 = text.match(/(red|green)/g);
console.log(result3);

