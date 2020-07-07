let obj = {
  a: { hey: 3},
  b: { hello: 4}
};

obj["a"].hey = 5;
obj["b"]['hello'] = 3;

console.log(obj);