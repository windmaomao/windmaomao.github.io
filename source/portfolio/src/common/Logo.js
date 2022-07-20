import cx from 'classnames';
import { NavLink } from 'react-router-dom';

function Logo() {
  const classNames = cx(
    'font-heading',
    'text-xl',
  );
  return (
    <div className={classNames}>
      <NavLink exact="true" to="/">
        <span className="text-violet-500">
          Q
        </span>
        <span className="text-blue-600">
          plot
        </span>
      </NavLink>
    </div>
  );
}

export default Logo;
