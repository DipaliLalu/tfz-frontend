console.log('bind() method in js');

const demo={
    x:42,
    getX:function () {
        return this.x;
    },
};
const getX=demo.getX;
console.log(getX());

const x=getX.bind(demo);
console.log('value of x:',x());

