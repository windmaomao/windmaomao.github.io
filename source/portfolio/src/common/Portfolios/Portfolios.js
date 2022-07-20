import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import popcorn from './popcorn.png';
import fish from './fish.png';
import monkey from './monkey.png';

function Portfolios() {
  const classNames = cx(
    'flex',
    'items-center',
    'gap-x-4',
    'items-center',
  );
  return (
    <div className={classNames}>
      <NavLink to="/case-studies">
        <img
          src={popcorn}
          alt="MovieTime"
          title="Movie Time"
          width="40px"
        />
      </NavLink>
      <NavLink to="/case-studies/next">
        <img
          src={fish}
          alt="SwimMeet"
          title="Swim Meet"
          width="50px"
        />
      </NavLink>
      <NavLink to="/case-studies/next">
        <img
          src={monkey}
          alt="MathMonkey"
          title="Math Monkey"
          width="45px"
        />
      </NavLink>
    </div>
  );
}

export default Portfolios;
