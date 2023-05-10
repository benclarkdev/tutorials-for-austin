# Comments
Comments are REALLY useful. I actually got my current job because I used them thoroughly in the code test my company sent me.

You can comment one line in javascript by starting the line `//`.

You can comment multiple lines in javascript by starting the excerpt `/*` and ending it `*/`.

Comments are especially useful if you're doing something unintuitive, but I like to comment as though a person with no coding experience is going to read them.

One benefit is that if you're working alone, you can come back to something you haven't seen in a long time and know instantly what's going on.

`// Strip the array of invalid inputs`

Another thing you can do is set reminders for yourself to clean things up later:

`// TODO: Clean this up later.`

Marking them uniformly like "TODO" makes them easy to find later.

## JSDoc Comments

Javascript has this standard comment format called JSDoc which vscode is actually smart enough to interpret. Let's say you wanted to comment on the calculator functions we did in 1-2:

calculator.js:
```
/**
 * Adds two numbers together.
 * @param {number} number1 - the first number
 * @param {number} number2 - the second number
 * returns {number} - the sum of the numbers.
function add(number1, number2){
  return number1 + number2;
}
```

Now, if you were using `add` in some other file, you could hover over `add(1,3);` in your code and it _should_ show the explanation comment in a nicely formatted way.