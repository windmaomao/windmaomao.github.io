import cx from 'classnames';
import { motion } from 'framer-motion';
import { appearProps } from './motionProps';

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
    <motion.section
      className={classNames}
      {...appearProps()}
    >
      {children}
    </motion.section>
  );
}

export default Section;
