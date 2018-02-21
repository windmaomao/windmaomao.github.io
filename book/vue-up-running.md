# Vue.js: Up & Running

## Preface

Front-end development is changing. Websites are becoming richer and more interactive, and requiring us as front-end developers to add increasingly complicated functionality and use more powerful tools. It’s easy enough to update a bit of text on a page using jQuery, but as we need to do more—updating large, interactive sections of a page; handling complicated state; client-side routing; and simply writing and organising a lot more code—it makes our jobs a lot easier if we use a JavaScript framework.

A framework is a JavaScript tool that makes it easier for developers to create rich, interactive websites. They contain functionality that enable us to make a fully functional web application; manipulating complicated data and displaying it on the page; handling routing client-side instead of having to rely on a server; sometimes even allowing us to create a full website that only needs to hit the server once for the initial download.

## Vue.js: The Basics

### Why Vue.js?

With Vue, the code providing the same functionality is much simpler to read and understand—even if you’re not yet familiar with Vue:

```html
<ul class="js-items">
  <li v-if="!items.length">Sorry, there are no items.</li>
  <li v-for="item in items" :class="{ 'is-blue': item.includes('blue') }">{{ item }}</li>
</ul>
<script>
  new Vue({
    el: '.js-items',
    data: {
      items: []
    },
    created() {
      fetch('https://example.com/items.json')
        .then((res) => res.json())
        .then((data) => {
          this.items = data.items;
        });
    }
  });
</script>
```

### Installation and setup

```html
<div id="app"></div>

<script src="https://unpkg.com/vue"></script>
<script>
  new Vue({
    el: '#app',
    created() {
      // This code will run on startup
    }
  });
</script>
```
vue-loader is a loader for webpack that allows you to write all the HTML, JavaScript and CSS for a component in a single file. 

```javascript
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      // ... your other loaders ...
    ]
  }
```

If you don’t already have a webpack setup or you’re struggling with adding vue-loader, don’t worry! I’ve never managed to set up webpack from scratch, either. There is a template you can use to set up a vue project using webpack that already has vue-loader installed. You can use it through vue-cli:

```bash
npm install --global vue-cli
vue init webpack
```

### Templates, data and directives

#### v-if vs v-show

If the value of a v-if directive evaluates to falsy, the element isn’t output to DOM. Compare that to v-show, which uses CSS to show and hide the element.

```html
<div v-if="true">one</div>
<div v-show="true">one</div>
```

#### v-for Looping in templates

Another directive I find myself using a lot is the v-for directive, which loops through the elements of an array or object, outputting the element multiple times.

```html
  <ul>
    <li v-for="dog in dogs">{{ dog }}</li>
  </ul>
  <ul>
    <li v-for="(rent, city) in averageRent">The average rent in {{ city }} is ${{ rent }}</li>
  </ul>
  <ul>
    <li v-for="n in 10">{{ n }}</li>
  </ul>
```

#### v-bind Binding arguments

When using v-bind with a lot of attributes, it can be pretty repetitive to write it out multiple times. There’s actually a shorter way to write it: **you can omit the v-bind part of the directive and just use a colon.**

```html
  <button v-bind:type="buttonType">Test button</button>
  <button v-bind:disabled="buttonDisabled">Test button</button>
  <button :disabled="buttonDisabled">Test button</button>
```

### Reactivity

In addition to creating the HTML in the first place, Vue also watches the data object for changes and updates the DOM when the data changes.

Reactivity is an extremely important feature and part of what makes Vue so powerful. You’ll be meeting it a lot both in this book and in any Vue projects you work on.

```html
<div id="app">
  <p>{{ seconds }} seconds have elapsed since you opened the page.</p>
</div>
<script>
  new Vue({
    el: '#app',
    data: {
      seconds: 0
    },
    created() {
      setInterval(() => {
        this.seconds++;
      }, 1000);
    }
  });
</script>
```

#### Adding new properties to an object

The easiest way is just to define the property on the object on initialisation. 

```javascript
formData: {
  name: undefined
}
```

Alternatively, and this is most useful if you’re updating multiple properties at the same time, you can use Object.assign() to create a new object and override the only object:

```javascript
vm.formData = Object.assign({}, vm.formData, {
  name: 'Some User'
});
```

Finally, Vue provides a function called Vue.set() which you can use to set reactive properties:

```javascript
Vue.set(vm.formData, 'name', 'Some User');
```

#### Setting items on an array

You can’t directly set items on an array using the index. There are two ways you can do this instead. Either you can use .splice() to remove the old item and add a new one. Or you can use `set` again.

```javascript
vm.dogs.splice(2, 1, 'Bob);
Vue.set(vm.dogs, 2, 'Bob');
```

#### Two way data binding

 You can use the v-model directive, which works on input elements to bind the value of the input to the corresponding property of the data object so that in addition to the input receiving the initial value of the data, when the input is updated the data is updated, too.
 
```html
<div id="app">
  <input type="text" v-model="inputText">
  <p>inputText = {{ inputText }}</p>
</div>
```

#### Setting HTML dynamically

Sometimes you might want to set the HTML of an element from an expression.

```html
<div v-html="yourHtml"></div>
```

Be careful with this! By writing HTML to the page from a variable, you are potentially opening yourself up to XSS vulnerabilities. Never put user input in v-html or allow them to modify anything that goes through v-html without carefully validating and escaping what they’ve written first. You could accidentally allow you users to execute malicious script tags on your site. ==**Only use v-html with data you trust.**==

### Methods

Functions are pretty neat. They allow us to take a piece of logic and store it in a reusable way so that we can use it multiple times without repeating the code. It’s possible to use them in your Vue templates too, as methods.

```html
<div id="app">
  <ul>
    <li v-for="number in filterPositive(numbers)">{{ number }}</li>
  </ul>
</div>
<script>
  new Vue({
    el: '#app',
    data: {
      numbers: [-5, 0, 2, -1, 1, 0.5]
    },
    methods: {
      filterPositive(numbers) {
        return numbers.filter((number) => number >= 0);
      }
    }
  });
</script>
```

==**In a method, this refers to the component that the method is attached to. You can access properties on the data object and other methods using this.**==


## State management with Vuex

