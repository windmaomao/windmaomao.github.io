import cx from 'classnames';

function Logo() {
  const classNames = cx(
    'font-heading',
    'text-xl',
  );
  return (
    <div className={classNames}>
      Qplot
    </div>
  );
}

export default Logo;
