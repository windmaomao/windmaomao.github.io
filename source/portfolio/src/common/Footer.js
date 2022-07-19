import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import Section from './Section';
import Logo from './Logo';

function Footer() {
  const classNames = cx(
    'mt-20',
    'grid',
    'grid-cols-1 md:grid-cols-12',
    'gap-y-8',
  );
  return (
    <Section className={classNames}>
      <div className="col-span-2">
        <Logo />
      </div>
      <div className="col-span-2">
        <h5>Site</h5>
        <div className="pt-4">
          <div>
            <NavLink
              exact="true"
              to="/"
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink to="/about-me">
              About Me
            </NavLink>
          </div>
          <div>
            <NavLink to="/case-studies">
              Case Studies
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <h5>Cases</h5>
        <div className="pt-4">
          <div>
            <NavLink to="/case-studies">
              MovieTime
            </NavLink>
          </div>
          <div>
            <NavLink to="/case-studies/next">
              SwimMeet
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col-span-6 text-right">
        <h5>Join My Newsletter</h5>
      </div>
    </Section>
  );
}

export default Footer;
