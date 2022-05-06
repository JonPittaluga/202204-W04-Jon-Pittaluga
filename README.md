# WEEK 4 CHALLENGE / DAN ABRAMOV'S MENTAL MODELS PRACTICE

1. Goals of the challenge
2. Requirements
3. Restrictions

# Goals of the challenge

This week we've been focused on understanding Dan Abramov's JS mental model, which will help us to understand what's going on in JS and be able to become better developers, specially when the code complexity grows.

The exercise is about strict equality and we have to demonstrate the acquired knowledge through the code.

# Requirements

## Definition

write a function called `strictEquals(a,b)` that returns the same value as `a === b`.

Your implementation must not use the `===` or `!==` operators.

Given the `strictEquals` function when `a` and `b` are compared the result will be `<result>`

```
  a        b       result
  -----------------------
  1        1       true
  NaN      NaN     false  // Rule exception
  0        -0      true   // Rule exception
  -0       0       true   // Rule exception
  1        '1'     false
  true     false   false
  false    false   true
  'water'  'oil'   false
  ----------------------
```

## Other requirements

- [x] Use eslint
- [x] Use ES6 modules
  - [x] Import strictEquals.js file to app.js
- [x] HTML is optional (I'll use it to test module import with ES6 modules)
- Add some sort of testing to validate that all the cases described above pass the test
