// normal function
function add(x,y){
    console.log('normal function');
    console.log(arguments);
    return x+y;
}
add(10,20);
// console.log('add number: ',add(10,20));
const adds=(x,y)=>{
    console.log('arrow function');
    console.log(arguments);
    return x+y;
}
// adds(20,20);
// console.log('arrow function add value:',adds(20,20));

const person={
    name:'Dipali',
    age:20,
    fullName:function(){
        return this.name;
    }
}
console.log('person name is : ',person.fullName());
const person2={
    name:'Dipali',
    age:20,
    fullName:()=>{
        return this.name;
    }
}
console.log('person name is : ',person2.fullName());

function Human(name, age) {
    this.name = name;
    this.age = age;
  }

  const d = new Human('d', 21);
  console.log(d.name); 

  const Person = (name, age) => {
    this.name = name;
    this.age = age;
  }
      
  const a = new Person('d', 21); // Error!
  console.log(a);

