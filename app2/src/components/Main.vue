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
        <div class="container" id="write" v-html="compiled"></div>
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
      // source: '# Hello World'
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

<style scoped>

</style>
