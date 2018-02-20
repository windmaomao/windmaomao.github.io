# React: Up & Running

## Preface

Comments: The uniqueness of `React` is that it trys to ONLY solve one problem when making web application, that is how to simply write a line that injects some `HTML` (or kinda) into existing `HTML` tag. Many library approaches this problem with more or less similar way but some difference in the detail. 

IMO, `React` approaches this problem with the brutal force by writting a line connecting its own element and injecting into the native `DOM` element. The idea is that as long as the `React` element can make UI elements easy or quickly enough, this syntax will holds perfectly while keeping the `DOM` injection footprint small, ex. most of time just once for entire page.

This idea isn't new. For instance, one aspect of `jQuery`  is to manipulate `DOM` elements, including add and remove operation. What is really astonishing here is that `React` want to solely reply on this render approach in generating all elements on the fly, again and again, especially when there's change to the component. Therefore the controlling mechanism of the element returns to the input of the element, ex. data or configuration. This is a concept shift.

However I do not think this approach is a one for all solution for all websites, especially not all websites over the internet is web app yet. There're still millions or trillions of web pages. Designer or content provider will be still comfortable with native internet language, such as HTML. Turning things into elements isn't going to be the main stream. Media can change, but the format of the content rarely do. When you get older, book feels more special to you. Words you type on the computer doesn't mean much if it's not written in a book like language. 


## Hello World

```javascript
ReactDOM.render(
  React.DOM.h1(null, "Hello World!"), // React Element
  document.getElementById("app")      // DOM Element
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

## Excel: A Fancy Table

Given 

```javascript
var headers = [
  "Book", "Author", "Language", "Published", "Sales"
];

var data = [
  ["The Lord of the Rings", "J. R. R. Tolkien",
    "English", "1954–1955", "150 million"],
  ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry",
    "French", "1943", "140 million"],
  ["Harry Potter and the Philosopher's Stone", "J. K. Rowling",
    "English", "1997", "107 million"],
  ["And Then There Were None", "Agatha Christie",
    "English", "1939", "100 million"],
  ["Dream of the Red Chamber", "Cao Xueqin",
    "Chinese", "1754–1791", "100 million"],
  ["The Hobbit", "J. R. R. Tolkien",
    "English", "1937", "100 million"],
  ["She: A History of Adventure", "H. Rider Haggard",
    "English", "1887", "100 million"],
];
```

Render

```javascript
getInitialState: function() {
  return {data: this.props.initialData};
},

render: function() {
  return (
    React.DOM.table(null,
      React.DOM.thead(null,
        React.DOM.tr(null,
          this.props.headers.map(function(title, idx) {
            return React.DOM.th({key: idx}, title);
          })
        )
      ),
      React.DOM.tbody(null,
        this.state.data.map(function(row, idx) {
          return (
            React.DOM.tr({key: idx},
              row.map(function(cell, idx) {
                return React.DOM.td({key: idx}, cell);
              })
            )
          );
        })
      )
    )
  );
}
```

and for multiple parts 

```javascript
render: function() {
  return (
    React.DOM.div(null,
      this._renderToolbar(),
      this._renderTable()
    )
  );
},

_renderToolbar: function() {
  // TODO
},

