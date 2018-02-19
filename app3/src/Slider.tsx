import * as React from 'react';
import axios from 'axios';
import './Slider.css';

export interface Menu {
  title: string;
  items: string[];
}
export interface Props {
  // isOpen: boolean;
}
export interface States {
  open: boolean;
  menus: Menu[];
}

export default class Slider extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open: false,
      menus: []
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  render() {
    if (this.state.open) {
      return (
        <div className="slider">
          <button className="close" onClick={this.handleToggle}>X</button>
          <aside className="menu">
            <p className="menu-label">Menu</p>
            <ul className="menu-list">{
              this.state.menus.map((menu, idx) =>
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
    } else {
      return (
        <i className="slider-toggle" onClick={this.handleToggle} />
      );
    }
  }

  componentDidMount() {
    axios.get(`https://sleepy-kalam-ff10a0.netlify.com/menu.json`).then(res => {
      const menus = res.data;
      this.setState({ menus });
    });
  }

  handleToggle() {
    this.setState(prev => ({
      open: !prev.open
    }));
  }
}
