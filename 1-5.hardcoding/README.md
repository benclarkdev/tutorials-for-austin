# What is hardcoding?

Hardcoding is generally a bad practice that you'll start out doing a lot and then move away from. This is hardcoding:

`add(8,4);`
`call(9378642899);`

You've seen this and done this a lot by now.

Calling a function with a hardcoded values is hard to maintain. 

Imagine that you are working for a company that has like 1000 javascript files that make up their app. It is tedious to debug hardcoded values.

One easy way to get away from that is to store your hardcoded values in a configuration file or in constants. For instance:

`const PHONE_NUMBER_MAIN = 9378642899;`
`call(PHONE_NUMBER_MAIN);`.

`const` is a keyword like `var` or `let`. You use it for variables that will never change. `var` and `let` allow you to overwrite values but `const` can only be set once.

You would do well here to have a file with all of your configuration values and import that using the same stuff from 1-2.

Anyway, if you move your code to lean more heavily on configuration, your code can be more maintainable. In general, you want to write apps that rely on `configuration over customization`. 

If you write your application to rely on configuration, you only have to change your variables in one place. So, in the app in line 16-17, we could change that phone number to suit the needs of some other business, allowing us to quickly spin up a solution we could sell to someone without much extra effort.

If you favored hardcoding and the other company approached you, you would have to maintain two applications rather than extending your current application.

Extending an application looks like this: 

Let's say we wrote an app that calculated payroll and then called the company to inform them of their payroll. Stupid app, but hear me out.

If we wrote it to rely on a configuration file, you could give it to two businesses, help them configure their apps.

Later, if you wanted to do some complicated calculation that required square roots, you would do well to add a `sqrt(number)` function to your calculator and leverage that in your `payroll.js`. 

You could do that an publish it and both companies apps would keep working.

If you didn't use a configuration and instead relied on hardcoded values, you would have to maintain two different applications, which means you would have to add `sqrt(number)` to calculators in two different repositories. This has enormous business costs in the SDLC (covered in 1-6).