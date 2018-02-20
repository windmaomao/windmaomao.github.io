// var React = require('react');
// var ReactDom = require('react-dom');
// var axios = require('axios');

// import './index.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: true,
      open: false,
      api: 'https://sleepy-kalam-ff10a0.netlify.com/menu.json',
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
      axios.get(this.state.api).then(res => {
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
}

module.exports = Slider;