<template>
  <div id="themer">
    <div class="control has-icons-left">
      <a class="select is-small">
        <select v-model="theme" v-on:change="switchTheme">
          <option v-bind:value="s"
            v-bind:key="s" v-for="s in themes">{{ s | capitalize }}
          </option>
        </select>
      </a>
      <span class="icon is-small is-left">&Tstrok;</span>
    </div>
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
