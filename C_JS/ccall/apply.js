var em_module = require ('./test.js');

em_module._sayHi();
em_module.ccall("sayHi");
console.log(em_module._daysInweek());