MVC in RxEffect
-

MVC stands for Model-view-controller, it's just as complicate as the name sounds. It was originally designed for software UI on desktops and then moved into web development lately, since that's all web development is about :) The look wired with hidden functionalities driven by data source from somewhere. 

Drupal, unfortuanately doesn't have MVC built in, but that doesn't stop us using it. There's not a lot article talking about doing MVC in Drupal, partly because

1. Drupal has lots of layer which gives you boost-up functionalities out of box. So in general you might not write a lot of code to achieve something
2. Nobody knows how to do it
3. Nobody cares as long as the page is rendered properly
4. Simple person team doesn't need collaboration

Why do we need to use MVC in general ? 
=

The idea behind it is separation of responsibilities. You can hardly find someone in the market that can do all web development these days, since web is not as simple as it was five years ago. It has various components which requires different expertise. For example, Javascript and PHP.

If you can put items in the right order, ex. by folder, by file, or just by sections of the file, you achieved the separation. That's it. As long as the team can name "M, V, C" in their dictionary, they can find what they want and jump to their area in seconds without guess work. 

Overall MVC approach increases the efficiency, decreases the bug, therefore dramatically decreases the cost of maintenance in the future. In return, you end up with a system with capability for expansion at all time. The potential is absolutely astonishing. 

How do we use MVC in general ?
=

MVC is hard to excercise if you are not aware of the difference between M, V and C. The first baby step is to understand what they are in our system, or let's say Drupal system. 

M, model, service call, database call, entity handling, everything that you don't want to deal with in terms of raw data handling is a model. In face Drupal does so good job, you almost use the wrapper call instead of the raw call. If you need to write more than 5 lines of code to fetch certain data, you are not using model in the right way. However model itself can be thousand lines of code.

V, view, look and templates which could includes CSS and Javasscript if you want. Because when you enter HTML world, you can have quite a bit components, but before we reach there, the first interface is the template. In Drupal, they're referred as template file, theme function, or renderable array. 

C, controller, there's no clear defination of what controller should do other than the fact that it is the component sit in between model and view. Actually more precise picture is that controller always uses model and view. 

In drupal, people has trouble to locate the controller although they're using it already, that explains why they can't find it :) 

In fact, the entry of any controller is typically hook_menu call that starts the routing and page functionality. A typical MVC approach of hook_menu handling is the following, 

> hook_menu
> * find model, get data
> * post process the data if not in good shape
> * assemble the view component
> * assemble the final renderable array

It's really two steps, find the data and assemble the view, but I write two more steps just to help you understand that in complex system (ex. RxEffect), additional steps might be required. 

The first action you saw this might be that you believe you are doing it. But the real key for fetching the data and assembling the view is that these two steps has to be in sequencial order, and they should have little knowledge of each other as possible. A "wrong" (but working) implementation is the following

> hook_menu
> * call a function to get data, well maybe i don't have the function, so let me write 10 lines here first.
> * add css, js and assemble the view component
> * well I forgot to get another piece of data, no problem, let me do it now, another 10 lines of code.
> * add css, js and assemble the view component which refers to the latest data or the previous data that you grabbed. 
> * i don't know if i am done, but i believe i have all the rendering element, oh i need to add another message, but let me code it here so that i don't have to create another template
> * ok, I'm positive that i'm done this time, let's take a look

The problem of using the above approach is apparent in the sense that no one can quickly find where the content is unless they do a full text search over entire project directory. Javascript can be injected from anywhere, HTML can be coded everywhere, literally, every where. The worst of the all, no one can be sure if they're working on this file, or ten files open at the same time. There's no much collaboration which can happen efficiently other than sitting on the same conference and later decide one of you will work on it tomorrow. 

The root of the problem is NOT the complexity of the task, which is just fetching the data and assemble the view, instead it is the frequency of doing both tasks and the order of doing these two tasks !!

Success to MVC !
=

The idea is that you want to make less call to achieve each task, and make sure each call finishes most of the work before it hands the responsibility to another party. This is not easy, but in order to increase the efficiency, we have to design a system (with folder structure, file structure, or function structure) that can facilliate this. 

If we have flat folder structure for each module (which can have 5-10 pages) like the following, for more information, please read "Refinement of RxEffect Folder Strucutre"

> RxEffect
> * Javascript
> * CSS
> * Classes (anything which you don't know where to put for now)
> * Templates
> * - patient_details.tpl.php
> * Pages
> * - patient_details.inc 

We could write a hook_menu call like the following

> function page_patient()
> * call a function from `patient_details.inc` to give me the patient data
> * assemble a renderable array which uses template `patient_details.tpl.php`

I apologize that i didn't give you too much details about this call, but can you make a guess of the following locations just based on what i have been telling you ?

1. raw data
2. html 
3. css
4. javascript
5. adherence program ?
6. input box for the notes ?
7. ajax submission ?

If you can answer the first 4 questions without looking at the code, congratulations, you already graduate !! If you can answer the last one, then you beat me, because I haven't written the function yet.

I hope you get the point after this excercise, if you can locate it, you can change it. It terms of MVC, as long as you know each call is for (either M, or V, or C), you'll use it for your benefit in the long run. Each letter corresponds to one person in our team, can you guess their name ?



















