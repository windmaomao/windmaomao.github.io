import cx from 'classnames';
import Portfolios from '../../common/Portfolios';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import img7 from './7.jpg';
import img8 from './8.jpg';
import img9 from './9.jpg';
import img10 from './10.jpg';
import img11 from './11.jpg';
import img12 from './12.jpg';
import img13 from './13.jpg';
import img14 from './14.jpg';
import img15 from './15.jpg';
import img16 from './16.jpg';
import img17 from './17.jpg';
import img18 from './18.jpg';
import img19 from './19.jpg';
import img20 from './20.jpg';
import movieImg from './movie.jpg';

function Movie() {
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

  return (
    <div>
      <div className="float-right">
        <Portfolios />
      </div>
      <h2>MovieTime</h2>
      <div className={bannerClassNames}>
        <div className="col-span-2"></div>
        <img
          src={movieImg}
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
      <div
        className={chapterClassNames}
      >
        <div className="col-span-4 mr-24 text-right">
          <h4>
            <span className="text-red-600">
              Understanding
            </span>
            <br /> The User
          </h4>
          <div className="mt-8 flex flex-col gap-y-1">
            <label>User research</label>
            <label>Personas</label>
            <label>
              Problem statements
            </label>
            <label>
              User journey maps
            </label>
          </div>
        </div>
        <div className="col-span-8 max-w-xl">
          <img
            src={img5}
            alt="Slide2"
          />
          <img
            src={img6}
            alt="Slide3"
          />
          <img
            src={img7}
            alt="Slide4"
          />
          <img
            src={img8}
            alt="Slide4"
          />
        </div>
      </div>
      <div
        className={chapterClassNames}
      >
        <div className="col-span-4 mr-24 text-right">
          <h4>
            <span className="text-yellow-600">
              Starting
            </span>
            <br /> The Design
          </h4>
          <div className="mt-8 flex flex-col gap-y-1">
            <label>
              Paper wireframes
            </label>
            <label>
              Digital wireframes
            </label>
            <label>
              Low-fidelity prototype
            </label>
            <label>
              Usability studies
            </label>
          </div>
        </div>
        <div className="col-span-8 max-w-xl">
          <img
            src={img9}
            alt="Slide2"
          />
          <img
            src={img10}
            alt="Slide3"
          />
          <img
            src={img11}
            alt="Slide4"
          />
          <img
            src={img12}
            alt="Slide4"
          />
          <img
            src={img13}
            alt="Slide4"
          />
        </div>
      </div>
      <div
        className={chapterClassNames}
      >
        <div className="col-span-4 mr-24 text-right">
          <h4>
            <span className="text-green-600">
              Refining
            </span>
            <br /> The Design
          </h4>
          <div className="mt-8 flex flex-col gap-y-1">
            <label>Mockups</label>
            <label>
              High-fidelity prototype
            </label>
            <label>Accessibility</label>
          </div>
        </div>
        <div className="col-span-8 max-w-xl">
          <img
            src={img14}
            alt="Slide2"
          />
          <img
            src={img15}
            alt="Slide3"
          />
          <img
            src={img16}
            alt="Slide4"
          />
          <img
            src={img17}
            alt="Slide4"
          />
        </div>
      </div>
      <div
        className={chapterClassNames}
      >
        <div className="col-span-4 mr-24 text-right">
          <h4>
            <span className="text-gray-400">
              Going
            </span>
            <br /> Forward
          </h4>
          <div className="mt-8 flex flex-col gap-y-1">
            <label>Takeaways</label>
            <label>Next steps</label>
          </div>
        </div>
        <div className="col-span-8 max-w-xl">
          <img
            src={img18}
            alt="Slide2"
          />
          <img
            src={img19}
            alt="Slide3"
          />
          <img
            src={img20}
            alt="Slide4"
          />
        </div>
      </div>
      <div className="float-right">
        <Portfolios />
      </div>
      <div className="clear-both"></div>
    </div>
  );
}

export default Movie;
