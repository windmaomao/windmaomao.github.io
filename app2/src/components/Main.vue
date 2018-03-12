<script>
import Toc from './Toc'
import Footer from './Footer'
import Anchor from '../assets/markdown-it-anchor'

// Lory slides
var lory = require('lory.js').lory

// Markdown core and highlighter
var md = require('markdown-it')({
  html: true,
  linkify: true,
  highlight: function(str, lang) {
    if (lang && window.hljs.getLanguage(lang)) {
      try {
        return window.hljs.highlight(lang, str).value
      } catch (__) {}
    }

    return ''
  }
})

md.use(require('markdown-it-attrs/markdown-it-attrs.browser.js'))
md.use(require('markdown-it-figure-caption'))
md.use(require('markdown-it-named-headers'))
md.use(require('markdown-it-footnote'))
md.use(require('markdown-it-deflist'))
md.use(require('markdown-it-emoji'))
md.use(require('markdown-it-abbr'))
md.use(require('markdown-it-mark'))

var anchors = []
md.use(Anchor, {
  callback: function(token, values) {
    const lvl = {
      tag: token.tag,
      title: values.title,
      anchor: values.slug
    }
    anchors.push(lvl)
  }
})

var container = require('markdown-it-container')
md.use(container, 'notification')
md.use(container, 'abstract', {
  validate: function(params) {
    return params.trim().match(/^abstract\s+(.*)$/)
  },
  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^abstract\s+(.*)$/)
    if (tokens[idx].nesting === 1) {
      return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n'
    } else {
      return '</details>\n'
    }
  }
})
md.use(container, 'slider', {
  validate: function(params) {
    return params.trim().match(/^slider$/)
  },
  render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) {
      return '<div class="lory-slider">\n<div class="frame js_frame">\n'
    } else {
      var nav = `
  <span class="js_prev prev">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#2E435A" d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"/></g></svg>
  </span>

  <span class="js_next next">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#2E435A" d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"/></g></svg>
  </span>
      `
      return nav + '</div>\n</div>\n'
    }
  }
})
md.use(require('markdown-it-for-inline'),
  'url_blank', 'link_open', function(tokens, idx) {
    tokens[idx].attrPush(['target', '_blank'])
  }
)

export default {
  name: 'Main',
  components: {
    Toc,
    Footer
  },
  data () {
    return {
      sidebar: false,
      toc: []
    }
  },
  props: ['source'],
  computed: {
    compiled: function() {
      anchors.length = 0
      this.$nextTick(() => {
        this.renderSlider()
      })
      return md.render(this.source)
    },
    title: function() {
      if (this.toc.length) {
        return this.toc[0].title
      }
      return ''
    }
  },
  template: `
    <div>
      <Headful :title="title" />
      <Toc :toc="toc" />
      <section class="main" v-if="source">
        <div id="write" class="container" v-html="compiled"></div>
      </section>
      <Footer/>
    </div>
  `,
  created: function() {
    this.toc = anchors
  },
  methods: {
    renderSlider() {
      var slider = document.querySelector('.lory-slider')
      if (slider) {
        lory(slider, {
          infinite: true,
          enableMouseEvents: true
        })
      }
    }
  }
}
</script>
