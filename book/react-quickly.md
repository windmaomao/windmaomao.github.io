# React Quickly

Painless web apps with *React*, *JSX*, *Redux* and *GraphQL*

## Meeting React

In contrast, React offers a new approach that streamlines front-end development. React is a powerful UI library that offers an alternative that many big firms such as Facebook, Netflix, and Airbnb have adopted and see as the way forward. Instead of defining a one-off template for your UIs, React allows you to create reusable UI components in JavaScript that you can use again and again in your sites.

==This approach isn’t new. Creating *composable UIs* has been around for a long time, but React is the first to use pure JavaScript without templates to make this possible. And this approach has proven easier to maintain, reuse, and extend.==

React is a great library for UIs, and it should be part of your front-end web toolkit; but it isn’t a complete solution for all front-end web development. In this chapter, we’ll look at the pros and cons of using React in your applications and how you might fit it into your existing web-development stack.

## Baby steps with React

It’s crucial for understanding React concepts such as elements and components. **In a nutshell, *elements* are instances of *components* (also called *component classes*).**



Include `react` and `react-dom` library,

```html
<script src="//fb.me/react-0.14.3.js"></script>
<script src="//fb.me/react-dom-0.14.3.js"></script>
<body>
    <div id="content"></div>
</body>
```

### Nesting Elements

In order to insert `Hello World`, you can render a new element into a `DOM` element,

```jsx
let h1 = React.createElement('h1', null, 'Hello world!')
ReactDOM.render(h1,document.getElementById('content'))
```

### Creating Component Classes

Or you can create a component class and insert an instance of it into the `DOM` element.

```jsx
class HelloWorld extends React.Component {
    render() {
        return React.createElement('h1', null, 'Hello world!')
    }
}

let welcome = React.createElement(HelloWorld, null)
ReactDOM.render(welcome, document.getElementById('content'))
```

Here `HelloWorld` is a component with similar functionality as the regular `h1` tag. 