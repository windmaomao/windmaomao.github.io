import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import Section from '../common/Section';

function Hero() {
  const classNames = cx(
    'mt-20 py-20',
    'text-center',
    'max-w-sm',
  );
  return (
    <Section className={classNames}>
      <label className="text-gray-500">
        Build Product
      </label>
      <h3 className="py-6">
        Want To Know How To Turn Your
        Idea Into A Product
      </h3>
      <NavLink to="/case-studies">
        <button>Read More</button>
      </NavLink>
    </Section>
  );
}

export default Hero;
