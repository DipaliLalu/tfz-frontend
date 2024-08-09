console.log('Nullish Operator');

const a=null ?? 'detault string';
console.log('the value of a:',a);

let b=undefined ?? null;
console.log('the value of b:',b);

let c=null ?? undefined;
console.log('the value of c:',c);

const d='detault string' ?? null;
console.log('the value of a:',d);

let e=(null || undefined) ?? "foo"; 
console.log('the value of e:',e);

let f='hello' ?? 'hi';
console.log('the value of f:',f);



