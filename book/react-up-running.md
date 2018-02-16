# React: Up & Running

## Preface




## Hello World

> Two parameters, from `React` element to `DOM` native element.

```javascript
ReactDOM.render(
  React.DOM.h1(null, "Hello World!"),
  document.getElementById("app")
);
```
First, you see the use of the `React` object. All of the APIs available to you are accessible via this object. You can create a React app to render in different environments—for example, HTML (the browser `DOM`), canvas, or natively in `Android` or `iOS`.

Next, `React` provides wrappers around `HTML` `DOM` elements. You use the wrappers via the React.DOM object. It corresponds to the `<h1>` HTML element and is available to you using a call to `React.DOM.h1()`.

Finally, you see the good old `document.getElementById("app")` DOM access. You use this to tell React where the application should be located in the page. ==This is the bridge crossing over from the DOM manipulation as you know it to React-land==.

```javascript
React.DOM.h1(
  {id: "my-heading"},
  React.DOM.span(null,
    React.DOM.em(null, "Hell"),
    "o"
  ),
  " world!"
),
```

The first parameter to `h1()` is an object that specifies any properties (think `DOM` attributes) that you want to pass to your component. 

The second parameter ("Hello World!" in this example) defines a child of the component. The simplest case is just a text child (a Text node in `DOM`-speak) as you see in the preceding code. But you can have as many nested children as you like and you pass them as additional function parameters.

> As you can see when you start nesting components, you quickly end up with a lot of function calls and parentheses to keep track of. To make things easier, you can use the `JSX` syntax.

```javascript
ReactDOM.render(
  <h1 id="my-heading">
    <span><em>Hell</em>o</span> world!
  </h1>,
  document.getElementById("app")
);
```

## The Life of a Component

### Bare Minimum

The API to create a new component looks like this:

```javascript
var Component = React.createClass({
  render: function() {
    return React.DOM.span(null, "I'm so custom");
  }
});
```
As you can see, the only thing you must do is implement the render() method. ==This method must return a React component, and that’s why you see the span in the snippet; you cannot just return text.==

Using your component in an application is similar to using the DOM components:

```javascript
ReactDOM.render(
  React.createElement(Component),
  document.getElementById("app")
);
```

> `React.createElement()` is one way to create an “instance” of your component.

### Properties

```javascript
var Component = React.createClass({
  render: function() {
    return React.DOM.span(null, "My name is " + this.props.name);
  }
});

ReactDOM.render(
  React.createElement(Component, {
    name: "Bob",
  }),
  document.getElementById("app")
);
```

### State

```javascript
getInitialState: function() {
  return {
    text: this.props.text,
  };
},

_textChange: function(ev) {
  this.setState({
    text: ev.target.value,
  });
},

render: function() {
  return React.DOM.div(null,
    React.DOM.textarea({
      value: this.state.text,
      onChange: this._textChange,
    }),
    React.DOM.h3(null, this.state.text.length)
  );
}
```
> You always update the state with `this.setState()`, which takes an object and merges it with the already existing data in `this.state`. 

React uses synthetic events in order to wrap and normalize the browser events, which means no more browser inconsistencies. You can always rely on the fact that event.target is available to you in all browsers. That’s why in the TextAreaCounter snippet you only need `ev.target.value` and it just works. It also means the API to cancel events is the same in all browsers; in other words, `event.stopPropagation()` and `event.preventDefault()` work even in old IEs.

### Props v.s State

Properties are a mechanism for the outside world (users of the component) to configure your component. State is your internal data maintenance. So if you consider an analogy with object-oriented programming, `this.props` is like all the arguments passed to a class constructor, while `this.state` is a bag of your private properties.

### Assessing from the Outside

You don’t always have the luxury of starting a brand-new React app from scratch. Sometimes you need to hook into an existing application or a website and migrate to React one piece at a time. Luckily, React was designed to work with any pre-existing codebase you might have. After all, ==the original creators of React couldn’t stop the world and rewrite an entire huge application (Facebook) completely from scratch==.

```javascript
var myTextAreaCounter = ReactDOM.render(
  React.createElement(TextAreaCounter, {
    defaultValue: "Bob",
  }),
  document.getElementById("app")
);
```

Now you can use `myTextAreaCounter` to access the same methods and properties you normally access with this when inside the component. You can even play with the component using your JavaScript console.

> You have access to the entire component API from outside of your component. But you should use your new superpowers sparingly, if at all. Maybe if you need to get the dimensions of the node to make sure it fits your overall page, but not much else, really. It may be tempting to fiddle with the state of components you don’t own and “fix” them, but ==you’d be violating expectations and cause bugs down the road because the component doesn’t anticipate such intrusions==.

If you want to handle outside intrusion (change of properties) gracefully, you can prepare by implementing a method called `componentWillReceiveProps()`:

```javascript
componentWillReceiveProps: function(newProps) {
  this.setState({
    text: newProps.defaultValue,
  });
},
```

As you see, this method receives the new props object and you can set the state accordingly, as well as do any other work as required to keep the component in a sane state.

### Performance Win

The last lifecycle method you should know about, especially when building performance-critical parts of your app, is the method `shouldComponentUpdate(nextProps, nextState)`. It’s invoked before `componentWillUpdate()` and gives you a chance to cancel the update if you decide it’s not necessary.

```javascript
	shouldComponentUpdate(nextProps, nextState_ignore) {
	  return nextProps.count !== this.props.count;
	},
```

The implementation of `shouldComponentUpdate()` is pretty simple. And it’s not a big stretch to make this implementation generic, as you always compare this.props with nextProps and `this.state` with nextState. React provides one such generic implementation in the form of a mixin you can simply include in any component.

```javascript
  var Counter = React.createClass({
    name: 'Counter',
    mixins: [React.addons.PureRenderMixin],
  }
```


