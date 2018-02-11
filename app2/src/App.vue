<template>
  <div id="app">
    <Header @select="menuSelected" />
    <Main :source="source" />
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  },
  data () {
    return {
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
      url = url || this.default
      const fn = this.domain + url + '.md'
      this.$http.get(fn).then(res => {
        this.source = res.body
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
}
</style>
