import './styles/index.scss';

import getClasses from './getClasses';

console.log("index.js ran flawlessly");

getClasses();

const derp = { a: 'alpha', b: 'bravo' };
const derpPart2 = { ...derp, c: 'charlie' };
console.log({ derpPart2 });
console.log("FOOO BAR");

