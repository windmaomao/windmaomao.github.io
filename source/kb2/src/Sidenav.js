// third party
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
// styles
import './Sidenav.css';
// local
const styles = {
  list: {
    margin: '.2rem .2rem 0.8rem',
  },
  item: {
    margin: '0.1rem 0'
  },
  link: {
    padding: '0.1rem 0 0.1rem .5rem',
    textTransform: 'capitalize',
    fontSize: '0.8rem',
    lineHeight: '1rem'
  },
  toggle: {
    float: 'right',
    color: 'lightgray',
    cursor: 'pointer'
  }
};

const Sidenav = (props) => {
  const {onSelect, onToggle, menu, selected, toggled} = props;
  if (!menu) return null;
  if (!toggled) return null;

  const select = (id) => {onSelect && onSelect(id);};
  const toggle = () => {onToggle && onToggle();};
  const Menu = menu => {
    const articleId = (name) => menu.type + '/' + name;
    const isActive = (name) => articleId(name) === selected;
    return (
      <Fragment key={menu.title}>
        <p className="menu-label">{menu.title}</p>
        <ul className="menu-list" style={styles.list}>{
          menu.items.map((name, index) => (
            <li key={index} style={styles.item}>
              <a style={styles.link}
                className={isActive(name) ? 'is-active' : ''}
                onClick={(e) => {select(articleId(name));}}
              >{name}</a>
            </li>
          ))
        }</ul>
      </Fragment>
    );
  };

  return (
    <div className="slider">
      <i className="fa fa-close" style={styles.toggle}
        onClick={e => toggle()}
      ></i>
      <aside className="menu">
        {menu.map(item => Menu(item))}
      </aside>
    </div> 
  );
};

Sidenav.propTypes = {
  menu: PropTypes.array.isRequired,
  toggled: PropTypes.bool,
  onToggle: PropTypes.func,
  selected: PropTypes.string,
  onSelect: PropTypes.func
};

export default Sidenav;