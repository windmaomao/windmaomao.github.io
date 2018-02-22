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

### Computed properties

Computed properties sit halfway between properties of the data object and methods: you can access them as if they were properties of the data object, but they are specified as functions.

```html
<div id="app">
  <p>Sum of numbers: {{ numberTotal }}</p>
</div>
<script>
  new Vue({
    el: '#app',
    data: {
      numbers: [5, 8, 3]
    },
    computed: {
      numberTotal() {
        return numbers.reduce((sum, val) => sum + val);
      }
    }
  });
</script>
```

### Watchers

Watchers allow us to watch a property of the data object or a computed property for changes.

```javascript
  new Vue({
    el: '#app',
    data: {
      count: 0
    },
    watchers: {
      count() {
        // this.count has been changed!
      }
    }
  });
```

#### Getting the old value 

```javascript
watch: {
  inputValue(val, oldVal) {
    console.log(val, oldVal);
  }
}
```

#### Deep watching

```javascript
watch: {
  formData: {
    handler() {
      console.log(val, oldVal);
    },
    deep: true
  }
}
```

### Filters

Filters, also often seen in other templating languages, are a convenient way of manipulating data in your templates. I find them great for making simple display changes to strings and numbers: for example, changing a string to the correct case or displaying a number in a human-readable format.

```html
<div id="app">
  <p>Product one cost: {{ productOneCost | formatCost }}</p>
  <p>Product two cost: {{ productTwoCost | formatCost }}</p>
  <p>Product three cost: {{ productThreeCost | formatCost }}</p>
</div>
<script>
  new Vue({
    el: '#app',
    data: {
      productOneCost: 998,
      productTwoCost: 2399,
      productThreeCost: 5300
    },
    filters: {
      formatCost(value) {
        return '$' + (value / 100).toFixed(2);
      }
    }
  });
</script>
```

### Ref Accessing elements

Sometimes you might find yourself needing to access an element directly in the DOM—maybe you’re using a third party library that isn’t written to work with Vue, or maybe you want to do something that Vue just can’t quite handle itself. You can use ref to access the element directly without having to use querySelector or one of the other native ways to select an element from the DOM.

```html
<canvas ref="myCanvas"></canvas>
```

Then in your JavaScript, it will be stored on the this.$refs object as whatever you set the ref attribute as. In this case, **you can access it using `this.$refs.myCanvas`**.

### Inputs and events

To bind an event listener to an element, you can use the v-on directive. It takes the name of the event as the argument, and the event listener as the passed value.

```html
<div id="app">
  <button v-on:click="increase">Click to increase counter</button>
  <p>You've clicked the button {{ counter }}</p> times.
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      counter: 0
    },
    methods: {
      increase(e) {
        this.counter++;
      }
    }
  });
</script>
```

Similarly to the `v-bind` directive, the v-on also has a shorter way of writing it. Instead of writing `v-on:click`, you can write just `@click`.

```html
<button @click="increase">Click to increase counter</button>
```

#### Event modifiers

To prevent the default action of the event from happening—for example, to stop a page navigation happening when a link is clicked—you can use the .prevent modifier:

```html
<a @click.prevent="handleClick">...</a>
<button @click.stop="handleClick">...</button>
<button @click.once="handleFirstClick">...</button>
<div @click.capture="handleCapturedClick">...</div>
<div @click.self="handleSelfClick">...</div>
<div @click.stop.capture.once></div>
```

In addition to those event modifiers, there are also “key” modifiers - these are used on keyboard events so that you can only fire the event when a certain key is pressed. 

```html
<div id="app">
  <form @keyup="handleKeyup">...</form>
</div>

<script>
  new Vue({
    el: '#app',
    methods: {
      handleKeyup(e) {
        if (e.keyCode === 27) {
          // do something
        }
      }
    }
  });
</script>
```

The code inside the if statement will only run when the key with keyCode 27—the escape key—is pressed. However, Vue has a way to do this built in as a modifier. You can just specify the key code as the modifier.

```html
<form @keyup.27="handleEscape">...</form>
<form @keyup.shift-left="handleShiftLeft">...</form>
<input @keydown.enter.exact="handleEnter">
```

### Lifecycle hooks

Vue has eight lifecycle hooks, but they're pretty eash to remember because four of  them are just "before" hooks that are fired before the other ones. 

- `beforeCreate` is fired before the instance is initialised.
- `created` is fired after the instance has been initialised but before it is added to the `DOM`.
- `beforeMount` is fired once the element is ready to be added to the `DOM` but before it has been.
- `mounted` is fired once the element has been created (but not necessarily added to the DOM: use `nextTick` for that).
- `beforeUpdate` is fired when there are changes to be made to the `DOM` output.
- `updated` is fired after changes have been written to the `DOM`.
- `beforeDestroy` is fired when the component is about to be destroyed and removed from the `DOM`.
- `destroyed` is fired once the component has been destroyed.

### Custom directives

In addition to the built in directives such as v-if, v-model and v-html, it’s possible to create your own custom directives. ==**Directives are great for when you want to do something directly with the `DOM`—if you find that you’re not accessing the `DOM`, you’d probably be better off with a component instead.**==

```html
<p v-blink>This content will blink</p>

<script>
Vue.directive('blink', {
  bind(el) {
    let isVisible = true;
    setInterval(() => {
      isVisible = !isVisible;
      el.style.visibility = isVisible ? 'visible' : 'hidden';
    }, 1000);
  }
});
</script>
```

