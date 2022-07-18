import cx from 'classnames';
import Section from '../common/Section';
import heroImg from './hero.jpg';

function Hero() {
  const classNames = cx(
    'mt-10',
    'grid',
    'grid-cols-1 md:grid-cols-12',
    'gap-y-8',
    'items-center',
  );
  return (
    <Section className={classNames}>
      <div className="col-span-7">
        <img src={heroImg} alt="Hero" />
      </div>
      <div className="col-span-5 md:p-12">
        <h1>
          Build app with Confidence
        </h1>
        <p className="mt-8">
          My name is Fang, 90% UI
          engineer and 10% UX designer.
          I build a site with precision
          and confidence. Feel free to
          reach out to me for proposals.
        </p>
      </div>
    </Section>
  );
}

export default Hero;
