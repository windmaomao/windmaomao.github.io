# Build Dynamic Website with Static Approach

_Written at Aug 22nd 2015 and published at Qplot_

> This article suggests you stick with traditional way of making static web pages in favor of staying in budget. Adding dynamic feature can be very costly, and choosing a framework solely based on the backend requirement will cost you more than you think in finishing the project.

In the old days, we code a website against a picture. And a lot of company survived for many years with just this brutal approach, and it worked. In new days, we need to add  dynamic feature to the website which requires a backend support. Sites with backend generally has more advantage over static sites.

However adding a dynamic feature is not cheap and sometimes the cost/value ratio can be very high, especially when you choose a backend just for sending a email or storing some form values. And it turns out it's an over-kill in the end for most of small-to-medium size web project. 

Moreover, the mentality of building a website (or converting an idea onto digital form) has changed little over the past ten years. I'm still using the same language, same approach, and scarily same business requirement.  

##Data and Storage

Let's say you designed a site and use HTML to code the look and feel of the web pages. In stead of bringing CMS database driven engine early on, can we continue working on the HTML the old way?

> Ironically speaking, IMO 90% of the project rushes into development stage too early and costs the shareholder 900% more than it supposed to be spent. Don't get me wrong, you learned a lot after spending 900% more, therefore the money is not totally wasted. 

Taking blog pages as an example, with the following template

```html
    ...
    <h1>How to gain weight?</h1>
    <p>Eat can be a very effective way</p>
    ...
```

It has some common HTML elements in `...` and a `<h1>` and `p` tag. In order to add a blog, you create a HTML page, fill the title and bog and then you can save it in git repo and deploy it to the staging/production server. It's very straightforward process these days. 

But you realized that keeping typing `<h1>` and `<p>` tag and other common elements of the page is annoying, especially if there may be 50 blog pages. What we want is a way to refactor out the body and title as a variable.

```
   title: How to gain weight?
   body: Eat can be a very effective way
```

This way we can just throw these variables into the template by

```
    <h1>{% title %}</h1>
    <p>{% body %}</p>
```

This is a very typical step that we normally take to convert a static page into a dynamic page and you might find the above code in any PHP or AngularJS application. 

> People sometimes ask if static sites make sense for anything beyond a one-pager. This leaderboard highlights the top open source projects, in many different languages, that make static sites not only viable, but an attractive option for creating sophisticated websites! <cite>From "StaticGen.com"</cite> 
 
Since we don't have a database, this time we choose a local file to write these variables. We can select a local script using a build tool (ex. Assemble) to help us assemble the variable into the HTML in the build time. Afterwards, not only you have the HTML page, but also you separate the data out of your template. And all these templates and data files can be further committed into code repository, since they are all files.

Of course, I only scratch the surface of this static build approach. You'll have a lot of questions on how to do this and how to do that. Please search `static site generator` for more answers, what I explained above is more like the basic idea behind it.

##Static vs Dynamic

###Pros on static
- Configuration storage over database storage
- Everything can be committed into code repository
- High efficiency in prototyping and design 
- Highly adaptive in requirement change
- Super easy to get hosted
- No complication on full cycle of deployment

###Pros on dynamic
- Database storage for millions of records
- Session or token authentication support
- Flexible in URL routing
- Support any sever side service, ex. API

>Static and Dynamic site build are not enemies and they actually are the first and second step of any web projects, and frankly speaking they are complimentary to each other. If you aim for a cost-effective web application, you should stay in static part as much as possible, especially if you are not clear on the vision of the project. Once you step into dynamic part, the development can be highly boosted since conceptually the site has been created already since you are just filling the blank from then on.

 

