import cx from 'classnames';
import Portfolios from '../../common/Portfolios';
import mathImg from './math.jpg';

function Math() {
  const bannerClassNames = cx(
    'mt-20',
    'grid',
    'grid-cols-12',
    'items-center',
  );

  return (
    <div>
      <div className="float-right">
        <Portfolios />
      </div>
      <h2>MathMonkey</h2>
      <label>
        Under construction ...
      </label>
      <div className={bannerClassNames}>
        <div className="col-span-2"></div>
        <img
          src={mathImg}
          alt="MathMonkey"
          className="col-span-8 w-full"
        />
        <div className="col-span-2"></div>
      </div>
      <div className="float-right">
        <Portfolios />
      </div>
      <div className="clear-both"></div>
    </div>
  );
}

export default Math;
