import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import swimImg from './swim.png';

function Swim() {
  const chapterClassNames = cx(
    'my-20',
    'grid',
    'grid-cols-1 md:grid-cols-12',
    'gap-y-8',
  );
  const bannerClassNames = cx(
    'mt-20',
    'grid',
    'grid-cols-12',
    'items-center',
  );
  const arrowClassNames = cx(
    'cursor-pointer',
    'text-slate-300',
    'hover:text-slate-500',
  );

  return (
    <div>
      <NavLink to="/case-studies">
        <h4 className={arrowClassNames}>
          Prev: MovieTime
        </h4>
      </NavLink>
      <h2>SwimMeet</h2>
      <div className={bannerClassNames}>
        <div className="col-span-2"></div>
        <img
          src={swimImg}
          alt="MovieTime"
          className="col-span-8 w-full"
        />
        <div className="col-span-2"></div>
      </div>
      <div
        className={chapterClassNames}
      >
        <div className="col-span-4 mr-24 text-right">
          <h4>
            <span className="text-blue-600">
              SwimMeet
            </span>
            <br /> On The Go
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
      <NavLink to="/case-studies">
        <h4 className={arrowClassNames}>
          Prev: MovieTime
        </h4>
      </NavLink>
    </div>
  );
}

export default Swim;
