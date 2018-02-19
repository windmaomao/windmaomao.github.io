import * as React from 'react';
import './Slider.css';

export interface Props {
  isOpen: boolean;
}

export default function Slider(props: Props) {
  let menus = [
    { title: 'Books', items: ['index'] },
    { title: 'Blogs', items: ['index'] },
    { title: 'Todo', items: ['fang', 'china-trip'] }
  ];
  return (
    <div className="slider">
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
