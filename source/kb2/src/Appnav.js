// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClickOutside from 'react-click-outside';
// styles
import './Appnav.css';

class Appnav extends Component {
  static propTypes = {
    toggled: PropTypes.bool.isRequired,
    apps: PropTypes.array,
    appId: PropTypes.string,
    onClose: PropTypes.func
  };

  close = () => {
    const onClose = this.props.onClose;
    onClose && onClose();
  }

  goto = (app) => {
    window.location.href = app.url;
  }

  render() {
    const {toggled, apps, appId} = this.props;
    const isActive = app => app.url === appId;
    return (
      <ClickOutside onClickOutside={this.close}>
        <div id="appnav" className={ toggled ? 'open' : ''}>
          <aside className="menu">
            <p className="menu-label">
              Apps
            </p>
            <ul className="menu-list">
              {apps.map((app, index) => (
                <li key={index}>
                  <a className={isActive(app) ? 'is-active': ''} onClick={e => { this.goto(app); }}>
                    <i className={'fa fa-' + app.icon}></i>&nbsp; 
                    {app.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>        
        </div>
      </ClickOutside>
    );
  }
}

export default Appnav;
