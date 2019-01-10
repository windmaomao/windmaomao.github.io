# Frontend Reusability

## Requirement

Question presented here is that the business want to spin up an application under an architect that shares functionalities. The reusability includes 

- static materials (ex. branding), consistent look and feel acoress entire business domain
- dynamic component which shares the functionalities without hard coding the business content
- application creation which allows developer to create an application under this architect  
- application registration which allows business owner to on-board app under this architect

This reusability should also faciliate other party who uses this architect in content creation, application development as well as application deployment.

The requirement above sets the context in choosing the type of technologies and how far we should apply them, which extends to answer the question of how coupled certain process should be.

## Module

In order to achieve reusability, one of the effective way is to utilize Module, which is a resusable functional unit. It could be under different name depending on the problem we try to solve. In the following, we'll go through each problem domain and see if we can identify the Module that we can rely on to simply the problem.

### Static Materials

Let's taking branding material as an example. We have a logo put in certain position of the screen with certain color and size. Most of the time the consumer (developer here) expects to paste 1-2 lines code to get this setup. This can be fully captured in classic CSS style sheet, if extends to SASS, it can contain the entire branding spec in code. We can further expose the key variables to down-stream customization. This is very popular approach which has been demonstrated by Bootstrap or Foundation Sites. Branding material can be an instance of this type of architect and should be build in its own repo. 

With proper budget we should aim for branding Module without Javascript introduced. This makes our work lean more towards the business requirement, and will help its integration with other frontend technology more smoothly. IMHO, it'll increase our exposure and adoption rate more effectively.

### Dynamic Component

We use module to capture the programming resuable unit. Inside we can expose each dynamic component through an interface where the consumer can call as a function. This has been demonstrated via React and other frontend framework. Our job is to continue with this approach with some convention and proper documentation. 

Since dynamic components are not a presentable webpage, there're certain considerations we need to have in order to test them properly in an isolated repo before integration into Applications. The bottom line is that there shouldn't be too much guess work for down stream consumer. 

### Application Creation

Each application sits in its own repo (or an isolated folder inside another repo). The connection between the app and the components are through Module dependencies. Therefore a typical application creation process is,

- create an empty application
- declare the branding dependency to add consistent look and feel
- declare other component dependency to add more functionalities

For now on, you can add custom functionalities specific to this app. The key thing is that the above steps shouldn't take a lot of time, if we can minimize it to under 50 lines, this process can be taken as almost close to an automatic process.

The app is just another higher level of module, you can either

- publish it as a standalone app (with internal routes, and pages)
- Or publish it as a library for other app to consume

This pattern scales on itself. 

### Application Registration

How a finished application should be integrated with the global domain is part of application on-boarding process, which determins where the application (or page) is deployed, and who should access the application.

For a distributed system, this could be an exception that we don't want to declare hard dependency through coding. Instead we can establish the dependency through soft linking or configurational settings stored in the server. This way we help to separate the team responsibility and minimize the build conflicts between different teams as well as maximizing the flexibility of deployment.

## Conclusion

In short, by identifying the strategic repos, each as a reusable functional unit, we can create application efficiently with overall reduced cost.  Although these repos require considerate amount of effort in planning, documentation, and refactoring, it pays off when we reach 5-10 apps, and becomes relatively negligible when it's over 20-100 apps. 



