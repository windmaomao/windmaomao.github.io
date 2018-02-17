<template>
  <nav class="navbar is-light is-fixed-top" role="navigation">
    <div class="navbar-brand">
      <a class="navbar-item logo-wrapper" v-on:click="goto()">
        <img src="../assets/logo.png" class="logo" />
      </a>
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
      <div class="navbar-start" v-if="menu">
        <div class="navbar-item has-dropdown"
          v-bind:class="{ 'is-active': selected === t.type }"
          v-for="t in menu" v-bind:key="t.type"
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
  props: ['menu'],
  data() {
    return {
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
    }
  },
  created() {}
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
.logo {
  animation: logo-spin infinite 20s linear;
}
.spinning .logo-wrapper {
  -webkit-animation: flickerAnimation 1s infinite;
  -moz-animation: flickerAnimation 1s infinite;
  -o-animation: flickerAnimation 1s infinite;
  animation: flickerAnimation 1s infinite;
}
@keyframes logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes flickerAnimation {
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-o-keyframes flickerAnimation{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-moz-keyframes flickerAnimation{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-webkit-keyframes flickerAnimation{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}

</style>
