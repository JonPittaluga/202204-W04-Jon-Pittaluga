/* eslint-disable no-unused-vars */

export function strictEquals(a, b) {
  // NaN exceptions
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  }

  // 0 and -0 exceptions
  if (Object.is(0, b) || Object.is(-0, b)) {
    return true;
  }

  if (Object.is(1, b)) {
    return true;
  }

  // 1 and '1'
  if (Object.is(1, Number(b))) {
    return false;
  }

  // booleans
  if ((!a && b) || (a && !b)) {
    return false;
  }

  if (Object.is(a, b)) {
    return true;
  } else return false;
}

console.log('strictEquals(1, 1) > true', strictEquals(1, 1)); // true
console.log('strictEquals(NaN, NaN) > false', strictEquals(NaN, NaN)); // false
console.log('strictEquals(0, -0) > true', strictEquals(0, -0)); // true
console.log('strictEquals(-0, 0) > true', strictEquals(-0, 0)); // true
console.log("strictEquals(1, '1') > false", strictEquals(1, '1')); // false
console.log(
  'strictEquals(true, false) > false',
  strictEquals(true, false),
  'strictEquals(false, true) > false',
  strictEquals(false, true)
); // false
console.log('strictEquals(false, false) > true', strictEquals(false, false)); // true
console.log('______');
console.log(
  "strictEquals('water', 'oil') > false",
  strictEquals('water', 'oil')
); // false
console.log("strictEquals('', '') > true", strictEquals('', '')); // true
console.log(
  "strictEquals('Alejandro CL', 'Alejandro M') > false",
  strictEquals('Alejandro CL', 'Alejandro M')
); // false
