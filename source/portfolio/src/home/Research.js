import cx from 'classnames';
import Section from '../common/Section';
import researchImg from './research.png';

function Hero() {
  const classNames = cx(
    'mt-20',
    'grid',
    'grid-cols-1 md:grid-cols-12',
    'gap-y-8',
    'items-center',
  );
  return (
    <Section className={classNames}>
      <div className="col-span-5 md:p-12">
        <label className="text-gray-500">
          Research Customers
        </label>
        <h4 className="pt-4">
          Empathize Your Users And Share
          With Their Goals And
          Frustrations
        </h4>
      </div>
      <div className="col-span-7">
        <img
          src={researchImg}
          alt="Research"
        />
      </div>
    </Section>
  );
}

export default Hero;
