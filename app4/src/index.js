// var React = require('react');
// var ReactDom = require('react-dom');

module.exports = function Slider() {
  let menus = [
    { title: 'Blogs', items: [] }
  ];
  return (
    <div className="slider">
      <button className="close">X</button>
      <aside className="menu">
        <p className="menu-label">Menu</p>
        <ul className="menu-list">{
          menus.map((menu, idx) =>
          <li key={idx}>
            <a>{menu.title}</a>
            <ul>{
              menu.items.map((name, idx2) =>
                <li key={idx2}>
                  <a>{name}</a>
                </li>
              )
            }</ul>
          </li>
          )
        }</ul>
      </aside>
    </div>
  );
}
