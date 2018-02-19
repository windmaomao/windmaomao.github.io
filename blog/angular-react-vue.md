# Angular, React and Commons

I got this question a lot, web frameworks are marketing words to me these days. Everyone knows something about them. But trust me, even developers are not clear about what they are and what they will do. World is moving too fast. It's definitely been harder after `HTML` and `Javascript` were invented. 

I still personally believe `HTML` is the king, even I'm a 100% `Javascript` developer now. `HTML` becomes the web media so that anyone who understand this language can provide content directly to the web. I would say directly, because actually most of us don't use `HTML` at all tweeting. But if you want to work on the core part of the web, you won't be able to skip `HTML`. 

## Angular

Back couple of years back, when we need to add some functionalities to the page, we need to add a few lines of `Javascript`. If you add too many, the page gets messy, you tend to use some library ex. `jQuery` to facilitate the work. 

`Angular` is not exception when it comes to solve this problem in terms of organizing code while keeping your typical way of working with `HTML`.  

```html
	<h1 ng-show="">Hello World</h1>
```

For example, it allows you to adds some attribute to the tag `h1` so that the behavior of the tag can be changed on the fly. The source code is written in another file. That makes the coding neat and the process intact as much as possible. 

This idea isn't new, and `Angular` takes this approach to a whole new level that every piece of `HTML` **should be** written and organized via those attributes for new behaviors to be introduced. 

The job of `Google` engineers can then be more productive in providing web content.

## React

Once again, in back days if you want to add couple of new lines of `HTML` to the page after the page load, you rely on `Javascript` or `jQuery` library, which allows you to operate on the new `DOM`  node directly. It's a bit difficult since you don't see the `HTML` that you are adding. 

`React` trys to improve this process in solves the problem of generating `HTML` (or element) without the need to have a `HTML` file as the base. For instance, the `HTML` can be written inside the function and rendered as part of your code simply as,

```jsx
    render() {
        return <h1>Hello World</h1>
    }
```

This is strange to the `HTML` camp since it does create conflicts of interest, and is still the most debatable topic over the web framework community. Fundamentally `React` is trying to solve one problem and proposes that `UI` **should be** written and organized via code so that everything can sit and be tested together. Apparently it takes this concept to a whole new level. 

Thus, the job of `Facebook` engineers can be very efficient in creating more and more widgets. 

## Middle

The world is never black and white. Even the black has some shades inside. Fighting with another camp is useless in the sense that each camp is not trying to solve all the problems. They just found one possible way to solve one particular problem in most cost-effective way. But of course they have to ignore the rest of other problems, simply because they are not trying to re-invent the world. They are software engineers. 

Therefore not judging which way is better and just taking what's best, `Vue` created some what they believe the best practice in terms of writing web component, which essentially combines  the above two concepts together, at least makes possible to use both ways. 

## Commons

Without looking deeper inside each framework, and of course not the fights about choosing which one to use, I can assure you some common ground from the higher level.  

- **HTML**. `HTML` is still not going anywhere, if you want to learn something about the web today, picking up a `HTML` book is never too late, and continue to be a good investment for next couple of years. The only interesting thing is that `HTML` is getting smaller, since it has been chopped into pieces unto different locations and shapes, so that it doesn't look like `HTML` any more, at least not in a traditional book-like way.
- **Javascript**.  Of course, `Javascript` is not going anywhere, actually it probably will dominate the entire web very soon. This is the best time to invest time in `Javascript`. The industry is trying to regulate it and making it a better language. It's still hard to believe after twenty years, the one `language` stands out  (or survives) besides `HTML` is `Javascript`.
- **Component**. Last but not least, they all want you to work your `UI` in a compartment setup so to get more opportunities to be reused for other projects. This saves cost in general, especially for the sustainable environment. And this is probably is one of the most important web concept in recent years.

All in all, when you try to think about the future, maybe we should just look at the history. 4-5 years is too short, 20 years maybe a good start, and if we can extend it to  100 years, maybe that'll give you a clearer picture, though the result might not matter to you that much.






