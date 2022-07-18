import cx from 'classnames';
import {
  Link,
  NavLink,
} from 'react-router-dom';

function Menu() {
  const classNames = cx(
    'flex',
    'gap-x-6',
    'font-heading',
    'text-sm',
  );

  return (
    <div className={classNames}>
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/about-me">
          About Me
        </NavLink>
      </div>
      <div>
        <NavLink to="/case-study">
          Case Studies
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
