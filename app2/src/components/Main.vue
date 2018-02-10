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
export default {
  name: 'Main',
  data () {
    return {
      sidebar: true,
      source: 'Welcome to Your Vue.js App',
      compiled: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
