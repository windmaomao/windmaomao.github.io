<script>
export default {
  name: 'Slider',
  props: {
    menu: Array
  },
  data: () => ({
    open: false,
    search: ''
  }),
  render() {
    var renderItem = (type, name) => {
      return (
        <li>
          <a onClick={event => {
            event.preventDefault()
            this.onSelect(type, name)
          }}>{name}</a>
        </li>
      )
    }
    var renderMenu = (menu) => {
      let found
      if (menu.title.toLowerCase().includes(this.search)) {
        found = menu.items.slice()
      } else {
        found = menu.items.filter((name) => name.includes(this.search))
      }
      if (found.length) {
        return (
          <div>
            <p class="menu-label">{menu.title}</p>
            <ul class="menu-list">{
              found.map((name) => renderItem(menu.type, name))
            }</ul>
          </div>
        )
      } else {
        return null
      }
    }
    return (
      <div id="slider">
        <i class="slider-toggle" />
        <div class={{ 'slider': 1, 'open': this.open }}>
          <button class="close" onClick={this.onToggle}>X</button>
          <br />
          <input class="input is-small"
            type="text" placeholder="Search ..."
            value={this.search}
            onChange={this.onSearch}
          />
          <aside class="menu">{
            this.menu.map((menu) => renderMenu(menu))
          }</aside>
        </div>
      </div>
    )
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
    },
    onSearch(e) {
      this.search = event.target.value
      console.warn(this.search)
    }
  },
  mounted() {
    const that = this
    const el = window.document.getElementById('slider')
    const mc = window.Hammer(el)
    mc.on('pan tap', (ev) => {
      that.open = true
    })
  }
}
</script>
