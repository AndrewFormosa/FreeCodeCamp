let hello = "              1   Hello, World!           ";
let wsRegex = /((^\s+)|(\s+$))/g; // Change this line
let result = hello.match(wsRegex); // Change this line
let newOne=hello.replace(wsRegex,"");
console.log(result);
console.log(newOne);
