var a=10;
let b=20;
const c=30;
console.log(a);
console.log(b);
console.log(c);
{
    var x=40;//global
    let y=50; //local
    const z=60; //local
    console.log("Inside local");
    console.log(y);
    console.log(z);

}
console.log("Outside local");
console.log(x);

function print()
{
    console.log("Inside Function");
    var a=200;
    let b=300;
    const c=500;
    var m=60;
    console.log(a);
    console.log(b);
    console.log(c);
}
print();

console.log("Using var ");
for(var i=1;i<=5;i++)
{
    console.log(i);   
}
console.log(i);

console.log("Using let ");
for(let j=1;j<=5;j++)
{
    console.log(j);   
}
// console.log(j); can not access

console.log("Using const");
for(const k=1;k<=5;k++)
{
    console.log(k);   //Print only one Value and give TypeError
}


