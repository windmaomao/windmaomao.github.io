import cx from 'classnames';
import { Link } from 'react-router-dom';

function Menu() {
  const classNames = cx(
    'flex',
    'gap-x-4',
    'font-heading',
    'text-sm',
  );
  return (
    <div className={classNames}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about-me">
          About Me
        </Link>
      </div>
      <div>Case Studies</div>
    </div>
  );
}

export default Menu;
