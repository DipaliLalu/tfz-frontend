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
add1();