# Where to start
This lesson, you can look at `calculator.js` first, then the other two `.js` files.

# What is going on
This shows that you can import javascript from one file to the next. This provides a really important advantage in staying organized. Staying organized is probably the most important part of working on a team.

It would be a nightmare if your javascript had to be monolithic, which means "in one big ass file". When your javascript fails, you will get an error message as to where it failed. This is called the stack trace. 

Stack traces are much more useful when you separate your files because it shows you exactly which part of your code is failing rather than just a line number.

If you break your code into `domain`, your code is much easier to debug in the short term and in the long term, it is easier to maintain. 

If you did not break your code up, both `payroll.js` and `taxes.js` would have their own calculators that you'd have to maintain. That could lead to inconsistency really quickly.

The underlying principle we are moving towards here is the `Single Responsibility Principle` or the `Separation of Concerns`.

We are doing two things to separate concerns: 

1. We are making a payroll app that will offer functions used to calculate payroll in `payroll.js` and to calculate taxes in `taxes.js`. Taxes and payrolls are `domains`. 

2. We are centralizing all of the calculation in `calculator.js`.