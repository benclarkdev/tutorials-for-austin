# How Websites Are Structured
Websites generally contain three elements:

1. HTML
*What's on the page*
HTML stands for HyperText Markup Language.

2. CSS
*How the page looks*
CSS stands for Cascading StyleSheets.

3. JS
*What the page does*
JS stands for JavaScript. 

# What That Looks Like
1. HTML looks like this: 

`<header><span>Weather</span></header>`

"Markup Language" to my knowledge means that you (the writer) are "marking up" text. There are multiple languages that are used for markup. 

This page is actually written in Markdown, believe it or not, which is actually a markup language. I hate that. It's cute once you learn what they're doing, but it isn't worth it in my opinion. If you'd like to learn Markdown, read their [documentation](https://www.markdownguide.org/cheat-sheet/), but that's not important now.

It is pretty safe to think of code as "instructions for a computer". Computers are actually quite dumb until you give them instructions, which usually become applications. 

Almost all languages (to my knowledge) can be translated into this sentence:

> If __________________, then __________________.

To my knowledge, this binary code -- `10100101` -- is the same as saying `on off on off off on off on`. Applications that relied on binary use that to make decisions. I am not sure if it's a thing anymore.

Anyway, your web browser (Chrome, Firefox, Safari) is a set of instructions that interpret the HTML on websites and when it's reading that sample above earlier, it basically reads this:

1. This is the start of the `header` section of the page.
2. Inside of that, there's a span of text. Span means line, basically.
3. The line of text says "Weather".
4. That's all the line of text says.
5. The header only contains that.

And having read that, it makes a series of decisions which essentially amount to this:

1. Show a header for a webpage, using completely unstyled. More on style in CSS.
2. Inside of that, show a completely unstyled line of text that says "Weather".

So, to break that down further, it does that because its instructions (the code) say "Read this file and if part of it says, `<whatever>`, that's the start of a `<whatever>` element. The things that start and end `<>` that are called carets.

Then it has other instructions that say, "If the name of that HTML element is `header`, look for CSS that modifies how that looks."

We haven't provided any yet, but we will soon.

Then it has other instructions that say "If the page and the user has not made any other configurations, this is what a default header looks like."

And that's what you see.

Just like HTML has markups for headers and lines of text, there is also HTML for:
- footers and other sections of the page
- paragraphs of text 

Those are pretty easy to wrap your head around. Here are some more advanced ones:
- images
- links

Both of those are more complex because they have to inform the browser where to find the image or where to point the user when they click the link. 

And then these are just as complicated:
- references to css
- references to javascript

We'll get to what that does in a second, but the important thing is that HTML comes with CSS and JS and these references allow that to happen. Just like pictures and links have to inform the browser of their own special info, references to css and javascript have to inform the browser of where to find the imported files.

Importing separate files is a really important part of learning any language. I'll write a lesson on that on it's own. There are some cool abstract ideas I like a lot. 

Markup processors (like web browsers or the thing that converts this `markdown` file to HTML when you view it on Gitlab), in general all do the same thing, with a different language.

2. CSS 

CSS is cool but honestly, I find it kind of annoying. For me, it is a lot of guesswork. Make sure you're studying css regularly as we go. Most of our focus will be HTML (probably 5%) and JS (probably 95%). 

Given that I'm no expert in css and I have been successful as a dev, css is the least important skill to perfect between the three. HTML is the easiet. Javascript is the most important.

CSS looks like this. `header { font-size: 12px; }`

That says, "Inside the header, fonts will be 12px tall." 

So, now that we've added that, the web browser gets to this step:

> Then it has other instructions that say, "If the name of that HTML element is `header`, look for CSS that modifies how that looks."

Now, when it looks for CSS that modifies how the `<header>` looks, it will have code that modifies the font-size to `12px`. 

It then takes that rule, overwrite the font-size that's set by default in the application configuration. (The same thing you edit in the `Settings` menu of your browser).

And that's what you see.

3. JS 
Great news, you're already started. The syntax for the javascript is a little intimidating, so I'll just discuss it conceptually.

Here are the probably the most common examples of javascript on webpages:

1. If this page is loading, show a loading message, but hide it when it's done loading.
2. When the page is finished loading, start a call to some other website to get some information we'll use. When it returns, display it on the page.
3. When I click the "Order" button, submit the form to the "make an order" API for this restaurant.
4. When I click the "Menu" icon, show the menu. If I click it again, hiding.

That's all you need for a simple website.