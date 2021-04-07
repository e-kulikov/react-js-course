const lambda = (...fns) => initialArg =>
  fns.reduceRight((prev, fn) => fn(prev), initialArg);

const add1 = x => x + 1;
const multiply3 = x => x * 3;
const pow4 = x => x ** 4;

console.log(lambda(multiply3, pow4, add1)(1));
