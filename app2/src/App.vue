<template>
  <div id="app">
    <Header/>
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
      source: ''
    }
  },
  created() {
    this.url = 'https://windmaomao.github.io/resume/profile-frontend.md'
    this.url = 'https://windmaomao.github.io/book/bonds-unbeaten-path.md'
    this.$http.get(this.url).then(res => {
      this.source = res.body
    })
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
