<template>
  <div class="main" v-bind:class="{ 'with-sidebar': sidebar }">
    <template v-show="source">
      <!-- <div class="sidebar" v-show="sidebar">
        <div id="toc" v-html="compiledToc"></div>
        <div id="back-top">
            <a href="#app">Back to top</a>
        </div>
      </div> -->
      <section class="main">
        <div id="write" class="container" v-html="compiled"></div>
      </section>
    </template>
  </div>
</template>

<script>

var md = require('markdown-it')({
  html: true,
  highlight: function(str, lang) {
    if (lang && window.hljs.getLanguage(lang)) {
      try {
        return window.hljs.highlight(lang, str).value
      } catch (__) {}
    }

    return ''
  }
})
md.use(require('markdown-it-table-of-contents'), {
  containerClass: 'sidebar toc',
  includeLevel: [1, 2, 3]
})
md.use(require('markdown-it-footnote'))
md.use(require('markdown-it-deflist'))
md.use(require('markdown-it-emoji'))
md.use(require('markdown-it-abbr'))
md.use(require('markdown-it-mark'))
// md.use(require('markdown-it-checkbox'))
md.use(require('markdown-it-container'), 'abstract', {
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

export default {
  name: 'Main',
  data () {
    return {
      sidebar: true,
      compiledToc: ''
    }
  },
  props: ['source'],
  computed: {
    compiled: function() {
      let that = this
      return md.render(this.source, { tocCallback: function(md, arr, html) {
        that.compiledToc = html
      }})
    }
  }
}
</script>

<style>
h1[id]:before, h2[id]:before, h3[id]:before {
  display: block;
  content: " ";
  margin-top: -110px;
  height: 110px;
  visibility: hidden;
}
.main {
  padding: 1rem 1.5rem;
}
#write {
  max-width: 40em;
  margin: 0 auto;
  padding-top: 2em 60px;
  min-height: calc(100vh - 6em);
}
.sidebar {
  display: none;
  position: fixed;
  right: 0;
  top: 120px;
  bottom: 5px;
  width: 240px;
  margin: 0;
  font-size: 12px;
  border-left: 1px solid #eee;
  overflow-y: auto;
}
@media only screen
and (min-width : 1200px) {
  .main.with-sidebar {
    padding-right: 60px;
  }
  .sidebar, #toc-button {
    display: block;
  }
}
#back-top {
  margin: 10px 18px;
}
.toc ul {
  padding: 0 8px 0 20px;
  margin: 0;
}
.toc li {
  list-style: none;
  text-align: initial;
  margin-top: 6px;
  margin-bottom: 6px;
  line-height: 18px;
}
.toc a {
  color: inherit;
  text-align: left;
  text-decoration: none;
  font-size: 12px;
}
.toc > ul ul {
  padding-left: 0px;
}
.toc > ul ul ul {
  padding-left: 15px;
}
.toc > ul > li > a {
  font-size: 16px;
  opacity: 0.6;
}
.toc > ul ul a {
  font-size: 14px;
}
.toc > ul ul ul a {
  font-size: 12px;
}

/* #toc li.toc-visible {
  font-weight: bold;
}
#toc li.toc-h1.toc-visible {
  font-weight: normal;
  opacity: 1;
} */
</style>
