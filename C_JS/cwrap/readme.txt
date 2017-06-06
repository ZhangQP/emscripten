cwrap() wraps a compiled C function and returns a JS function that can be called normally.

open 'cwrap.html' in firefox
console call and use the function



int_sqrt = Module.cwrap('int_sqrt', 'number' , ['number'])

int_sqrt(12)

int_sqrt(28)



or



var result = Module.ccall('int_sqrt','number',['number'],[28]);

console.log(result);
