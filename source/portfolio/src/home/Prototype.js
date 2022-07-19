import cx from 'classnames';
import Section from '../common/Section';
import prototypeImg from './prototype.png';

function Hero() {
  const classNames = cx(
    'mt-20 py-20',
    'bg-gradient-to-r from-blue-600 to-purple-500',
  );
  const sectionClassNames = cx(
    'my-10',
    'grid',
    'grid-cols-1 md:grid-cols-12',
    'gap-y-8',
    'items-center',
  );
  return (
    <div className={classNames}>
      <Section
        className={sectionClassNames}
      >
        <div className="col-span-7">
          <img
            src={prototypeImg}
            alt="Research"
          />
        </div>
        <div className="col-span-5 md:p-12">
          <label className="text-gray-200">
            Prototype Workflow
          </label>
          <h4 className="pt-4 text-white">
            Design functionalities and
            Resolve User Painpoints
          </h4>
        </div>
      </Section>
    </div>
  );
}

export default Hero;
