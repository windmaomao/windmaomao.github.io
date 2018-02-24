<script>
export default {
  name: 'Toc',
  props: ['toc'],
  data() {
    return {
      toggled: false
    }
  },
  render() {
    return (
      <div class="bottom">
        <nav class="navbar is-light is-fixed-top">
          <div class="navbar-brand">
            <a class="navbar-item logo-wrapper">
              <img src="static/img/logo.png" class="logo" />
            </a>
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
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">Table of Content</a>
                <div class="navbar-dropdown">
                  <aside class="menu">
                    <ul class="toc menu-list">{
                      this.toc.map((menu) =>
                        <li class={'h' + menu.level}>
                          <a onClick={this.onToggle}>{menu.title}</a>
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
    onToggle: function(e) {
      this.toggled = !this.toggled
    }
  }
}
</script>
