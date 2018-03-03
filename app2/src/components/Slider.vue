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
        <div class="slider" v-click-outside={this.close}>
          <button class="close" onClick={this.onToggle}>X</button>
          <aside class="menu">{
            this.menu.map((menu) =>
              <div>
                <p class="menu-label">{menu.title}</p>
                <ul class="menu-list">{
                  menu.items.map((name) =>
                    <li>
                      <a onClick={event => {
                        event.preventDefault()
                        this.onSelect(menu.type, name)
                      }}>{name}</a>
                    </li>
                  )
                }</ul>
              </div>
            )
          }</aside>
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
    },
    onSelect(type, name) {
      if (type) {
        this.$emit('select', type + '/' + name)
      } else {
        this.$emit('select', '')
      }
      this.onToggle('')
    },
    close() {
      this.open = false
    }
  }
}
</script>
