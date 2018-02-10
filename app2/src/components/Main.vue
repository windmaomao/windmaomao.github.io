<template>
  <div class="main" v-bind:class="{ 'with-sidebar': sidebar }">
    <template v-show="source">
      <div class="sidebar" v-show="sidebar">
        <div id="toc" data-toc="h2,h3" data-toc-offset="-100"></div>
        <div id="back-top">
            <a>Back to top</a>
        </div>
      </div>
      <section class="section">
        <div id="write" class="container" v-html="compiled"></div>
      </section>
    </template>
  </div>
</template>

<script>
var md = require('markdown-it')()
var toc = require('../../static/js/toc.js')

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
#back-top {
  margin: 10px 30px;
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
  font-size: 12px;
  text-decoration: none;
}
#toc li.toc-visible {
  /* border-right: 2px dotted #e04221; */
  font-weight: bold;
}
#toc li.toc-h2 {
  padding-left: 10px;
}
#toc li.toc-h2 a {
  /* font-weight: bold; */
  font-size: 110%;
}
#toc li.toc-h3 {
  padding-left: 25px;
}
</style>