_renderTable: function() {
  // same as the function formerly known as `render()`
},
```

> As you know now, your components worry about their state and let React render and rerender whenever appropriate. This means that given the same data (state and properties), the application will look exactly the same, no matter what changed before or after this particular data state. This gives you a great debugging-in-the-wild opportunity.

Imagine someone encounters a bug while using your app—she can click a button to report the bug without needing to explain what happened. ==The bug report can just send you back a copy of `this.state` and `this.props`, and you should be able to re-create the exact application state and see the visual result.==

## JSX

One inconvenience with that many function calls is that it’s a little hard to keep up with all the parentheses and curly braces you need to close. There’s an easier way: `JSX`.

Babel (formerly known as 6to5) is an open source transpiler that supports the latest JavaScript features and also includes `JSX` support. It’s a prerequisite to using `JSX`.

 the JSX transform is lightweight and simple: the JSX source of “Hello World” becomes a series of calls to React.createElement(), using the same functional syntax you’re already familiar with. It’s just JavaScript, so it’s easy to read and understand.

## Setup Development

### Modules

> The JavaScript community came up with several ideas for JavaScript modules and one of the ideas that was widely adopted is `CommonJS`. In `CommonJS`, you have code in a file that, once done, exports one or more symbols.

```javascript
var React = require('react');
var Logo = React.createClass({/* ... */});
module.exports = Logo;
```

or in a simple function

```javascript
var React = require('react');
module.exports = function Foo() {
  return React.createElement('h1', null, 'Hello');
}
```

Commenting out the first line `React` will skip including of the `React` library if you intend to include it in a separate file or link.

### ECMAScript Modules

ECMAScript specifications propose to take this idea even further and introduce new syntax. You can benefit from the new syntax because `Babel` has your back when it comes to transpiling the new syntax down to something browsers can stomach.

When declaring dependencies on other modules, instead of `require` you do `import`.

```javascript
import React from 'react';

export default Logo
```

### Classes

ECMAScript now has classes, so let’s benefit from the new syntax.

```javascript
class Logo extends React.Component {
  someMethod() {}
  another() {}
  render() {
    return <div className="Logo" />;
  }
}
```

### Altogether

Here's the final version of `app.js`

```javascript
'use strict'; // always a good idea

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';

ReactDOM.render(
  <h1>
    <Logo /> Welcome to The App!
  </h1>,
  document.getElementById('app')
);
```

and `Logo.js`

```javascript
import React from 'react';

class Logo extends React.Component {
  render() {
    return <div className="Logo" />;
  }
}

export default Logo
```

### Build

First, transpile JavaScript with Babel:

```bash
babel --presets react,es2015 js/source -d js/build
```

Next comes packaging:

```bash
browserify js/build/app.js -o bundle.js
```

Package `CSS`

```bash
cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' > bundle.css
```

Watch changes

```bash
watch "sh scripts/build.sh" js/source css
```

### Deploy

Deploying your app is now not a big deal, because you’re already building as you go, so there shouldn’t be any surprises. Before your app hits live users, you may need to do some extra processing, though, such as minification and image optimization.

```bash
uglify -s bundle.js -o __deployme/bundle.js
cssshrink bundle.css > __deployme/bundle.css
```

## Building an App

### Button element

```jsx
import classNames from 'classnames';
import React, {PropTypes} from 'react';

function Button(props) {
  const cssclasses = classNames('Button', props.className);
  return props.href
    ? <a {...props} className={cssclasses} />
    : <button {...props} className={cssclasses} />;
}

Button.propTypes = {
  href: PropTypes.string,
};

export default Button
```

### Suggest component

```jsx
import React, {Component, PropTypes} from 'react';

class Suggest extends Component {

  getValue() {
    return this.refs.lowlevelinput.value;
  }

  render() {
    const randomid = Math.random().toString(16).substring(2);
    return (
      <div>
        <input
          list={randomid}
          defaultValue={this.props.defaultValue}
          ref="lowlevelinput"
          id={this.props.id} />
        <datalist id={randomid}>{
          this.props.options.map((item, idx) =>
            <option value={item} key={idx} />
          )
        }</datalist>
      </div>
    );
  }
}

Suggest.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

export default Suggest
```

### Rating component

```jsx
import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';

