var obj = { };
var arr = [ ];
var fun = function () { };

typeof obj // "object"
typeof arr // "object"
typeof fun // "function"
typeof null // "object"

arr instanceof Object // true
arr instanceof Array // true
fun instanceof Object // true
fun instanceof Function // true
