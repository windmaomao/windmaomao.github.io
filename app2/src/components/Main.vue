<template>
  <div class="main" v-bind:class="{ 'with-sidebar': sidebar }">
    <div class="sidebar" v-show="sidebar">
      <div id="toc" data-toc="h2,h3"></div>
      <div id="back-top">
          <a>Back to top</a>
      </div>
    </div>
    <section class="section">
      <div id="write" class="container" v-html="compiled"></div>
    </section>
  </div>
</template>

<script>
var md = require('markdown-it')()
// var toc = require('../../static/js/toc.js')

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
      console.log('compiled')
    }
  },
  created: function() {
    // console.log(document.getElementById("toc"))
  },
  mounted: function() {
    console.log(document.getElementById('toc'))
  }
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
</style>
