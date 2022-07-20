import cx from 'classnames';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import heroImg from './hero.jpg';
import Portfolios from '../common/Portfolios';
import { appearProps } from '../common/motionProps';

function Hero() {
  const classNames = cx(
    'mt-10',
    'grid',
    'grid-cols-1 md:grid-cols-12',
    'gap-y-8',
    'items-center',
    'min-h-max',
  );
  return (
    <Section className={classNames}>
      <div className="col-span-7">
        <img src={heroImg} alt="Hero" />
      </div>
      <div className="col-span-4 md:pl-4">
        <motion.h1
          {...appearProps(0.4)}
        >
          Build app with Confidence
        </motion.h1>
        <motion.p
          className="mt-5"
          {...appearProps(0.8)}
        >
          My name is Fang, 90% UI
          engineer and 10% UX designer.
          I build a site with precision
          and confidence. Checkout the
          case studies.
        </motion.p>
        <motion.div
          className="mt-8"
          {...appearProps(1.4)}
        >
          <Portfolios />
        </motion.div>
      </div>
    </Section>
  );
}

export default Hero;
