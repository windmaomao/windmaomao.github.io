# Container to the rescue of deployment

![](https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAUqAAAAJDRjZmJjY2IwLTE1ZDQtNDAyNC1hNDkwLTZkNzAyMWIwMjlkZg.jpg)

_Written at Aug 5th 2015, and published at Qplot_

> In this article, the author describes the inconsistency between development and deployment, and explains that a good deployment strategy should be part of the software architect in order to minimize the disappointing chaos during the final deployment.  

Shareholder probably couldn't understand the chaos during the project launch. Had everything coded right, demoed right, how can a launch turn into a disaster ?

Actually I don't blame them, even the developers couldn't sleep before the launch, especially the public ones. We could stay up to 3:00am in the morning to fix bugs that are still causing troubles for customers on the live server. There's absolutely no much confidence in delivering a project in the last step. The worst part, people think you are just not doing your job right or not doing your job at all. Apparently that is not true. 

## Two world

There are always two stories behind it. Developer codes but does not develop on the live server where business data and traffic happens. 99.9% of his time is spent on his own desktop or laptop, which is relatively more comfortable for personal use. Some developer could work in a remote location with almost no internet connection. 

This sets up two different world in reality, differing by operating system, hardware, server components and various of other small tool-sets. And they can be two different persons in it, server engineer vs developer. They rarely talk to each other, because one deals with lines of code and the other one deals with machines and servers all the time. 

The most common solution to the above problem is to hire people from different fields to work together. The only problem is, it is not that easy. They just don't share too much things in common, like I said, they are two sequential steps in the industry, one deals with codes, and one deals with machines. And if you ever watched them working together, you can be frustrated sometimes by how a trivial thing turns into a complicated issue between them.

Yes, you write some code, and put in a machine and it should run. But it's not guaranteed to run in any machines, that's the problem. Either you have to be visionary on the machine we're going to use, or you just have to take the machine into consider when you are doing the development work.

People say practice is the key. That's right, we don't wait till the last day to do the deployment, instead we could try at the beginning of the project. If you know what server architect we're going to use, we can then deploy during the project sprint as well as each major or minor release. If you practice it twice a week, you won't have this problem, don't you think?

Having in mind that we still have two catches here. First, we do not know what server architect we're going to use in the end; Second, how often we do deployments can impact the cost of the project. 
 
## Packaging to the rescue

So how do we approach this problem? 

Composition plays a major role in engineering and business. If you can not handle two things well, maybe it's time to find a basket, and divide the basket into two compartments, and put each thing in one of them and wire them together. Now you are rest assured that if you move the basket to another location, as long as the integrity of the basket is maintained, the thing will continue working internally, just like your physical laptop.

That's a brilliant idea. In old days, we had Apache installed at both local and production server, that caused quite a bit problem practically, not same version, not same components installed etc. Well, these days we could use a packaging system. 

Packaging system isn't made for software development, it could be used for server development, because itself is a server component, like Apache. So if we package everything right, we actually achieved a higher level composition. 

The interesting fact is that you don't have to be good at packing. I'm not good at travel at all, i just throw everything i have to a suitcase, vs my wife will patiently come up with a nice neat big suitcase after couple of hours of packing. Well the end result could be similar because we both want to move some stuff from one city to another one. 

Yeah, the funny truth is, as long as you are packaging against the entire Machine, you can call your unique package/setup to be Package, Container, Dock, App, or just Repo, and you make sure this App architect is supported on the production server, then you can be a lot happier when it comes to deployment.
  
> So you might be thinking, can I just package my Apache in to solve my old problem? yes, you can do that. There are a mature market for doing that, ex. Vagrant. IMHO ;)

## Conclusion

 In short, inconsistency between development and deployment should be taken into consider for any size project. Having the deployment strategy part of the software architect is a common practice in order to minimize the potential chaos caused by one Final deployment. Having the deployment built-in and deploying as often as development can be more cost-effective as well as gaining more customer satisfaction in both short and long run.
 
 > NodeJS is probably so revolutionary that it becomes The packaging language for a lot startup system out there. If you go mobile, you'll see a nodeJS package, if you go desktop, you'll see a nodeJS package. I guess, this is when you go one level higher, you can see the better picture and in this case, program the entire architect for your application, from the software architect to server architect. No wonder it'll go easier when it comes to deployment, since in this case we're just dealing with one language in one repo with only couple of folders. Therefore it saves tremendous of money and effort in getting the right software in front of your customer.


