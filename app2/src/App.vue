<template>
  <div id="app" v-bind:class="{ 'spinning': spinning }">
    <vue-simple-spinner id="spinner"
      v-show="spinning" :size="'small'"
      :line-bg-color="'#154da1'" :line-fg-color="'#e14321'"
    />
    <Header @select="menuSelected" />
    <Themer @theme="themeSwitched" />
    <Main :source="source" />
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Themer from './components/Themer'
import Main from './components/Main'
import Footer from './components/Footer'
import VueSimpleSpinner from 'vue-simple-spinner'

export default {
  name: 'App',
  components: {
    VueSimpleSpinner,
    Header,
    Themer,
    Main,
    Footer
  },
  data () {
    return {
      spinning: true,
      domain: 'https://sleepy-kalam-ff10a0.netlify.com/',
      domain2: 'https://sleepy-kalam-ff10a0.netlify.com/',
      // domain: 'https://windmaomao.github.io/',
      // domain2: 'https://raw.githubusercontent.com/windmaomao/windmaomao.github.io/master/',
      default: 'resume/frontend',
      theme: 'whitey',
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
      const fn = this.domain2 + url + '.md'
      this.$http.get(fn).then(res => {
        this.source = res.body
        this.spinning = false
      })
      window.location = '#'
    },
    themeSwitched(theme) {
      const root = this.domain + 'style/'
      var found = document.getElementById('style')
      if (found) {
        found.href = root + theme + '.css'
      }
      localStorage.setItem('qp-theme', theme)
    },
    testSource() {
      this.source = `
*[AngularJS]: Hyper Text Markup Language
# Hello World
## Test Def List

People Designs

: Oct 2014 - Aug 2015
: Lead AngularJS / Laravel Developer

Served as lead *AngularJS* and *Laravel* developer for educational applications, including southern regional center of excellence in nutrition education and obesity prevention, and a hospital stage III counseling program to help people prepare the end of their life. Projects mostly builds book-like chapter navigation with video/narration helper for elder visits. Projects are hosted under *HIPPA* server with consideration of *Section 508* for people with disability. Customers include 200 doctors and 50,000 users around the globe.

    `
    }
  },
  created() {
    this.theme = localStorage.getItem('qp-theme') || this.theme
    this.themeSwitched(this.theme)
    this.menuSelected(this.default)
    // this.testSource()
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
  top: 20px;
  right: 16px;
}
#themer {
  position: fixed;
  top: 8px;
  right: 46px;
  z-index: 2000;
}
@media only screen
and (min-width : 1024px) {
  #themer {}
  #spinner {}
}
</style>
