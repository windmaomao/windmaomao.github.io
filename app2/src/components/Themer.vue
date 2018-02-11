<template>
  <div class="control has-icons-left" id="themer">
    <a class="select">
      <select v-model="theme" v-on:change="switchTheme">
        <option v-bind:key="s" v-for="s in themes">{{ s }}</option>
      </select>
    </a>
    <span class="icon is-small is-left">&Tstrok;</span>
  </div>
</template>

<script>
export default {
  name: 'Themer',
  data() {
    return {
      themes: [],
      theme: 'whitey'
    }
  },
  methods: {
    switchTheme: function() {
      this.$emit('theme', this.theme)
    }
  },
  created: function() {
    this.theme = localStorage.getItem('qp-theme') || this.theme
    this.themes = ['academic', 'dropbox', 'github', 'gothic',
      'han', 'newsprint', 'pixyll', 'whitey']
  }
}
</script>

<style>
#themer {
  position: fixed;
  top: 8px;
  right: 10px;
  z-index: 2000;
}
</style>
