<script>
export default {
  name: 'Toc',
  props: ['toc'],
  data() {
    return {
      toggled: false,
      activated: false
    }
  },
  computed: {
    title() {
      if (this.toc.length) {
        return this.toc[0].title
      } else {
        return ''
      }
    }
  },
  render() {
    return (
      <div class="toc">
        <nav class="navbar is-light is-fixed-top" v-click-outside={this.deActivate}>
          <div class="navbar-brand">
            <a class="navbar-item logo-wrapper">
              <img src="static/img/logo.png" class="logo" />
            </a>
            <a class="navbar-item center">{this.title}</a>
            <div data-target="navbar"
              class={{ 'navbar-burger': 1, 'burger': 1, 'is-active': this.toggled }}
              onClick={this.onToggle}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class={this.toggled ? 'navbar-menu is-active' : 'navbar-menu'} id="navbar" >
            <div class="navbar-end">
              <div class={{ 'navbar-item': 1, 'has-dropdown': 1, 'is-active': this.activated }}>
                <a class="navbar-link" onClick={this.onActivate}>Table of Content</a>
                <div class="navbar-dropdown">
                  <aside class="menu">
                    <ul class="toc menu-list">{
                      this.toc.map((menu) =>
                        <li class={menu.tag}>
                          <a href={'#' + menu.anchor} onClick={this.onToggle}>{menu.title}</a>
                        </li>
                      )
                    }</ul>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  },
  methods: {
    onToggle(e) {
      this.toggled = !this.toggled
      this.activated = !this.activated
    },
    onActivate(e) {
      this.activated = !this.activated
    },
    deActivate() {
      this.activated = false
    }
  }
}
</script>
