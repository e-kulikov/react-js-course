import { compose } from './modules/compose';
import { add1 } from './modules/add1';
import { pow4 } from './modules/pow4';
import { multiply3 } from './modules/multiply3';

console.log('result using compose function', compose(multiply3, pow4, add1)(1));

// То же самое, используя pipeline operator
console.log('result using pipeline operator', 1 |> add1 |> pow4 |> multiply3);
