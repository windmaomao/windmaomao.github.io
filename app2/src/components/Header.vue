<template>
  <nav class="navbar is-light is-fixed-top" role="navigation">
    <div class="navbar-brand">
      <a class="navbar-item"><img src="../assets/logo.png"></a>
      <div class="navbar-burger burger" data-target="navbar"
        v-bind:class="{ 'is-active': toggled }"
        v-on:click="toggle"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbar" class="navbar-menu"
      v-bind:class="{ 'is-active': toggled }"
    >
      <div class="navbar-start" v-if="admin">
        <a class="navbar-item" v-on:click="goto()">Home</a>
        <div class="navbar-item has-dropdown"
          v-bind:class="{ 'is-active': selected === t.type }"
          v-for="t in types" v-bind:key="t.type"
        >
          <a class="navbar-link" v-on:click="select(t.type)">{{ t.title }}</a>
          <div class="navbar-dropdown">
            <a class="navbar-item capitalize"
              v-for="name in t.items" v-bind:key="name"
              v-on:click="goto(t.type, name)"
            >{{ name | formatId }}</a>
          </div>
        </div>
      </div>

      <div class="navbar-end"></div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Header',
  components: {},
  filters: {
    formatId: function(value) {
      return value ? value.split('-').join(' ') : ''
    }
  },
  data() {
    return {
      admin: false,
      items: [],
      selected: '',
      toggled: false
    }
  },
  methods: {
    goto: function(type, name) {
      if (type) {
        this.$emit('select', type + '/' + name)
      } else {
        this.$emit('select', '')
      }
      this.selected = ''
    },
    select: function(type) {
      this.selected = (this.selected === type) ? '' : type
    },
    toggle: function() {
      this.toggled = !this.toggled
    },
    getParams() {
      var params = {}
      window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) {
        params[key] = value
      })
      this.admin = params['ad'] || false
    }
  },
  created() {
    const blogs = ['index', 'power-of-loss', 'identity-debt', 'sustainable-prototyping',
      'protection-from-loss', 'perfect-google-map', 'middle-ground', 'reusable-form',
      'helping-others', 'law-of-winning', 'reusable-components', 'angular-on-windows',
      'tiny-upscaling', 'build-new-system', 'dynamic-static-approach',
      'container-to-rescue', 'being-dependent', 'active-management', 'floating-pot'
    ]
    const books = ['index', 'art-of-war', 'art-of-war-wisdom', 'big-shifts-ahead',
      'bonds-unbeaten-path', 'five-rules-stock-investing', 'slash-retirement-risk'
    ]
    const repos = ['angular2-mc-common', 'angular-mc-common', 'aof-form', 'kingslanding',
      'ng-admin-restify', 'mongoose-restify', 'event-services', 'dbvals-audit'
    ]
    const financials = ['tree-structure', 'balace-sheet', 'income-statement', 'investment']
    const others = ['todo', 'purchase', 'project', 'publication', 'performance',
      'company', 'recommendation'
    ]
    this.types = [
      { type: 'book', title: 'Books', items: books },
      { type: 'blog', title: 'Blogs', items: blogs },
      { type: 'finance', title: 'Financials', items: financials },
      { type: 'repository', title: 'Repos', items: repos },
      { type: 'other', title: 'Others', items: others }
    ]
    this.getParams()
  }
}
</script>

<style>
.capitalize {
  text-transform: capitalize;
}
.navbar {
  font-size: 16px;
}
.navbar p {
  margin: 1em 0;
}
</style>
