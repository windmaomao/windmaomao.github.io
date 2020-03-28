# Frontend Scalability

What's bothering front-end engineers in the past few years is, that with the growing demand of reusable components, how can we make sure each component does its job without conflicts in the global scope (ex. inside a browser). 

The front-end core library makes the problem worse due to the large amount of stylesheets that it produces for the consumer app to digest as a bundle. The more we produce, the unstable the system gets, simply because touching the global scope with no rule isn't a scalable solution by nature. It makes **debugging** for a production problem extremely difficult if not virtually imposible.

From the computer science, we all know in order to reach certain level of scalability, one of the requirement is to make it atomic so that its inner environment is separated from the external one, therefore the external environement can  focus more on the coordinating job through the interface assuming each manages its internal states with no access to the global states directly. 

Well established as this idea is, it is not well executed in UI/UX until recently when someone started to use Javascript to replace the classical stylesheet. The stylesheet doesn't have local scope in mind where all variables are treated as global by default. A stylesheet is a style created for the look and feel of a website.

By introducing Javascript to the UI/UX, we can have the benefits of a language, including modular dependency, local scope, multiple threading, not to mention the complex logic. One big benefit is that now every component  instance are completly containing its own logic and resources (stylesheet being one of them). Creating and sharing a library is much easier and safer afterwards, avoiding enforcing consumer to align the architect with its internal architect. Librating from providing architect to the consumer makes the library easy to write, cheap to produce, and most importantly, have tigher interface to start with. We finally can define the UI spec in a localized written format.  

In short, having CSS (or **SASS**) written in JS is termed as CSS-in-JS. I use it as an example to highlight the need to have a scalable solution so that the money saved from having less production bugs can be spent on more creative development. 

This is a pattern for industrialization.