<template>
  <div id="app" v-bind:class="{ 'spinning': spinning }">
    <vue-simple-spinner id="spinner" v-show="spinning"
      :size="'medium'"
      :line-bg-color="'#154da1'" :line-fg-color="'#e14321'"
    />
    <Header @select="menuSelected" />
    <Main :source="source" />
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import VueSimpleSpinner from 'vue-simple-spinner'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
    VueSimpleSpinner
  },
  data () {
    return {
      spinning: true,
      domain: 'https://windmaomao.github.io/',
      default: 'resume/profile-frontend',
      source: ''
    }
  },
  methods: {
    menuSelected: function(url) {
      this.fetchUrl(url)
    },
    fetchUrl: function(url) {
      this.spinning = true
      url = url || this.default
      const fn = this.domain + url + '.md'
      this.$http.get(fn).then(res => {
        this.source = res.body
        this.spinning = false
      })
      window.location = '#'
    }
  },
  created() {
    this.fetchUrl()
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  opacity: 1;
}
#app.spinning {
  opacity: 0.6;
}
#spinner {
  position: fixed;
  z-index: 1000;
  top: 15px;
  right: 15px;
}
</style>
