(function () {
  // this is the global object, in the browser the window object
})();

new (function () {
  // this is a new object
})();

(function () {
  // this is 42
}).bind(42)()

"use strict";
(function () {
  // this is undefined since strict mode is now enabled
})();
