import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import Section from '../Section';
import readmoreImg from './readmore.png';

function Hero() {
  const classNames = cx(
    'mt-10 py-20',
    'flex flex-col',
    'items-center',
    'gap-y-10',
  );
  return (
    <Section className={classNames}>
      <label className="text-gray-500">
        Build Product
      </label>
      <h3 className="max-w-sm">
        Want To Know How To Turn Your
        Idea Into A Product
      </h3>
      <NavLink to="/case-studies">
        <button>Read More</button>
      </NavLink>
      <img
        src={readmoreImg}
        alt="Read More"
      />
    </Section>
  );
}

export default Hero;
