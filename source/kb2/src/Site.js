// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// styles
import './Site.css';
// primary components

class Site extends Component {
  static propTypes = {
    apps: PropTypes.array,
    appId: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {apps, appId} = this.props;
    const isActive = app => app.url === appId;
    return (
      <div id="appnav" className="open">
        <aside className="menu">
          <p className="menu-label">
            Apps
          </p>
          <ul className="menu-list">
            {apps.map((app, index) => (
              <li key={index}>
                <a className={isActive(app) ? 'is-active': ''}>{app.title}</a>
              </li>
            ))}
          </ul>
        </aside>        
      </div>
    );
  }
}

export default Site;
