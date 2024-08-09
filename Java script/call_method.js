const person={
    firstname:"dipali",
    lastname:"lalu",
    fullname:function(city){
        console.log(this.firstname+" "+this.lastname+" "+city);
    }
}
person.fullname("jnd");

const person2={
    firstname:"arati",
    lastname:"xyz"
}

person.fullname.call(person2,"rajkot");

