import cx from 'classnames';

function Logo() {
  const classNames = cx(
    'font-heading',
    'text-xl',
  );
  return (
    <div className={classNames}>
      <span className="text-violet-500">
        Q
      </span>
      <span className="text-blue-600">
        plot
      </span>
    </div>
  );
}

export default Logo;
