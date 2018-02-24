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
md.use(require('markdown-it-table-of-contents'), {
  containerClass: 'sidebar toc',
  includeLevel: [1, 2, 3]
})
md.use(require('markdown-it-attrs/markdown-it-attrs.browser.js'))
md.use(require('markdown-it-named-headers'))
md.use(require('markdown-it-footnote'))
md.use(require('markdown-it-deflist'))
md.use(require('markdown-it-emoji'))
md.use(require('markdown-it-abbr'))
md.use(require('markdown-it-mark'))

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
      compiledToc: '',
      title: 'Fang Jin',
      toc: []
    }
  },
  props: ['source'],
  computed: {
    compiled: function() {
      let that = this
      let env = {
        tocCallback: function(md, arr, html) {
          that.compiledToc = html
        },
        title: '',
        toc: []
      }
      const rendered = md.render(this.source, env)
      that.title = env.title
      that.toc = env.toc
      return rendered
    }
  },
  template: `
    <div :class="{ 'with-sidebar': sidebar }">
      <Headful :title="title" />
      <Toc :toc="toc" />
      <template v-show="source">
        <section class="main">
          <div id="write" class="container" v-html="compiled"></div>
        </section>
      </template>
      <Footer/>
    </div>
  `,
  created: function() {
    const originalHeadingOpen = md.renderer.rules.heading_open
    const level = 1

    md.renderer.rules.heading_open = function (...args) {
      const [ tokens, idx, , env, self ] = args

      if (!env.title && (level < 1 || tokens[idx].tag === `h${level}`)) {
        env.title = tokens[idx + 1].children
          .reduce((acc, t) => acc + t.content, '')
      }

      env.toc.push({
        level: tokens[idx].markup.length,
        title: tokens[idx + 1].content
      })

      // Execute original rule.
      if (originalHeadingOpen) {
        return originalHeadingOpen.apply(this, args)
      } else {
        return self.renderToken(...args)
      }
    }
  }
}
</script>
