# Reusable Components - Building UI with less tech burden

![Town City](https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAArfAAAAJGNlZTg1YThhLWQ1YzQtNDE4MC05Y2NjLTc0OGY0OTY4NWRhMQ.jpg)

_Written at Feb 2017 and published at LinkedIN_

> Reusable components, when designed properly, can save us lot of trouble as well as money. This is especially true for established business model, which itself tends to be sustainable over decades. Therefore for banking industry, this topic could be worth some study.

## Idea

When you design a website, you start to think of pages and components. The page is still #1 structural pillars in constructing a website, no question about it. If you haven't been practicing chopping functionalities into pages in the past, please use the page to segregate the responsibility of functionalities, so you don't get overwhelmed by implementing lots of things at one spot.

Component carries additional flexibility, if not the only way, to be swapped in and out of the page for multiple web projects. Taking `Bootstrap` as an example in prototyping a website, it's a superstar reusable tool to help you focus more on your content and less on how you want to theme the site. It allows you to come back to refine those components when the time is right, ex. when you get more budget. Page chops into sections, and section into widgets continuing this pattern leads us better reusability.

## Exercise

With the idea, let's demonstrate it with a quick example. Say we're writing our first app.

#### Step 1 - content, write your business content

```html
  <h1>Hello World</h1>
```

Of course, our first app won't be as simple as that, but let's say we'd like our site to look like the website we build before, ex. with the same header, footer and look and feel.

#### Step 2 – header and footer, authorization, menus, etc.

```html
  <div mc-body>
    <h1>Hello World</h1>
  </div>
```

Ok, by wrapping our content with a `HTML` tag `mc-body`, the header shows up in front of the content, and the footer after. Just imagine.

#### Step 3 – content layout, ex. sidebar

```html
  <div mc-body>
    <div mc-content>
      Hello World
    </div>
  </div>
```

This can go further, let's say, we have sidebar, form, button, grid, the list can go on and on. What if we can just add another `HTML` tag `mc-content` so that all *HTML* content you write in hello world section can be aware of the *Environment*. Just like *Bootstrap* themes the site, *Angular* defines the site with custom *HTML* tags. We can live with more tags, can't we?

## LT;RT

The above custom `tags are not free, you need to define them, plug them into your app, and might carry an additional cost in designing and testing. No free lunch here. However next time you need it, or you know you'll need it for 50+ times, it'll become handy. You can see the cost per app diminishes very quickly as the number increases and can be negligible eventually. This type of scalability can be very rewarding.  

The way we approach _The_ (web) problem is a bit different now. The question becomes who should be responsible for a certain section (or component) of the website. Since highly reusable component, once identified, can be built and maintained by a team different to each app team who uses the component. This doesn't prevent it from getting efficient at all, instead, it actually confines the domain knowledge and isolates it. With a clear definition of in and out parameters of this domain, the component will become highly reusable in design and therefore successful for business.

> angular-mc-common is an example in DB demonstration of this idea, and it has been built into 35+ apps and you can read blogs and repos here.

