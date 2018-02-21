<script>
export default {
  name: 'Slider',
  render() {
    let menus = [
      { title: 'Blogs', items: [] },
      { title: 'Books', items: ['index', 'vue-up'] }
    ]
    return (
      <div class="slider">
        <button class="close">X</button>
        <aside className="menu">
          <p className="menu-label">Menu</p>
          <ul className="menu-list">{
            menus.map((menu) =>
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
  }
}
</script>
