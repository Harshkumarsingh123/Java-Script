
{
    a=20; //Autoglobal Variable
    console.log("Inside Block");
    console.log(a); 
}
console.log("Outside Block");
console.log(a);

task();
function task()
{
    var c=100;
    b=50;
    console.log("Inside function");
    console.log(a); 
    console.log(b); 
}
console.log("Outside function");
console.log(b);
for(i=1;i<=5;i++)
{
    console.log(i);
}
console.log(i);

