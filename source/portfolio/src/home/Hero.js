import cx from 'classnames';
import Section from '../common/Section';
import heroImg from './hero.jpg';

function Hero() {
  const classNames = cx(
    'mt-10',
    'grid',
    'grid-cols-1 md:grid-cols-7',
    'gap-y-8',
    'items-center',
  );
  return (
    <Section className={classNames}>
      <div className="col-span-4">
        <img src={heroImg} alt="Hero" />
      </div>
      <div className="col-span-3 m:p-4">
        <h1>
          Build it with Confidence
        </h1>
        <p className="mt-8">
          My name is Fang, 90% UI
          engineer and 10% UX designer.
          I build a site with precision
          and confidence.
        </p>
      </div>
    </Section>
  );
}

export default Hero;
