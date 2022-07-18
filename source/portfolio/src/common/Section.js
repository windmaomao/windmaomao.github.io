import cx from 'classnames';

function Section({
  children,
  className,
}) {
  const classNames = cx(
    'max-w-screen-lg',
    'mx-auto',
    'px-4',
    className,
  );
  return (
    <section className={classNames}>
      {children}
    </section>
  );
}

export default Section;
