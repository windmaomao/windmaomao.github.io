import cx from 'classnames';
import Section from '../common/Section';
import heroImg from './hero.jpg';
import Portfolios from '../common/Portfolios';

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
      <div className="col-span-4 md:pl-4">
        <h1>
          Build app with Confidence
        </h1>
        <p className="mt-5">
          My name is Fang, 90% UI
          engineer and 10% UX designer.
          I build a site with precision
          and confidence. Checkout the
          case studies.
        </p>
        <div className="mt-8">
          <Portfolios />
        </div>
      </div>
    </Section>
  );
}

export default Hero;
