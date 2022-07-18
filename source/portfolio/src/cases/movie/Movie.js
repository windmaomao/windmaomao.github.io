import cx from 'classnames';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';

function Movie() {
  const chapterClassNames = cx(
    'mt-20',
    'grid',
    'grid-cols-1 md:grid-cols-12',
    'gap-y-8',
  );

  return (
    <div>
      <div
        className={chapterClassNames}
      >
        <div className="col-span-4 mr-24 text-right">
          <h4>
            <span className="text-blue-600">
              MovieTime
            </span>
            <br /> App Design
          </h4>
          <h5 className="mt-8">
            F. Jin
          </h5>
        </div>
        <div className="col-span-8 max-w-xl">
          <img
            src={img2}
            alt="Slide2"
          />
          <img
            src={img3}
            alt="Slide3"
          />
          <img
            src={img4}
            alt="Slide4"
          />
        </div>
      </div>
    </div>
  );
}

export default Movie;
