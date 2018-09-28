// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// styles
import './Toc.css';

class Toc extends Component {
  static propTypes = {
    anchors: PropTypes.array,
  };

  render() {
    const {anchors} = this.props;
    return (
      <div className="navbar-menu is-active">
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-active">
            <a className="navbar-link">Table of Content</a>
            <div className="navbar-dropdwon">
              <aside className="menu">
                <ul className="toc menu-list">
                  {anchors.map((menu, index) => 
                    <li key={index} className={menu.tag}>
                      <a>{menu.title}</a>
                    </li>
                  )}
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Toc;
