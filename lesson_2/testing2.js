let foo = function () {
  return function bar() {};
};

console.log(foo ());