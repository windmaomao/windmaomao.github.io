# Flexbox in CSS

## Flexbox

The CSS Flexible Box Module Level 1, or flexbox for short, makes the once-difficult task of laying out your page, widget, application, or gallery almost simple. With flexbox, layout is so simple you won’t need a CSS framework. Widgets, carousels, responsive features—whatever your designer dreams up—will be a cinch to code. And, while flexbox layout libraries have already popped up, instead of adding bloat to your markup, read this book, and learn how, with a few lines of CSS, you can create almost any responsive feature your site requires.

### The Problem Addressed

By design, ==flexbox is direction-agnostic==. This is different from block or inline layouts, which are defined to be vertically and horizontally biased, respectively. The web was originally designed for the creation of pages on monitors. **Vertically-biased layout is insufficient for modern applications** that change orientation, grow, and shrink depending on the user agent and the direction of the viewport, and change writing modes depending on the language.

> Layout on the web has been a challenge for many. For years we joked about the challenges of vertical centering and multiple column layout. Some layouts were no laughing matter, like ensuring equal heights in a grid of multiple side-by-side boxes, with buttons or “more” links fixed to the bottom of each box, with the button’s content neatly vertically centered, as shown in Figure 1-1, or ensuring boxes in a varied content gallery were all the same height, while the top gallery row of boxes were neatly lined up with the boxes in subsequent rows, as shown in Figure 1-2.

Other than actually declaring a height, risking lots of whitespace or overflowing content, there was no way to make all the columns equal in height. Multiple column layouts were created by floating every column, with each column being a predetermined width and differing heights dependent on the column’s content. While you can use faux background images with such a multiple column layout solution, or the table value of the display property, flexbox is a simple way—and the correct way—to make the columns equal in height.

### Simple Solutions

Flexbox is a simple and powerful way to lay out web applications or sections of documents by dictating how space is distributed, content is aligned, and displays are visually ordered, enabling the appearance of stretching, shrinking, reversing, and even rearranging the appearance of content without altering the underlying markup. Content can now easily be laid out vertically or horizontally, can appear to have the order rearranged, can be laid out along a single axis or wrapped across multiple lines, can grow naturally to encompass all the space available, or shrink to fit into the space allotted, and so much more.

Flexbox is a declarative way to calculate and distribute space. Multiple column layouts are a breeze even if you don’t know how many columns your content will have. Flexbox enables you to be confident your layout won’t break when you dynamically generate more content, when content is removed, or when your users stretch or shrink their browser or switch from portrait to landscape mode.

With flexbox, visually rearranging content without impacting the underlying markup is easy. With flexbox, the appearance of content can be independent of source order. Though visually altered, flex properties should not impact the order of how the content is read by screen readers.

And, importantly, with flexible box module layouts, elements can be made to behave predictably for different screen sizes and different display devices. Flexbox works well for responsive sites, as content can increase and decrease in size when the space provided is increased or decreased.

Flexbox can be used to map out an entire document through block layouts or used inline to better position text.

### Learning Flexbox

Flexbox is a parent and child relationship. Flexbox layout is activated by declaring display: flex; or display: inline-flex; on an element which then becomes a flex container, arranging its children within the space provided and controlling their layout. **The children of this flex container become flex items.**

Flexbox works on ==an axis grid system==. With flexbox you add CSS property values to a flex container element, indicating how the children, the flex items, should be laid out. The children can be laid out from left to right, right to left, top to bottom, or even bottom to top. The flex items can be laid out side by side on a single line, or allowed, or even forced, to be wrapped onto multiple lines based on the flex containers flex property values. These children can be visually displayed as defined by the source order, reversed, or rearranged to any order of your choosing.

Should the children of your flex container not fill up the entire width or height of the container, there are flexbox properties dictating how to handle the extra space, including preserving the space or distributing it between the children. When space is preserved, you can group the children to the left, the right, or centered, or you can spread them out, defining how the space is spread out either between or around the children.

You can grow the children to take up all the available space by distributing that extra space among one, some, or all of the flex items. You get to dictate how the children grow by distributing the extra space evenly, proportionally, or by set amounts. The children can be aligned with respect to their container or to each other, to the bottom, top, or center of the container, or stretched out to fill the container. Regardless of the difference in content length among sibling containers, with flexbox you can make all the siblings the same size with a single CSS declaration.

**If there isn’t enough space to contain all the children, there are flexbox properties you can employ to dictate how the children should shrink to fit within their container.**

Once you set an element to be a flex container, its children follow the flexbox rules for layout instead of the standard block, inline, and inline-block rules. Within a flex container, items line up on the “main axis.” The main axis can either be horizontal or vertical so you can arrange items into columns or rows. The main axis takes on the directionality set via the writing mode: this main axis concept will be discussed in depth later on.

![fig. A simple tabbed navigation](https://s3.amazonaws.com/qp-review/flex_in_css_c0.png)

```html
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/blog">Blog</a>
  <a href="/jobs">Careers</a>
  <a href="/contact">Contact Us</a>
</nav>
```

```css
nav {
  display: flex;
  border-bottom: 1px solid #ccc;
}
a {
  margin: 0 5px;
  padding: 5px 15px;
  border-radius: 3px 3px 0 0;
  background-color: #ddaa00;
  text-decoration: none;
  color: #ffffff;
}
a:hover, a:focus, a:active {
  background-color: #ffcc22;
  color: black;
}
```

## Flex Container

### Flex Container Properties

#### The flex-flow Shorthand Property

The `flex-flow` property lets you define the directions of the main and cross axes and whether the flex items can wrap to more than one line if needed. The `flex-flow` shorthand property sets the `flex-direction` and `flex-wrap` properties to define the flex container’s wrapping and main and cross axes.

```css
  flex-flow: row nowrap;
```

#### The flex-direction Property

The flex-direction property specifies how flex items are placed in the flex container. It defines the main axis of a flex container, which is the primary axis along which flex items are laid out.

```css
  flex-direction: row | row-reverse | column | column-reverse;
```

Let’s expand a little on our preceding HTML example, and include the navigation as a component within a home page.

![fig. Home page layout using flex-direction: row and column](https://s3.amazonaws.com/qp-review/flex_in_css_c20.png)

```html
<body>
  <header>
    <h1>My Page's title!</h1>
  </header>
  <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/blog">Blog</a>
      <a href="/jobs">Careers</a>
      <a href="/contact">Contact Us</a>
  </nav>
  <main>
      <article>
        <img alt="" src="img1.jpg">
        <p>This is some awesome content that is on the page.</p>
        <button>Go Somewhere</button>
      </article>
      <article>
        <img alt="" src="img2.jpg">
        <p>This is more content than the previous box, but less than
        the next.</p>
        <button>Click Me</button>
      </article>
      <article>
        <img alt="" src="img3.jpg">
        <p>We have lots of content here to show that content can grow, and
        everything can be the same size if you use flexbox.</p>
        <button>Do Something</button>
      </article>
  </main>
  <footer>Copyright &#169; 2017</footer>
</body>
```

```css
* {
  outline: 1px #ccc solid;
  margin: 10px;
  padding: 10px;
}
body, nav, main, article {
  display: flex;
}
body, article {
  flex-direction: column;
}
```

