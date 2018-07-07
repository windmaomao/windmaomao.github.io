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

```jsx
let h1 = React.createElement('h1', null, 'Hello world!')
ReactDOM.render(h1,document.getElementById('content'))
```

You can pass an unlimited number of parameters to `createElement()`. All the parameters after the second one become child elements. Those child elements (`h1`, in this case) are siblings—that is, they’re on the same level relative to each other.

### Creating Component Classes

```jsx
class HelloWorld extends React.Component {
    render() {
        return React.createElement('h1', null, 'Hello world!')
    }
}

let welcome = React.createElement(HelloWorld, null)
ReactDOM.render(welcome, document.getElementById('content'))
```

By convention, the names of variables containing React components are capitalized. This isn’t required in regular `JS` (you can use the lowercase variable name `helloWorld`); but because it’s necessary in `JSX`, you apply this convention here. (In `JSX`, React uses uppercase and lowercase to differentiate a custom component like `<HelloWorld/>` from a regular HTML element such as `<h1/>`. But in regular JS, it’s differentiated by passing either a variable such as `HelloWorld` or a string such as 'h1'. It’s a good idea to start using capitalization convention for custom components now.)

### Working with Properties

**One thing to remember is that properties are *immutable within their components***. A parent assigns properties to its children upon their creation. The child element isn’t supposed to modify its properties. 

```jsx
React.createElement('a', {href: 'http://node.university'})
```

You can even take this feature of properties a step further and completely modify the rendered elements based on the value of a property.

```jsx
render() {
  if (this.props.heading) return <h1>Hello</h1>
  else return <p>Hello</p>
}
```

In other words, ==you can use the same component—but provided with different properties, the elements rendered by the component can be different==. Properties can be rendered by render(), used in components’ code, or used as HTML attributes.

## Introduction to JSX

### Creating elements with JSX

Creating ReactElement objects with JSX is straightforward.

```javascript
React.createElement(
  name,
  {key1: value1, key2: value2, ...},
  child1, child2, child3, ..., childN
)
```

you can write this JSX:

```jsx
<name key1=value1 key2=value2 ...>
  <child1/>
  <child2/>
  <child3/>
  ...
  <childN/>
</name>
```

### Working with JSX in components

```jsx
class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>1. Hello world!</h1>
        <h1>2. Hello world!</h1>
      </div>
    )
  }
}
ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('content')
)
```

### Outputting variables in JSX

```jsx
class DateTimeNow extends React.Component {
  render() {
    let dateTimeNow = new Date().toLocaleString()
    return <span>Current date and time is {dateTimeNow}.</span>
    )
  }
}
```

### Working with properties in JSX

```jsx
class ProfileLink extends React.Component {
  render() {
    return <a href={this.props.url}
      title={this.props.label}
      target="_blank">Profile
    </a>
  }
}
```

## Making React interactive with states

So far, you’ve worked with properties, and you’ve learned that by changing properties, you can get different views. But ==properties can’t change in the context of the current component, because they’re passed on this component’s creation==.

To put it another way, properties are immutable in the current component, meaning you don’t change properties in this component unless you re-create the component by passing new values from a parent. But you must store the information you receive from the server somewhere and then display the new list of matches in the view.

**A React *state* is a mutable data store of components**—self-contained, functionality-centric blocks of UI and logic. ***Mutable* means state values can change.** By using state in a view (render()) and changing values later, you can affect the view’s representation.

Here’s a metaphor: if you think of a component as a function that has properties and state as its input, then the result of this function is the UI description (view). Or, as React teams phrase it, “Components are state machines.” Properties and state both augment views, but they’re used for different purposes.

### Setting the initial state

```jsx
class MyFancyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {...}
  }
  render() {
    ...
  }
}
```

The constructor() method is called just once, when a React element is created from this class. This way, you can set state directly by using this.state just once, in the constructor() method. ==Avoid setting and updating state directly with this.state = ... anywhere else, because doing so may lead to unintended consequences==.

### Updating states

```jsx
constructor(props) {
  super(props)
  this.state = {
    userName: 'Azat Mardan',
    userEmail: 'hi@azat.co',
    userId: 3967
  }
}
updateValues() {
  this.setState({userName: 'Azat'})
}
```

Keep in mind that setState() triggers render(). It works in most cases. In some edge-case scenarios where the code depends on external data, you can trigger a rerender with this.forceUpdate(). But this approach should be avoided as a bad practice, because relying on external data and not state makes components more fragile and depends on external factors (tight coupling).

#### Binding this in Javascript

In JavaScript, ***this*** mutates (changes) its value depending on the place from which a function is called. To ensure that *this* refers to your component class, you need to bind the function to the proper context (this value: your component class).

