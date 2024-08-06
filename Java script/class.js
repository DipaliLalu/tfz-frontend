class animal{
    constructor(name){
        this.name=name;
    }
    get getName(){
        return this.name;
    }
    set setName(name){
        this.name=name;
    }
    static hello(x){
        return console.log("hello! "+x.name);
    }
}
class dog extends animal{
    constructor(name) {
        super(name);
    }
    color(){
        console.log(this.name+"'s color is black.");
    }
}

let a=new animal("cat");
animal.hello(a);
console.log('a is:',a);
console.log('get() method:',a.getName);
a.name='lion';
console.log('get() method:',a.getName);

let d=new dog('pulto');
d.name='jimi';
d.color();

console.log('d is instanceof animal:',d instanceof animal);
console.log('a is instanceof animal:',a instanceof animal);
console.log('d is instanceof dog:',d instanceof dog);
console.log('dog is instanceof dog:',dog instanceof dog);

