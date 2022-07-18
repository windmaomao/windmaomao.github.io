import cx from 'classnames';

function Menu() {
  const classNames = cx(
    'flex',
    'gap-x-4',
    'font-heading',
    'text-sm',
  );
  return (
    <div className={classNames}>
      <div>Home</div>
      <div>About Me</div>
      <div>Case Studies</div>
    </div>
  );
}

export default Menu;