class Rating extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rating: props.defaultValue,
      tmpRating: props.defaultValue,
    };
  }

  getValue() { // all our inputs provide this
    return this.state.rating;
  }

  setTemp(rating) { // on mouse over
    this.setState({tmpRating: rating});
  }

  setRating(rating) { // on click
    this.setState({
      tmpRating: rating,
      rating: rating,
    });
  }

  reset() { // on mouse out, go back to the real rating
    this.setTemp(this.state.rating);
  }

  componentWillReceiveProps(nextProps) { // react to outside changes
    this.setRating(nextProps.defaultValue);
  }
    
  render() {
    const stars = [];
    for (let i = 1; i <= this.props.max; i++) {
      stars.push(
        <span
          className={i <= this.state.tmpRating ? 'RatingOn' : null}
          key={i}
          onClick={!this.props.readonly && this.setRating.bind(this, i)}
          onMouseOver={!this.props.readonly && this.setTemp.bind(this, i)}
        >
          &#9734;
        </span>);
    }
    return (
      <div
        className={classNames({
          'Rating': true,
          'RatingReadonly': this.props.readonly,
        })}
        onMouseOut={this.reset.bind(this)}
      >
        {stars}
        {this.props.readonly || !this.props.id
          ? null
          : <input
              type="hidden"
              id={this.props.id}
              value={this.state.rating} />
        }
      </div>
    );
  }    
}

Rating.propTypes = {
  defaultValue: PropTypes.number,
  readonly: PropTypes.bool,
  max: PropTypes.number,
};

Rating.defaultProps = {
  defaultValue: 0,
  max: 5,
};

export default Rating
```

### Dialog component

```jsx
import Button from './Button';
import React, {Component, PropTypes} from 'react';

class Dialog extends Component {
  componentWillUnmount() {
    document.body.classList.remove('DialogModalOpen');
  }

  componentDidMount() {
    if (this.props.modal) {
      document.body.classList.add('DialogModalOpen');
    }
  }
  
  render() {
    return (
      <div className={this.props.modal ? 'Dialog DialogModal' : 'Dialog'}>
        <div className={this.props.modal ? 'DialogModalWrap' : null}>
          <div className="DialogHeader">{this.props.header}</div>
          <div className="DialogBody">{this.props.children}</div>
          <div className="DialogFooter">
            {this.props.hasCancel
              ? <span
                  className="DialogDismiss"
                  onClick={this.props.onAction.bind(this, 'dismiss')}>
                  Cancel
                </span>
              : null
            }
            <Button onClick={this.props.onAction.bind(this,
                this.props.hasCancel ? 'confirm' : 'dismiss')}>
              {this.props.confirmLabel}
            </Button>
          </div>
        </div>
      </div>
    );
  }  
}

Dialog.propTypes = {
  header: PropTypes.string.isRequired,
  confirmLabel: PropTypes.string,
  modal: PropTypes.bool,
  onAction: PropTypes.func,
  hasCancel: PropTypes.bool,
};

Dialog.defaultProps = {
  confirmLabel: 'ok',
  modal: false,
  onAction: () => {},
  hasCancel: true,
};

