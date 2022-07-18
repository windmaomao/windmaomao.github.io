import cx from 'classnames';
import Section from './Section';

function Header() {
  const classNames = cx(
    'mt-6',
    'flex justify-between items-center',
  );
  return (
    <Section className={classNames}>
      <div className="text-xl">
        Qplot
      </div>
      <div className="flex gap-x-4 text-sm">
        <div>Home</div>
        <div>About Me</div>
        <div>Case Studies</div>
      </div>
    </Section>
  );
}

export default Header;
