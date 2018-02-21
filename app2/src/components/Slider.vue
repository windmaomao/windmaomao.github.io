<script>
export default {
  name: 'Slider',
  props: {
    menu: Array
  },
  data: () => ({
    open: false
  }),
  render() {
    if (!this.menu.length) {
      return null
    }
    if (this.open) {
      return (
        <div class="slider">
          <button class="close" onClick={this.onToggle}>X</button>
          <aside className="menu">
            <p className="menu-label">Menu</p>
            <ul className="menu-list">{
              this.menu.map((menu) =>
                <li>
                  <a>{menu.title}</a>
                  <ul>{
                    menu.items.map((name) =>
                      <li><a>{name}</a></li>
                    )
                  }</ul>
                </li>
              )
            }</ul>
          </aside>
        </div>
      )
    } else {
      return (
        <i class="slider-toggle" onClick={this.onToggle} />
      )
    }
  },
  methods: {
    onToggle(e) {
      this.open = !this.open
    }
  }
}
</script>
