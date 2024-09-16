function counter(){
    let count=1;
    function add(){
        console.log(count++);
    }
    return add;
}
let add1=counter();
add1();
add1();
add1();

function sum(a){
    return function (b){
        return function(c){
            return a+b+c;
        }
    }
}
let sums=sum(10)(2)(3);
console.log(sums);