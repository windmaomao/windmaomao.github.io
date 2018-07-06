<script>
import './assets/styles.scss'
import Slider from './components/Slider'
import Themer from './components/Themer'
import Main from './components/Main'
import Ticker from './components/Ticker'
import Stocker from './components/Stocker'

export default {
  name: 'App',
  components: {
    Slider,
    Main,
    Themer,
    Ticker,
    Stocker
  },
  data () {
    return {
      debug: false,
      // debug: true,
      debugDomain: 'http://localhost:3000/',
      domain: 'https://sleepy-kalam-ff10a0.netlify.com/',
      domain2: 'https://sleepy-kalam-ff10a0.netlify.com/',
      app: 'kb/',
      app2: '',
      // domain: 'https://windmaomao.github.io/',
      // domain2: 'https://raw.githubusercontent.com/windmaomao/windmaomao.github.io/master/',
      default: 'resume/frontend',
      theme: 'whitey',
      source: '',
      menu: []
    }
  },
  template: `
    <div id="app" :class="{ debug: debug }">
      <Slider :menu="menu" @select="menuSelected" />
      <Main :source="source" />
      <div id="fixer">
        <nav class="level">
          <div class="level-left"></div>
          <div class="level-right">
            <Themer @theme="themeSwitched" />
          </div>
        </nav>
      </div>
    </div>
  `,
  methods: {
    fetchMenu: function() {
      const fn = this.domain + 'menu.json'
      this.$http.get(fn).then(res => {
        this.menu = res.body
      })
    },
    menuSelected: function(url) {
      this.fetchUrl(url)
    },
    fetchUrl: function(url) {
      this.$loading('loading...')
      url = url || this.default
      const fn = this.domain2 + this.app + url + '.md?v=' + Date.now()
      this.$http.get(fn).then(res => {
        // this.source = '[[toc]]\n' + res.body
        this.source = res.body
        this.$loading.close()
        localStorage.setItem('qp-md', url)
      }, res => {
        this.$toast.center('Error loading!')
        localStorage.setItem('qp-md', '')
        console.error(res.url, res.status)
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
    }
  },
  created() {
    let params = this.paramsFromUrl()

    this.theme = localStorage.getItem('qp-theme') || this.theme
    this.themeSwitched(this.theme)

    // Debug mode
    if (this.debug) {
      this.domain2 = this.debugDomain
    }

    // Fetch menu
    if (params['ad']) {
      this.fetchMenu()
    }

    // Fetch url
    let md = this.default
    if (params['md']) {
      md = params['md']
    } else {
      if (params['ad']) {
        md = localStorage.getItem('qp-md') || md
      }
    }
    this.menuSelected(md)
  }
}
</script>
