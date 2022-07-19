import cx from 'classnames';

function Bottom() {
  const classNames = cx(
    'mt-20',
    'h-1.5',
    'bg-gradient-to-r from-blue-600 to-purple-500',
  );
  return (
    <div className={classNames}></div>
  );
}

export default Bottom;