export default Dialog
```



### Excel component

```jsx
import Actions from './Actions';
import Dialog from './Dialog';
import Form from './Form';
import FormInput from './FormInput';
import Rating from './Rating';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class Excel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.initialData,
      sortby: null, // schema.id
      descending: false,
      edit: null, // [row index, schema.id],
      dialog: null, // {type, idx}
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({data: nextProps.initialData});
  }

  _fireDataChange(data) {
    this.props.onDataChange(data);
  }

  _sort(key) {
    let data = Array.from(this.state.data);
    const descending = this.state.sortby === key && !this.state.descending;
    data.sort(function(a, b) {
      return descending
        ? (a[column] < b[column] ? 1 : -1)
        : (a[column] > b[column] ? 1 : -1);
    });
    this.setState({
      data: data,
      sortby: key,
      descending: descending,
    });
    this._fireDataChange(data);
  }

  _showEditor(e) {
    this.setState({edit: {
      row: parseInt(e.target.dataset.row, 10),
      key: e.target.dataset.key,
    }});
  }

  _save(e) {
    e.preventDefault();
    const value = this.refs.input.getValue();
    let data = Array.from(this.state.data);
    data[this.state.edit.row][this.state.edit.key] = value;
    this.setState({
      edit: null,
      data: data,
    });
    this._fireDataChange(data);
  }

  _actionClick(rowidx, action) {
    this.setState({dialog: {type: action, idx: rowidx}});
  }

  _deleteConfirmationClick(action) {
    if (action === 'dismiss') {
      this._closeDialog();
      return;
    }
    let data = Array.from(this.state.data);
    data.splice(this.state.dialog.idx, 1);
    this.setState({
      dialog: null,
      data: data,
    });
    this._fireDataChange(data);
  }

  _closeDialog() {
    this.setState({dialog: null});
  }

  _saveDataDialog(action) {
    if (action === 'dismiss') {
      this._closeDialog();
      return;
    }
    let data = Array.from(this.state.data);
    data[this.state.dialog.idx] = this.refs.form.getData();
    this.setState({
      dialog: null,
      data: data,
    });
    this._fireDataChange(data);
  }

  render() {
    return (
      <div className="Excel">
        {this._renderTable()}
        {this._renderDialog()}
      </div>
    );
  }

  _renderDialog() {
    if (!this.state.dialog) {
      return null;
    }
    switch (this.state.dialog.type) {
      case 'delete':
        return this._renderDeleteDialog();
      case 'info':
        return this._renderFormDialog(true);
      case 'edit':
        return this._renderFormDialog();
      default:
        throw Error(`Unexpected dialog type ${this.state.dialog.type}`);
    }
  }

  _renderDeleteDialog() {
    const first = this.state.data[this.state.dialog.idx];
    const nameguess = first[Object.keys(first)[0]];
    return (
      <Dialog
        modal={true}
        header="Confirm deletion"
        confirmLabel="Delete"
        onAction={this._deleteConfirmationClick.bind(this)}
      >
        {`Are you sure you want to delete "${nameguess}"?`}
      </Dialog>
    );
  }

  _renderFormDialog(readonly) {
    return (
      <Dialog
        modal={true}
        header={readonly ? 'Item info' : 'Edit item'}
        confirmLabel={readonly ? 'ok' : 'Save'}
        hasCancel={!readonly}
        onAction={this._saveDataDialog.bind(this)}
      >
        <Form
          ref="form"
          fields={this.props.schema}
          initialData={this.state.data[this.state.dialog.idx]}
          readonly={readonly} />
      </Dialog>
    );
  }

  _renderTable() {
    return (
      <table>
        <thead>
          <tr>{
            this.props.schema.map(item => {
              if (!item.show) {
                return null;
              }
              let title = item.label;
              if (this.state.sortby === item.id) {
                title += this.state.descending ? ' \u2191' : ' \u2193';
              }
              return (
                <th
                  className={`schema-${item.id}`}
                  key={item.id}
                  onClick={this._sort.bind(this, item.id)}
                >
                  {title}
                </th>
              );
            }, this)
          }
          <th className="ExcelNotSortable">Actions</th>
          </tr>
        </thead>
        <tbody onDoubleClick={this._showEditor.bind(this)}>
          {this.state.data.map((row, rowidx) => {
            return (
              <tr key={rowidx}>{
                Object.keys(row).map((cell, idx) => {
                  const schema = this.props.schema[idx];
                  if (!schema || !schema.show) {
                    return null;
                  }
                  const isRating = schema.type === 'rating';
                  const edit = this.state.edit;
                  let content = row[cell];
                  if (!isRating && edit && edit.row === rowidx && edit.key === schema.id) {
                    content = (
                      <form onSubmit={this._save.bind(this)}>
                        <FormInput ref="input" {...schema} defaultValue={content} />
                      </form>
                    );
                  } else if (isRating) {
                    content = <Rating readonly={true} defaultValue={Number(content)} />;
                  }
                  return (
                    <td
                      className={classNames({
                        [`schema-${schema.id}`]: true,
                        'ExcelEditable': !isRating,
                        'ExcelDataLeft': schema.align === 'left',
                        'ExcelDataRight': schema.align === 'right',
                        'ExcelDataCenter': schema.align !== 'left' && schema.align !== 'right',
                      })}
                      key={idx}
                      data-row={rowidx}
                      data-key={schema.id}>
                      {content}
                    </td>
                  );
                }, this)}
                <td className="ExcelDataCenter">
                  <Actions onAction={this._actionClick.bind(this, rowidx)} />
                </td>
              </tr>
            );
          }, this)}
        </tbody>
      </table>
    );
  }
}

