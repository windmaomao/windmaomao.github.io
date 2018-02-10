<template>
  <div class="main" v-bind:class="{ 'with-sidebar': sidebar }">
    <template v-if="source">
      <div class="sidebar" v-show="sidebar">
        <div id="toc"></div>
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
</style>
