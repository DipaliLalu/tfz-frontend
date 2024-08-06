console.log('Optional chaining');

let object={
    name:"xyz",
    city:'jnd',
    state :function(){
        return this.name;
    },
    cat:{
        name:"jimi",
    }
}
object.state();
console.log(object.state());



