<template>
  <div class="main" v-bind:class="{ 'with-sidebar': sidebar }">
    <template v-show="source">
      <div class="sidebar" v-show="sidebar">
        <div id="toc" data-toc="h1,h2,h3" data-toc-offset="-100"></div>
        <!-- <div id="back-top">
            <a href="#app">Back to top</a>
        </div> -->
      </div>
      <section class="section">
        <div id="write" class="container" v-html="compiled"></div>
      </section>
    </template>
  </div>
</template>

<script>
var md = require('markdown-it')()
var emoji = require('markdown-it-emoji/light')
var toc = require('../../static/js/toc.js')

md.use(emoji)

export default {
  name: 'Main',
  data () {
    return {
      sidebar: true
    }
  },
  props: ['source'],
  computed: {
    compiled: function() {
      return md.render(this.source)
    }
  },
  watch: {
    compiled: function() {
      this.$nextTick(() => {
        toc()
      })
    }
  },
  created: function() {},
  mounted: function() {}
}
</script>

<style>
#write {
  max-width: 40em;
  margin: 0 auto;
  padding-top: 2em 60px;
  min-height: calc(100vh - 6em);
}
.sidebar {
  display: none;
  position: fixed;
  right: 0;
  top: 100px;
  bottom: 5px;
  width: 240px;
  margin: 0;
  font-size: 12px;
  border-left: 1px solid #eee;
  overflow-y: auto;
}
@media only screen
and (min-width : 1200px) {
  .main.with-sidebar {
    padding-right: 60px;
  }
  .sidebar, #toc-button {
    display: block;
  }
}
#back-top {
  margin: 10px 18px;
}
#toc > ul {
  padding: 0 8px;
  margin: 0;
}
#toc li {
  list-style: none;
  text-align: initial;
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: 18px;
}
#toc a {
  color: inherit;
  text-align: left;
  text-decoration: none;
  font-size: 12px;
}
#toc li.toc-visible {
  font-weight: bold;
}
#toc li.toc-h1 {
  opacity: .6;
  margin: 10px;
}
#toc li.toc-h1.toc-visible {
  font-weight: normal;
  opacity: 1;
}
#toc li.toc-h1 a {
  font-size: 16px;
}
#toc li.toc-h2 {
  padding-left: 10px;
}
#toc li.toc-h2 a {
  font-size: 14px;
}
#toc li.toc-h3 {
  padding-left: 25px;
}
</style>
