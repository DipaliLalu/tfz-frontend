console.log('Optional chaining');

let object={
    name:"xyz",
    city:'jnd',
    state :function(){
        return this.name;
    },
    cat:{
        name:"jimi",
        color:null,
    }
}

console.log('state is',object.state());
console.log('cat name is:',object.cat?.name);
console.log('dog name is:',object.dog?.name);
console.log('state is',object.states?.());
console.log('cat color:',object.cat?.color);


let arr=[1,2,3,4,5];
console.log(arr[20]);




