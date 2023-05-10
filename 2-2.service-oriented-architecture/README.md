# Service Oriented Architecture
Service Oriented Architecture is really cool. It applies the `Single Responsibility Principle` to code on your server.

You use services to handle everything that a controller would do if you wrote a controller poorly.

`Pseudocode` is what developers call `writing code in plain english, so it is easy to bust out and understand in examples`. 

In pseudocode, a controller again does this:

1. Make sure that the `id` value is safe to use.
2. Request the profile model from somewhere on the backend.
3. Return the view for a profile, populated with the profile model.

You'd use a service for number 1 and 2. 

The controller would look like this:

1. Pass the id to the ProfileService.
2. If that finds a valid profile, return that with the profile view. Otherwise, return an error message.

The `ProfileService` would have a method that finds profiles by id. It would interact with a database and would look like this:

1. Make sure that the `id` value is safe to use.
2. Request the profile by id from the database.
3. Return that result.

Though this service is pretty simple, it is still good to separate the controller from the database for a lot of reasons. Namely:

Controllers are only supposed to take in requests and issue responses.

Services are supposed to handle the `business logic` and interact with databases. For now.

As our app progresses, however, you will realize that `interacting with the database` is a responsiblity all its own. That is typically taken care of in a `repository`, which is really just another javascript class that just takes in requests for information from the database and returns them.

Again, the idea here is that you are separating your concerns. Everything is easier to debug and maintain because it is not monolithic.