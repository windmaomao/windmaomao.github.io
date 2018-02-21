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

## State management with Vuex

