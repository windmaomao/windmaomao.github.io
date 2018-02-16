# React: Up & Running

## Preface




## Hello World

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

The API to create a new component looks like this:

```javascript
var Component = React.createClass({
  render: function() {
    return React.DOM.span(null, "I'm so custom");
  }
});
```
As you can see, the only thing you must do is implement the render() method. ==This method must return a React component, and that’s why you see the span in the snippet; you cannot just return text.==

