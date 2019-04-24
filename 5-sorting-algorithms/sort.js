/**
 * Sort an array
 */

const ascendingComparision = (a, b) => a - b;
const descendingComparision = (a, b) => b - a;

console.log([6, 4, 8, 15, 10].sort(ascendingComparision));
console.log([6, 4, 8, 15, 10].sort(descendingComparision));
