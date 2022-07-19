import cx from 'classnames';
import Section from '../Section';
import linkedin from './linkedin.png';
import linkedin2 from './linkedin@2x.png';
import medium from './medium.png';
import medium2 from './medium@2x.png';
import amazon from './amazon.png';
import amazon2 from './amazon@2x.png';
import codepen from './codepen.png';
import codepen2 from './codepen@2x.png';
import stackoverflow from './stackoverflow.png';
import stackoverflow2 from './stackoverflow@2x.png';

const FindMe = () => {
  const classNames = cx(
    'mt-10 pt-10',
    'bg-gray-100',
  );
  const sitesClassNames = cx(
    'p-10',
    'flex flex-wrap',
    'justify-around items-center',
    'gap-x-14 gap-y-8',
  );

  return (
    <div className={classNames}>
      <Section>
        <h5>Find Me At</h5>
        <div
          className={sitesClassNames}
        >
          <img
            src={linkedin}
            srcSet={`${linkedin} 1x, ${linkedin2} 2x`}
            alt="LinkedIn"
          />
          <img
            src={medium}
            srcSet={`${medium} 1x, ${medium2} 2x`}
            alt="Medium"
          />
          <img
            src={amazon}
            srcSet={`${amazon} 1x, ${amazon2} 2x`}
            alt="Amazon"
          />
          <img
            src={codepen}
            srcSet={`${codepen} 1x, ${codepen2} 2x`}
            alt="Codepen"
          />
          <img
            src={stackoverflow}
            srcSet={`${stackoverflow} 1x, ${stackoverflow2} 2x`}
            alt="Stackoverflow"
          />
        </div>
      </Section>
    </div>
  );
};

export default FindMe;
