console.log('apply() method in Js');

const person={
    fullname:function(city){
        console.log(this.firstname+" "+this.lastname+" "+city);
    }
}

const person1={
    firstname:"Dipali",
    lastname:"lalu"
}

person.fullname.apply(person1,['jnd']);

let a=Math.max.apply(null,[1,2,3,4,5]);
console.log(a);

