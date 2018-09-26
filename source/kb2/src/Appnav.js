// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClickOutside from 'react-click-outside';
// styles
import './Appnav.css';
// service
import ApiService from './Api';

const appId = '/kb2';

class Appnav extends Component {
  static propTypes = {
    trigger: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = { apps: [], visible: false };
  }

  componentDidMount() {
    return ApiService.getApps().then(apps => {
      this.setState({apps});
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.trigger !== nextProps.trigger) {
      this.setState({ visible: true });
    }
  }

  close = () => {
    this.setState({ visible: false });
  }

  render() {
    const {visible, apps} = this.state;
    const isActive = app => app.url === appId;
    return (
      <ClickOutside onClickOutside={this.close}>
        <div id="appnav" className={ visible ? 'open' : ''}>
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
      </ClickOutside>
    );
  }
}

export default Appnav;
