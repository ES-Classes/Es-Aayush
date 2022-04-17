function printHello(name)
{
console.log(`Hello! ${name}`);
}
let printHello = function (name)
{
console.log(`Hello! ${name}`);
}

 function formatName(firstName,lastName)
{
return `${lastName},${firstName}`;
} 


//Arrow function
let x = (name) => `hello! ${name}`;
let formatName = (firstName, lastName)=> `hello ${lastName},${firstName}`;

function factorialize(num) {
  if (num === 0 || num === 1)
  return 1;
for (var i = num - 1; i >= 1; i--) {
  num *= i;
}
return num;
}
factorialize(5);

let fact= (n)=>n<2 ? 1: n* fact(n-1);

printHello('Aayush');
let fullName=formatName('Aayush','Timalsina')
console.log(fullName);