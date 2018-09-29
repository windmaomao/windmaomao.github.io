// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// styles
import './Toc.css';

class Toc extends Component {
  static propTypes = {
    toggled: PropTypes.bool,
    anchors: PropTypes.array,
    onClose: PropTypes.func
  };

  render() {
    const {toggled, anchors, onClose} = this.props;
    if (!toggled) return null;
    
    const close = () => {onClose && onClose();};
    return (
      <div className="navbar-toc">
        <div className="navbar-menu is-active">
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-active">
              <a className="navbar-link" onClick={close}>Table of Content</a>
              <div className="navbar-dropdwon">
                <aside className="menu">
                  <ul className="toc menu-list">
                    {anchors.map((menu, index) => 
                      <li key={index} className={menu.tag}>
                        <a href={'#' + menu.anchor} onClick={close}>{menu.title}</a>
                      </li>
                    )}
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Toc;
