// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {css} from 'react-emotion';
// styles
import './Toc.css';

const toc = css`
  position: fixed;
  width: 100%;
  top: 52px;
  z-index: 9999;
  background-color: white;
`;

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
      <div className={toc}>
        {/* <a onClick={close}>Table of Content</a> */}
        <aside className="menu box">
          <ul className="toc menu-list">
            {anchors.map((menu, index) => 
              <li key={index} className={menu.tag}>
                <a href={'#' + menu.anchor} onClick={close}>{menu.title}</a>
              </li>
            )}
          </ul>
        </aside>
      </div>
    );
  }
}

export default Toc;
