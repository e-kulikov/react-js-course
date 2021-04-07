export const compose = (...fns) => initialArg =>
  fns.reduceRight((prev, fn) => fn(prev), initialArg);
