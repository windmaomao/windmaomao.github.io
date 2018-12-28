Refinement of RxEffect Folder Structure
=

Every PHP framework is good in certain area, but they are more or less unique in organizing internal file structures. By doing that, they are proposing to enforce new developer to use their ways of working on web applications. This is a good thing or bad thing. But the point is that we do need one, unique for Our purpose and flexible for Our purpose.

After couple of month working with RxEffect application, I realized that we're NOT working on a complicated web application in terms of UI part. I don't mean to say that RxEffect overall is a trivial system, on the contratry, it's a beast with lots of complexity and interesting parts. However the UI part is NOT, at least not yet. We have to realize this first before making changes or tuning our current case to better implementation.

Drupal had bad reputation on not giving people advice how to do a good web development, especially the way how it organizes its internal structure is way behind the latest good practice comparing to most of PHP frameworks. Yes, Drupal is not a PHP framework, it tries to be in Drupal 8 by incorporating Symfony 2. 

The good news is that good web development practice can be incorporated to any framework without too much effort. Because the practice is a practice, ex. MVC, Git workflow, etc. It's not neccesary a precise implementation that has to be built into the framework, although it'll make the framework a lot better if it's incorporated at the first place, ex. Laravel. 

I believe it's urgent to adjust our internal RxEffect folder structure a bit to make our application suppportable, extendable and workable by various of people in the future, including database architect (John), backend coder (Paul) and frontend coder (Tasha). Keep in mind what I'm proposing in the following is not built in Drupal but just a good practice to follow, especially for small prototype application while transitioning into a enterprise application. 

One module
-

Modules can have internal structures, but probably better based on type of the functionality instead of functionality itself, because "Module" is designed for unique functionality. For example, if we have two pages inside this module, we could create two folders with `page1` and `page2` or we could create a folder `pages` and put both files inside.

Case 1 (**Currently using**)
> page1
> - page1.html
> 
> page2
> - page2.html

Case 2 (**Proposing to use**)
> pages
> - page1.html
> - page2.html

These two cases are very different, and will make a big difference when you have lots of pages or types of functionalities (components), ex. javascript, templates (partials), forms, css, classes and etc. Our current implementation actually uses mixture of both, ex. page uses case 1, javascript uses mixture of case 1 and 2.

IMHO, we shouldn't mix and match these two cases in our design, because it made it hard for extension. We need to pick one and stick with it consistently. In order to favor the design of "Module" we probably better stick with case 2, and here're the additional advantanges of using it,

1. Simple, no guess work, if you are looking for page, you go look in pages folder. If you are looking for javascript, you look in javascript folder. Page in this discussion is just an example, we don't neccessary have to have a folder called `pages`.
2. Don't be afraid of name clashing. Just name each component properly, ex. 'page1_hello' if you believe there're two hellos in our module.
3. Caution to put too much stuff in one module. If you think we're out of control in terms of this simple file structure, you should start to think of adding another module. That's what module is designed for, seperation of functionalities. 5-6 pages are not out-of-control case, however if you want, you could do 1 page per module.
4. No shared folder. Basically this is a local shared case for one module. Shared folder should be put inside another module with dependency written when referring to it. In general shared folder may be a wrong name, because all modules are shared, at least in Drupal 7.  
5. Good for team work, ex. front-end developer can solely work on CSS/Javascript and Template folder. In future chapters "Two modules" and "MVC", I'll propose to even mount these folders into theme folder. This way he/she doesn't have to go into the backend development at all, separation of responsibilities.

I'll stop at the "One module" case for today. In short, we are not far from achieving the above. My latest work gives some example on how it's organized, ex. templates folder. But in order to achieve this in a larger scale, it requires everyone on board to this approach. 

The nice thing about this is that we don't have to make it happen in a day, and it's a relatively slow process.