#### Hook arguments

We’ve seen before that directives accept arguments (v-bind:class), modifiers (v-on.once) and values (v-if="expression"). It’s possible to access all of these using the second argument passed to the hook function, binding.

```javascript
Vue.directive('blink', {
  bind(el, binding) {
    let isVisible = true;
    setInterval(() => {
      isVisible = !isVisible;
      el.style.visibility = isVisible ? 'visible' : 'hidden';
    }, binding.value || 1000);
  }
});
```

### Transitions and animations

Let’s say we want to add a simple transition to it: we just want it to fade in and out when the visibility is toggled. To do that, we can wrap the div in a transition component, like so:

```html
<transition name="fade">
  <div v-if="divVisible">This content is sometimes hidden</div>
</transition>
```

That by itself won’t do anything (it will behave exactly the way it did before we added the <transition> element), but if we add the following CSS, we’ll get our fade transition:

```css
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
```

#### Javascript animations

In addition to CSS animations, the <transition> component also provides hooks that you can use to power JavaScript animations.

```html
<transition
  v-on:before-enter="handleBeforeEnter"
  v-on:enter="handleEnter"
  v-on:leave="handleLeave>
  <div v-if="divVisible">...</div>
</transition>
<script>
new Vue({
  el: '#app',
  data: {
    divVisible: false
  },
  methods: {
    handleBeforeEnter(el) {
      el.style.opacity = 0;
    },
    handleEnter(el, done) {
      TweenLite.to(el, 0.6, { opacity: 1, onComplete: done });
    },
    handleLeave(el, done) {
      TweenLite.to(el, 0.6, { opacity: 0, onComplete: done });
    }
  }
});
</script>
```

Using JavaScript animations we can create much more complicated animations than we can with `CSS` transitions, including multiple steps, or a different transition every time. `CSS` transitions are generally more performant though, so stick with them unless you actually need some functionality you can’t get with just `CSS` transitions.


## Components in Vue.js

A component is a self-contained piece of code that represents a part of the page. Components have their own data, their own JavaScript, and often their own styling. They can contain other components, and they can communicate with each other. A component could be something as small as a button or an icon, or it could be something bigger like a form you reuse a lot throughout your site or an entire page.

The main advantage of separating your code into components is that it means that the code responsible for each bit of the page is close to the rest of the code for that component - no more having to search for a selector in a tonne of different JavaScript files to see what is adding that event listener, the JavaScript is right there next to the HTML! It also means that ==as they’re self-contained, you can make sure that none of the code inside a component will affect any other components or have any side effects==.

### Component basics

Let’s dive right in and demonstrate a simple component.

```html
<div id="app">
  <custom-button></custom-button>
</div>
<script>
  const CustomButton = {
    template: '<button>Custom button</button>'
  };

  new Vue({
    el: '#app',
    components: {
      CustomButton
    }
  });
</script>
```

You can also register components globally using the Vue.component() method, as follows:

```javascript
Vue.component('custom-button', {
  template: '<button>Custom button</button>'
});
```
You can then use it the same way it was used in the previous example in the template, but you don’t need to specify it in the components object anymore - it’s available everywhere.

#### Prop validation

To specify the type of a prop, pass it a native constructor such as Number, String or Object, or a custom constructor function which will be checked with instanceof.

```javascript
Vue.component('price-display', {
  props: {
    price: Number,
    price: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      default: '$'
    }
  }
});
```


## Styling with Vue

### Class binding

```html
<div id="app">
  <div v-bind:class="[firstClass, secondClass]">
    ...
  </div>
</div>
<script>
  new Vue({
    el: '#app',
    data: {
      firstClass: 'foo'
    },
    computed: {
      secondClass() {
        return 'bar';
      }
    }
  });
</script>
```

It’s also possible to mix both arrays and objects by using the objects inside an array for when you want to add classes from both variables and conditionally add classes.

```html
<div v-bind:class="[
    'my-class',
    classFromVariable,
    { 'conditional-class': hasClass }
  ]"></div>
```

### Inline style binding

Similar to v-bind:class, covered in the previous section, Vue also has a special helper for the style attribute. Instead of you having to concatenate strings to specify inline styles, you can specify them as an object instead:

```html
<div v-bind:style="{ fontWeight: 'bold', color: 'red' }"></div>
```

### Scoped CSS with vue-loader

Let’s take a look at how it works. If we add the scoped attribute to the previous style tag (so that it is now `<style scoped>`), the following HTML is output:

```html
<p data-v-e0e8ddca>The number is <span data-v-e0e8ddca class="number">10</span></p>

<style>
.number[data-v-e0e8ddca] {
  font-weight: bold;
}
</style>
```


### CSS modules with vue-loader

As an alternative to scoped CSS, you can also use CSS modules with vue-loader.

```html
<template>
  <p>The number is <span :class="$style.number">{{ number }}</span></p>
</template>

<style module>
  .number {
    font-weight: bold;
  }
</style>
```

### Preprocessors

You can configure vue-loader to run your CSS, JavaScript and HTML through preprocessors. Say you want to write SCSS instead of CSS to take advantage of features like nesting and variables. You can do that in two step: first, install `sass-loader` and `node-sass` using npm, and then add `lang="scss"` to your style tag:

```html
<style lang="scss" scoped>
  $color: red;

  .number {
    font-weight: bold;
    color: $color;
  }
</style>
``` 

## Render functions and JSX

## Client-side routing with vue-router 

## State management with Vuex

## Testing Vue components

