# What is an SDLC?
`SDLC` stands for Software Development Lifecycle. In short, it's "the process through which we generate software, as a company."

There's a glossary in the bottom of this page, in the case that you see something you don't recognize. Agile has a lot of terms. It's hard to really master, but the idea is that you are going to continuously improve both on your software and on your process. This will take a lot of time for you to really peg, so it is good you are starting early.

# The Waterfall SDLC
`Waterfall` used to be all the rage and it was terrible. It basically worked like this.

1. The business approached the developer. They designed a whole application.
2. The developer wrote the application for like 9 months.
3. They met again and looked at the application. 

This was TERRIBLE. Huge waste of money. Generally, designing an application is an ambiguous process and the meeting in `step 1` barely set up the developer for success in creating an application that the business actually wanted.

The problem here is that the adjustments in the application in `step 3` were reported en masse. The developer made choices two weeks into the dev process that made the whole application work in a way that was wrong. Realistically, the developer might very well have made irreversible architectural decisions that made it so it took another 9 months to fix everything identified in step 3.

Another problem? It's really hard to say "this will take 9 months" accurately.

# The Agile SDLC (excellent)
So, they invented `agile`. Agile is built on this concept called the `MVP` or `minimum viable product`.

In agile, you break that 9 month dev process up into segments called `sprints`. They are usually two weeks long. In a `sprint`, you work towards developing the minimum version of whatever functionality you're going after in the short term. This is called `iterative development`.

Let's say that we wanted to develop a `plain HTML` payroll calculator. 

The first step we would do would be to create tasks for everything we want to do. When we create tasks, we want them to be `granular`. 

- Create a repository on Github.
- Setup basic hosting at `www.payroll-calculator.com`.
- Setup Amazon Web Services to pull from the github repository.
- Create a stylesheet.
- Create a plain HTML page.
- Create a javascript file for calculation.
- Add the javascript to the HTML page.
- Add the stylesheet to the HTML page.
- Add an input to the HTML page so users can input workers, their pay rates, and their hours logged.
- Style those inputs so that it looks good.
- Create the javascript that makes the worker input work.
- Create an input for tax rate information.
- Style that.
- Add javascript so that users can customize tax rate information.

As you can see, even for our simple app, this really can take off. Great news, though, agile is all about biting off small chunks. 

This set of work is called the `backlog`. It is the body of tasks that we agree we `should` do, but haven't got to yet.

Generally, you create tasks as you identify work that needs done. Your business analyst or project manager often creates tasks for things your client or business want. Your QA person creates tasks for quality assurance. You would create tasks mostly for technical debt and other issues you identify while coding. More on team roles in `1-7` and tech debt in `1-8`.

## Refinement 
Now that we have a `backlog`, we can go to `Refinement`. In refinement, you basically make sure everyone understands what each task requires.

`Style those inputs so that it looks good` is really terrible.

After refining that, you would probably end up with something like this:

`Style the inputs so they match the spec`. `Spec` has two meanings. In this case, it means "what the designer drew".

In agile, we really like `granular tasks`. Don't get too granular, though. This bit:

- Add an input to the HTML page so users can input workers, their pay rates, and their hours logged.
- Style those inputs so that it looks good.
- Create the javascript that makes the worker input work.

I would just create one tasks for that. It would actually be hard for a developer to write the HTML and another one to write the JS and another to write the CSS. They'd have to talk a lot or write tasks so clearly that they might as well be code. It's better for one developer to just knock this out so that the others could focus on other chunks of work.

So, in refinement, you break all of those tasks into chunks. You make sure the `user story` is clear and the `acceptance criteria` is clear. You would also add a point value to the task, if your team uses velocity (not very important, but see glossary).

You also sort the tasks by value. Which ones are most valuable first? Do those first. Which ones have the biggest value/effort ratio? Do those too. Which ones need to precede the others? Do those.

All of this is usually taken care of in some application. JIRA is the most common. It has some competitors.

# Sprint Planning
Now that you have a backlog that is refined and sorted by priority, you can start pulling stuff into the sprint. The goal is to try to pull in the amount of work that you can safely and thoroughly get done in the sprint, making sure that everyone's busy but not too busy.

Then, you go to work.

# Standup
Every day, you typically start out with standup. It's a meeting where you're just supposed to show up and briefly update everyone on what you're doing and if you need anything. It should take about 15 minutes. They call it a standup because you are not supposed to sit down. That would encourage taking too much time.

-- People love bullshit like that. I honestly think that I'm an adult and I've been uncomfortable long enough.

You do that every day, then you close with a retrospective.

#### Retrospective ("Retro")
In retrospective, you go over how the sprint went. You highlight the challenges you faced and you can talk openly about things that you would like your team to improve upon.

Some companies bring in the business people for retros so you can show them what you did. I find that valueless.

I also find business people valueless, lol. You'll see what I mean.

## Glossary

### User Stories

User stories make it easy to understand *why* you are doing something. They look like this:

`As a ______, I want ______, so that ______`.

Some examples make it easy:

`As a driver, I want left and right turn signals, so that other people know when I'm turning`

`As a piano player, I want my piano tuned, so that it sounds better`

More specific to our payroll app:

`As a payroll user, I want to calculate payroll tax, so that our business remains legal`.

`As an administrator, I want to be able to manage access to configuration, so that my application is secure at scale`.

A lot of people fall into the trap of starting `As a user` but it's important to recognize that your application will have more than one user type. 

The `so that` part is useful because it shows the developer that what they are doing is important and because it shows business people that some tasks are unintuitively valuable. For example:

`As a developer, I want to eliminate dead code, so that my application is easier to maintain and development is faster`.

It is hard for businesspeople to understand what dead code is. It's just code in your project that doesn't get touched. Totally a normal consequence of the development process. Nonetheless, removing it is actually valuable even though a businessperson would argue that it doesn't add value to the payroll calculation process.

They're wrong. It's just an indirect value. Removing dead code makes it faster to develop your application. That's actually valuable to them.

### Acceptance Criteria
Acceptance criteria is the minimum criteria your code has to meet for a businessperson to agree that you did a minimally good job. It is *very* important to be exact in acceptance criteria. I always focus on eliminating ambiguity in tasks, but ambiguity in acceptance criteria is exactly what `agile` seeks to eliminate.

### Velocity
My team doesn't use this but a lot of teams do. The idea of velocity is that you want to measure how much work you get done. Businesspeople love to drive home the point that `velocity has nothing to do with time`, but rather that it is only a measure of the perceived complexity of the task. Usually they use a `Fibonacci sequence` for pointing.

1 is the simplest change you can make.
2 is a little more complex.
3 is quite a bit more complex.
5 is usually a moderate change to an existing component.
8 is a moderately-complex new feature.
13 is a big new feature.
21 pretty much never happens. The idea of agile is that you want a whole lot of 1-8 tasks. 21 is indicative that you need to revisit your idea and try to break it up.

Here's a word of caution. 100% of businesspeople will try to pin you on `velocity equals time` after they've established that they are unrelated. They're the worst.

