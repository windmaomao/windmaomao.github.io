<template>
  <div class="control has-icons-left" id="themer">
    <a class="select">
      <select v-model="theme" v-on:change="switchTheme">
        <option v-bind:value="s"
          v-bind:key="s" v-for="s in themes">{{ s | capitalize }}
        </option>
      </select>
    </a>
    <span class="icon is-small is-left">&Tstrok;</span>
  </div>
</template>

<script>
export default {
  name: 'Themer',
  filters: {
    capitalize: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
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
  right: 40px;
  z-index: 2000;
}
</style>
