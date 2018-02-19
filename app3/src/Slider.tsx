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
  enabled: boolean;
  open: boolean;
  menus: Menu[];
}

export default class Slider extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    const params: any = this.paramsFromUrl();
    this.state = {
      enabled: params.ad || false,
      open: false,
      menus: []
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  render() {
    if (!this.state.enabled) {
      return null;
    }
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
    if (this.state.enabled) {
      axios.get(`https://sleepy-kalam-ff10a0.netlify.com/menu.json`).then(res => {
        const menus = res.data;
        this.setState({ menus });
      });
    }
  }

  handleToggle() {
    this.setState(prev => ({
      open: !prev.open
    }));
  }

  paramsFromUrl() {
    let params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str: string, ...strs: string[]): string {
      const key = strs[0], value = strs[1];
      params[key] = value;
      return '';
    });
    return params;
  }

}