If you’re using ES6+/ES2015+, as I do in this book, you can use **fat-arrow function syntax** to create a function with autobinding:

```javascript
setInterval(()=>{
  this.setState({
    currentTime: (new Date()).toLocaleString()
  })
}, 1000)
```

The manual approach uses the bind(this) method on the closure:

```javascript
setInterval(function(){
  this.setState({
    currentTime: (new Date()).toLocaleString()
  })
}.bind(this), 1000)
```

The idea is straightforward: you create a variable and use it in the closure instead of referring to this. The new variable isn’t a copy but rather a reference to the original this value. Here’s setInterval():

```javascript
var _this = this
setInterval(function(){
  _this.setState({
    currentTime: (new Date()).toLocaleString()
  })
}, 1000)
```

### States and Properties

States and properties are both attributes of a class, meaning they’re this.state and this.props. That’s the only similarity! One of the primary differences between states and properties is that the former are mutable, whereas the latter are immutable.

Another difference between properties and states is that you pass properties from parent components, whereas you define states in the component itself, not its parent. The philosophy is that you can only change the value of a property from the parent, not the component. So properties determine the view upon creation, and then they remain static (they don’t change). The state, on the other hand, is set and updated by the object.

**Not all components need to have state.**

### Stateless Components

A *stateless* component has no states or components or any other React lifecycle events/methods. The purpose of a stateless component is just to render the view. The only thing it can do is take properties and do something with them—it’s a simple function with the input (properties) and the output (UI element).

The benefit of using stateless components is that they’re predictable, because you have one input that determines the output. Predictability means they’re easier to understand, maintain, and debug. In fact, not having a state is the most desired React practice—==the more stateless components you use and the fewer stateful ones you use, the better==.

As you can see, you can also define functions as React components when there’s no need for state. **In other words, to create a stateless component, define it as a function**.

```jsx
const Link = (props)=> {
  return (
    <a href={props.href}
      target="_blank"
      className="btn btn-primary">
        {props.text}
    </a>
  )
}
Link.propTypes = {...}
Link.defaultProps = {...}
```

In a stateless component, you can’t have a state, but you can have two properties: propTypes and defaultProps. You set them on the object. And, by the way, it’s okay to *not* have an opening parenthesis after return as long as you start an element on the same line.

### Stateful vs Stateless Components

Why use stateless components? They’re more declarative and work better when all you need to do is render some HTML without creating a backing instance or lifecycle components. Basically, stateless components reduce duplication and provide better syntax and more simplicity when all you need to do is mesh together some properties and elements into HTML.

My suggested approach, and the best practice according to the React team, is to use stateless components instead of normal components as often as possible. But as you saw in the clock example, it’s not always possible; sometimes you have to resort to using states. So, you have a handful of stateful components on top of the hierarchy to handle the UI states, interactions, and other application logic (such as loading data from a server).

Don’t think that stateless components must be static. By providing different properties for them, you can change their representation. Let’s look at an example that refactors and enhances Clock into three components: a stateful clock that has the state and the logic to update it; and two stateless components, DigitalDisplay and AnalogDisplay, which only output time (but do it in different ways)

The code for Clock renders the two child elements and passes the time property with the value of the currentTimestate. The state of a parent becomes a property of a child.

```jsx
...
  render() {
    console.log('Rendering...')
    return <div>
      <AnalogDisplay time={this.state.currentTime}/>
      <DigitalDisplay time={this.state.currentTime}/>
    </div>
  }
```

Now, you need to create DigitalDisplay, which is simple. It’s a function that takes the properties and displays timefrom that property argument (props.time).

```jsx
const DigitalDisplay = function(props) {
  return <div>{props.time}</div>
}
```

As you can see, the AnalogDisplay and DigitalDisplay components are stateless: they have no states. They also don’t have any methods, except for the body of the function, which is not like render() in a normal React class definition. All the logic and states of the app are in Clock.

In contrast, the only logic you put into the stateless components is the animation, but that’s closely related to the analog display. Clearly, it would have been a bad design to include analog animation in Clock. Now, you have two components, and you can render either or both of them from Clock. Using stateless components properly with a handful of stateful components allows for more flexible, simpler, better design.

Usually, when React developers say *stateless*, they mean a component created with a function or fat-arrow syntax. It’s possible to have a stateless component created with a class, but this approach isn’t recommended because then it’s too easy for someone else (or you in six months) to add a state. No temptation, no way to complicate code!

==Keep your stateless components simple: no states and no methods==. In particular, don’t have any calls to external methods or functions, because their results may break predictability (and violate the concept of purity).
