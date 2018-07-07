# Tiny Upscaling - A fish tank story

_Written at Sep 2015 and published on Qplot_

> There's also a perfect structure for information at current state. Therefore in this article, the author walks you through the steps it'll take to create the right structure, and the ways to upscale the structure when the time is right.

For some many years, I have been experimenting about how to setup a good project structure. The main issue is that I don't exactly know the requirement for the project in terms of the functionalities and file formats, therefore I can spend a day or week think of the structure without reaching the satisfaction I want. 

Lately I start to practice another approach. Instead of asking myself what should be the right structure, I confront myself with what I'm going to do Today. 

## A fish

Taking a piece of function as a example, if this function is so short that I can just put it in a file 'file.ext' and call it a day. Here `ext` can be any file extension.

```
    a function
```

## Lots of fishes in compartments

One day, I realized that this is not a system that I can depend on, and as a professional, I don't want anyone laugh at me being disorganized. So let's find a way to group this functionality, either by writing some nice comment or putting it in a module. Either way, it needs to look like a book chapter, not just some random snippet.

```
	CHAPTER 1
		function 1
		function 2
		function 3
	CHAPTER 2
		function 4
		function 5
	...
```    

## Fishes with a nice tank 

```

    // app.js
    angular
        // a module
        .module('app', [])
        // allow you to group some functions  
        .factory('trival', function() {
            ...
        }  
```

I'm using angular to demonstrate this team idea, but actually you can find various framework having this module or class arrangement. IMO, as long as it's clear that the code belongs to somewhere, it's good for extending it in the future. So don't over-kill yourself by looking for a solid framework, it's not that important if you are not going to extend it tomorrow anyway.

## Too many fishes, time for a new tank

You can live with the above structure for your entire life if you want to. There's no right and wrong, and to be honest, I believe satisfaction here is driven by function requirement, if there's no more requirement, we shouldn't spend too much energy finding better structure.  

But what if more functions are coming in last week, and you start to have lots and lots of similar functions for this module that a file just isn't enough to handle it. 

Let's create second file

```

	// files
    app.js
    data.js
```
You have two different set of functions that you can split into two files captured by two modules, you could name the second module as a sub-module. 

```
    .module('app.data', [])  
``` 

The main point is that it's two files now. You just upgraded so that you don't have to search a function inside a giant file.

## Too many tanks, ready for a new home

So far I have been talking about everything inside one folder `scripts`.

When more and more files are created, you might run out of the file name to separate them apart inside same folder. You then create a new folder to group things with similar functionalities.  

```

	// files
    app.js
    data
        data1.js
        data2.js

```

## Fish, Tank, and House

Alright, you get the picture now, starting as a small fish, growing in amount and size along the way, driven by the external world. In theory, this outlined structure can contain things in three to four hierarchies. But in reality, once you go beyond three levels, you most likely are on another subject, ex. it's not fish anymore. You will either go with another subject or another project by then. This legend of up-scaling continues.

It's tempting to go big, especially when you are small. But being big has its penalty. So if you can live as a fish, try to accomplish everything being that. If you can't, go upgrade to a tank, stay there for a while until you really have to look for a house. You don't want to buy two houses first just to have two small fishes. Paying two mortgage isn't cheap. 

Up-scaling is not just for going up quickly, it's for going both ways with some level of flexibility. I found the best part of up-scaling is that you can always start as tiny, so that you have solid foundation to fall back to when going large isn't a must-have.  


