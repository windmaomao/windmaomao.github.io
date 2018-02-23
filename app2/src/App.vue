<template>
  <div id="app" v-bind:class="{ 'spinning': spinning }">
    <Slider :menu="menu" @select="menuSelected" />
    <Header :menu="menu" @select="menuSelected" />
    <Themer @theme="themeSwitched" />
    <Main :source="source" />
    <Bottom/>
    <Footer/>
  </div>
</template>

<script>
import './assets/styles.scss'
import Slider from './components/Slider'
import Header from './components/Header'
import Themer from './components/Themer'
import Main from './components/Main'
import Bottom from './components/Bottom'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Slider,
    Header,
    Main,
    Bottom,
    Footer,
    Themer
  },
  data () {
    return {
      // debug: true,
      debug: false,
      spinning: true,
      domain: 'https://sleepy-kalam-ff10a0.netlify.com/',
      domain2: 'https://sleepy-kalam-ff10a0.netlify.com/',
      // domain: 'https://windmaomao.github.io/',
      // domain2: 'https://raw.githubusercontent.com/windmaomao/windmaomao.github.io/master/',
      default: 'resume/frontend',
      theme: 'whitey',
      source: '',
      menu: []
    }
  },
  methods: {
    fetchMenu: function() {
      const fn = this.domain2 + 'menu.json'
      this.$http.get(fn).then(res => {
        this.menu = res.body
      })
    },
    menuSelected: function(url) {
      this.fetchUrl(url)
    },
    fetchUrl: function(url) {
      this.spinning = true
      url = url || this.default
      const fn = this.domain2 + url + '.md'
      this.$http.get(fn).then(res => {
        this.source = '[[toc]]\n' + res.body
        this.spinning = false
        localStorage.setItem('qp-md', url)
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
    paramsFromUrl: function() {
      let params = {}
      window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) {
        params[key] = value
      })
      return params
    },
    testSource() {
      this.source = `---\ntitle: This is the Title\n---\n# Heading\n----\nsome text
[[toc]]
# Resume
## Books
## Blogs

- :x: *Find out Net magazine issue*{data-tooltip="Cannot reach them"}{.tooltip}
- :white_check_mark: pieapple
- :x: Cancelled {.red}

      `
    }
  },
  created() {
    let params = this.paramsFromUrl()

    this.theme = localStorage.getItem('qp-theme') || this.theme
    this.themeSwitched(this.theme)

    if (params['ad']) {
      this.fetchMenu()
    }

    if (this.debug) {
      this.testSource()
      return
    }

    let saved = localStorage.getItem('qp-md') || this.default
    let md = params['md'] || saved
    this.menuSelected(md)
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
  opacity: 0.4;
}
</style>
