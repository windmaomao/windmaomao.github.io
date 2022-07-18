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

  const linkClassName = ({
    isActive,
  }) => (isActive ? 'font-bold' : '');

  return (
    <div className={classNames}>
      <div>
        <NavLink
          exact="true"
          to="/"
          className={linkClassName}
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/about-me"
          className={linkClassName}
        >
          About Me
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/case-study"
          className="text-violet-500"
        >
          Case Studies
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
