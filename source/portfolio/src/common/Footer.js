import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import Section from './Section';
import Logo from './Logo';
import newsletter from './newsletter.png';

function Footer() {
  const classNames = cx(
    'mt-20',
    'grid',
    'grid-cols-6 md:grid-cols-12',
    'gap-y-16',
  );
  return (
    <Section className={classNames}>
      <div className="col-span-2">
        <Logo />
      </div>
      <div className="col-span-2">
        <h5>Site</h5>
        <div className="pt-4">
          <p>
            <NavLink
              exact="true"
              to="/"
            >
              Home
            </NavLink>
          </p>
          <p>
            <NavLink to="/about-me">
              About Me
            </NavLink>
          </p>
          <p>
            <NavLink to="/case-studies">
              Case Studies
            </NavLink>
          </p>
        </div>
      </div>
      <div className="col-span-2">
        <h5>Cases</h5>
        <div className="pt-4">
          <p>
            <NavLink to="/case-studies">
              MovieTime
            </NavLink>
          </p>
          <p>
            <NavLink to="/case-studies/next">
              SwimMeet
            </NavLink>
          </p>
        </div>
      </div>
      <div className="col-span-6 md:text-right flex flex-col md:items-end">
        <h5>Join My Newsletter</h5>
        <img
          src={newsletter}
          alt="Newsletter"
          className="mt-4"
        />
      </div>
    </Section>
  );
}

export default Footer;
