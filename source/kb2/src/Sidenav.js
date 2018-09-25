// third party
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
// styles
import './Sidenav.css';

class Sidenav extends Component {
  static propTypes = {
    menu: PropTypes.array.isRequired
  };

  renderMenu(menu) {
    return (
      <Fragment key={menu.title}>
        <p className="menu-label">{menu.title}</p>
        <ul className="menu-list">{
          menu.items.map((name, index) => (
            <li key={index}>
              <a>{name}</a>
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
        <div>
          <aside className="menu">
            {menu.map(this.renderMenu)}
          </aside>
        </div>
      </div> 
    );
  }
}

export default Sidenav;
