console.log('bind() method in js');

const person1 = {
    name: 'Dipali',
    greet: function (greeting) {
        console.log(`${greeting}, I'm ${this.name}.`);
    },
};

const person2 = {
    name: 'Benu',
};

const greet = person1.greet.bind(person2, 'Hi');
greet();
console.log(typeof greet);

const obj = {
    a: "hi",
    b: "hello",
    c: "how are u"
}
for (const key in obj) {
    console.log("key: ", key);
}
for (const value of Object.values(obj)) {
    console.log("value are: ", value);
}
const array=['cat','dog',2,1,4,3];
for (const key in array) {
    console.log("key: ", key);
}
for (const value of array) {
    console.log("value are: ", value);
}
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}

 
