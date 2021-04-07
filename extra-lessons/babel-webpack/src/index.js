import { compose } from './modules/compose';
import { add1 } from './modules/add1';
import { pow4 } from './modules/pow4';
import { multiply3 } from './modules/multiply3';

console.log(compose(multiply3, pow4, add1)(1));
