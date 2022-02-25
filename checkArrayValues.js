/* Checks if at least one element of values is included in arr. */
const includesAny = (arr, values) => values.some(v => arr.includes(v));
/* Checks if all the elements in values are included in arr. */
const includesAll = (arr, values) => values.every(v => arr.includes(v));
/* Checks if all elements in an array are equal. */
const allEqual = arr => arr.every(val => val === arr[0]);

/* Example Outputs: */
includesAny([1, 2, 3, 4], [2, 9]); // true
includesAny([1, 2, 3, 4], [8, 9]); // false

includesAll([1, 2, 3, 4], [1, 4]); // true
includesAll([1, 2, 3, 4], [1, 5]); // false

allEqual([1, 1, 1, 1]); // true
allEqual([1, 2, 3, 4, 5, 6]); // false
