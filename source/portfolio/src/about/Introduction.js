import cx from 'classnames';
import Section from '../common/Section';
import aboutImg from './about.jpg';

function Introduction() {
  const classNames = cx(
    'mt-10',
    'grid',
    'grid-cols-1 md:grid-cols-7',
    'gap-x-8 gap-y-8',
  );
  return (
    <Section className={classNames}>
      <div className="col-span-3 m:p-4">
        <h1>About Me</h1>
        <p className="mt-8">
          Fang works with all sort of
          designers and engineers and is
          quite good at coding site
          structure and logic as well as
          making sites look nice and
          accessible these days.
        </p>
        <p className="mt-4">
          Off work, Fang hangs out with
          his family -wife, two kids and
          a dog. And he swims half an
          hour every day and meets
          parents in all sorts of the
          swim meets during summer time.
        </p>
      </div>
      <div className="col-span-4">
        <img
          src={aboutImg}
          alt="About"
        />
      </div>
    </Section>
  );
}

export default Introduction;
