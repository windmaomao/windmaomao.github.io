// third party
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
// styles
import './Sidenav.css';

class Sidenav extends Component {
  static propTypes = {
    menu: PropTypes.array.isRequired,
    selected: PropTypes.string,
    toggled: PropTypes.bool,
    onToggle: PropTypes.func
  };

  renderMenu = menu => {
    const {selected} = this.props;
    const isActive = (name) => (menu.type + '/' + name) === selected;
    return (
      <Fragment key={menu.title}>
        <p className="menu-label">{menu.title}</p>
        <ul className="menu-list">{
          menu.items.map((name, index) => (
            <li key={index}>
              <a className={isActive(name) ? 'is-active' : ''}>{name}</a>
            </li>
          ))
        }</ul>
      </Fragment>
    );
  }

  render() {
    const {menu} = this.props;
    if (!menu || menu.length < 1) {
      return null;
    } 
    return (
      <div className="slider">
        <i className="slider-toggle" />
        <aside className="menu">
          {menu.map(this.renderMenu)}
        </aside>
      </div> 
    );
  }
}

export default Sidenav;
