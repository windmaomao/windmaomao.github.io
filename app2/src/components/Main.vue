<script>
import Toc from './Toc'
import Footer from './Footer'
import Anchor from '../assets/markdown-it-anchor'

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

md.use(require('markdown-it-implicit-figures'), {
  figcaption: true
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
      toc: [],
      title: ''
    }
  },
  props: ['source'],
  computed: {
    compiled: function() {
      anchors.length = 0
      return md.render(this.source)
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
  }
}
</script>
