# What is MVC?
MVC is a really standard architecture that you use to make websites. It's been around for probably twenty-five years. It stands for `Model-View-Controller`.

Going back to the `Separation of Concerns` mentioned earlier, here is what that means:

`Models` are the data you use to fill out views.
`Views` are the websites that the controller returns.
`Controllers` are responsible for accepting requests to a server and issuing responses.

Let's say that you go to this page:

`www.social-media-whatever.com/profile/getById?id=benclark`

On the server, we would have a bunch of controllers. Probably one for `Friends` which we use to create relationships between users, probably another for managing settings, and so on.

This request would be routed to the `ProfileController`, where we would have a method called `getById` which accepts an `id` parameter that is a string.

In that method, we would probably do a few things:

1. Make sure that the `id` value is safe to use.
2. Request the profile model from somewhere on the backend (we'll do that later).
3. Return the view for a profile, populated with the profile model.

We could also wrap that in code that says, "Try this and if something goes wrong, show an error page."

MVC is great because it separates our concerns. You could write a controller that does everything -- returns a data type that is just constructs from whatever and populates a view that it writes on its own. This is hard to maintain for a few reasons.

1. The model is just this weird, barely defined thing. The only way you could really get a handle on it is if you wrote it and remembered. There's no need for you to put yourself through that. Instead, create a `models` folder and put a `profile` model in there. 

2. Views really are just strings of HTML, but keeping them separate from the controller does the same thing as keeping the model definition out of the controller.

Ultimately, controllers are supposed to be thin. They accept requests and return responses. They should do their best to hand everything off to another service.