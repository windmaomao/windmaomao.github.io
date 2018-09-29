// third party
import React from 'react';
import PropTypes from 'prop-types';
import ClickOutside from 'react-click-outside';
// styles
import './Appnav.css';

const Appnav = (props) => {
  const {toggled, apps, appId, onClose} = props;
  if (!toggled) return null;

  const isActive = app => app.url === appId;
  const close = () => {onClose && onClose();};
  const goto = (app) => {window.location.href = app.url;};

  return (
    <ClickOutside onClickOutside={close}>
      <div id="appnav" className={toggled ? 'open' : ''}>
        <aside className="menu">
          <p className="menu-label">
            Apps
          </p>
          <ul className="menu-list">
            {apps.map((app, index) => (
              <li key={index}>
                <a className={isActive(app) ? 'is-active': ''} onClick={e => {goto(app);}}>
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
};

Appnav.propTypes = {
  toggled: PropTypes.bool.isRequired,
  apps: PropTypes.array,
  appId: PropTypes.string,
  onClose: PropTypes.func
};

export default Appnav;