Excel.propTypes = {
  schema: PropTypes.arrayOf(
    PropTypes.object
  ),
  initialData: PropTypes.arrayOf(
    PropTypes.object
  ),
  onDataChange: PropTypes.func,
};

export default Excel
```

### Whinepad component

```jsx
Whinepad.propTypes = {
  schema: PropTypes.arrayOf(
    PropTypes.object
  ),
  initialData: PropTypes.arrayOf(
    PropTypes.object
  ),
};

export default Whinepad;
After you’ve read through the implementation of Excel, this one should not be too difficult:

class Whinepad extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.initialData,
      addnew: false,
    };
    this._preSearchData = null;
  }

  _addNewDialog() {
    this.setState({addnew: true});
  }

  _addNew(action) {
    if (action === 'dismiss') {
      this.setState({addnew: false});
      return;
    }
    let data = Array.from(this.state.data);
    data.unshift(this.refs.form.getData());
    this.setState({
      addnew: false,
      data: data,
    });
    this._commitToStorage(data);
  }

  _onExcelDataChange(data) {
    this.setState({data: data});
    this._commitToStorage(data);
  }

  _commitToStorage(data) {
    localStorage.setItem('data', JSON.stringify(data));
  }

  _startSearching() {
    this._preSearchData = this.state.data;
  }

  _doneSearching() {
    this.setState({
      data: this._preSearchData,
    });
  }

  _search(e) {
    const needle = e.target.value.toLowerCase();
    if (!needle) {
      this.setState({data: this._preSearchData});
      return;
    }
    const fields = this.props.schema.map(item => item.id);
    const searchdata = this._preSearchData.filter(row => {
      for (let f = 0; f < fields.length; f++) {
        if (row[fields[f]].toString().toLowerCase().indexOf(needle) > -1) {
          return true;
        }
      }
      return false;
    });
    this.setState({data: searchdata});
  }

  render() {
    return (
      <div className="Whinepad">
        <div className="WhinepadToolbar">
          <div className="WhinepadToolbarAdd">
            <Button
              onClick={this._addNewDialog.bind(this)}
              className="WhinepadToolbarAddButton">
              + add
            </Button>
          </div>
          <div className="WhinepadToolbarSearch">
            <input
              placeholder="Search..."
              onChange={this._search.bind(this)}
              onFocus={this._startSearching.bind(this)}
              onBlur={this._doneSearching.bind(this)} />
          </div>
        </div>
        <div className="WhinepadDatagrid">
          <Excel
            schema={this.props.schema}
            initialData={this.state.data}
            onDataChange={this._onExcelDataChange.bind(this)} />
        </div>
        {this.state.addnew
          ? <Dialog
              modal={true}
              header="Add new item"
              confirmLabel="Add"
              onAction={this._addNew.bind(this)}
            >
              <Form
                ref="form"
                fields={this.props.schema} />
            </Dialog>
          : null}
      </div>
    );
  }
}
```

### Application main entry

```jsx
'use strict';

import Logo from './components/Logo';
import React from 'react';
import ReactDOM from 'react-dom';
import Whinepad from './components/Whinepad';
import schema from './schema';

let data = JSON.parse(localStorage.getItem('data'));

// default example data, read from the schema
if (!data) {
  data = {};
  schema.forEach(item => data[item.id] = item.sample);
  data = [data];
}

ReactDOM.render(
  <div>
    <div className="app-header">
      <Logo /> Welcome to Whinepad!
    </div>
    <Whinepad schema={schema} initialData={data} />
  </div>,
  document.getElementById('pad')
);
```

