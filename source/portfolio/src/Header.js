import cx from 'classnames';
import Section from './Section';
import Logo from './Logo';
import Menu from './Menu';

function Header() {
  const classNames = cx(
    'mt-6',
    'flex flex-wrap',
    'justify-between items-center',
    'gap-y-4',
  );
  return (
    <Section className={classNames}>
      <Logo />
      <Menu />
    </Section>
  );
}

export default Header;
