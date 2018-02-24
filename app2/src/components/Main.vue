<script>
import Toc from './Toc'
import Footer from './Footer'

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
// md.use(require('markdown-it-front-matter'), function(fm) {})
// md.use(require('markdown-it-table-of-contents'), {
//   containerClass: 'sidebar toc',
//   includeLevel: [1, 2, 3]
// })
md.use(require('markdown-it-attrs/markdown-it-attrs.browser.js'))
md.use(require('markdown-it-named-headers'))
md.use(require('markdown-it-footnote'))
md.use(require('markdown-it-deflist'))
md.use(require('markdown-it-emoji'))
md.use(require('markdown-it-abbr'))
md.use(require('markdown-it-mark'))
md.use(require('markdown-it-toc-and-anchor').default, {
  anchorLink: false
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
      // opening tag
      return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n'
    } else {
      // closing tag
      return '</details>\n'
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
      const that = this
      const env = {
        tocCallback: function(md, arr, html) {
          that.toc = arr
        }
      }
      return md.render(this.source, env)
    }
  },
  template: `
    <div :class="{ 'with-sidebar': sidebar }">
      <Toc :toc="toc" />
      <template v-show="source">
        <section class="main">
          <div id="write" class="container" v-html="compiled"></div>
        </section>
      </template>
      <Footer/>
    </div>
  `,
  created: function() {}
}
</script>
