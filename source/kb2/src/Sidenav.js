// third party
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
// styles
import './Sidenav.css';
// local
const styles = {
  list: {
    listStyle: 'none',
    margin: '.25em .25em 1em',
  },
  item: {
    padding: '1px 2px',
  },
  link: {
    padding: '0 0 0 .5rem',
    textTransform: 'capitalize',
    fontSize: '0.8rem',
    lineHeight: '1rem'
  }
};

class Sidenav extends Component {
  static propTypes = {
    toggled: PropTypes.bool,
    onToggle: PropTypes.func,
    menu: PropTypes.array.isRequired,
    selected: PropTypes.string,
    onSelect: PropTypes.func
  };

  select = (articleId) => {
    const onSelect = this.props.onSelect;
    onSelect && onSelect(articleId);
  }

  renderMenu = menu => {
    const {selected} = this.props;
    const articleId = (name) => menu.type + '/' + name;
    const isActive = (name) => articleId(name) === selected;
    return (
      <Fragment key={menu.title}>
        <p className="menu-label">{menu.title}</p>
        <ul className="menu-list" style={styles.list}>{
          menu.items.map((name, index) => (
            <li key={index} className={styles.item}>
              <a style={styles.link}
                className={isActive(name) ? 'is-active' : ''}
                onClick={(e) => this.select(articleId(name))}
              >{name}</a>
            </li>
          ))
        }</ul>
      </Fragment>
    );
  }

  render() {
    const {menu, toggled} = this.props;
    if (!menu) return null;
    if (!toggled) return null;
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
