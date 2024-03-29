import cx from 'classnames';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import aboutImg from './about.jpg';
import { appearProps } from '../common/motionProps';

function Introduction() {
  const classNames = cx(
    'mt-16',
    'grid',
    'grid-cols-1 md:grid-cols-7',
    'gap-x-8 gap-y-8',
    'min-h-max',
  );
  return (
    <Section className={classNames}>
      <div className="col-span-3 m:p-4">
        <h2>About Me</h2>
        <p className="mt-8 mr-16">
          Fang works with all sort of
          designers and engineers and is
          quite good at coding site
          structure and logic as well as
          making sites look nice and
          accessible these days.
        </p>
        <p className="mt-4 mr-16">
          Off work, Fang hangs out with
          his family - his wife, two
          kids and a dog. He swims half
          an hour every day and meets
          parents in all sorts of the
          swim meets during summer time.
        </p>
        <a
          href="resume.pdf"
          target="_blank"
        >
          <button className="mt-8">
            Resume
          </button>
        </a>
      </div>
      <motion.div
        className="col-span-4 pt-8"
        {...appearProps(0.5)}
      >
        <img
          src={aboutImg}
          alt="About"
        />
      </motion.div>
    </Section>
  );
}

export default Introduction;
