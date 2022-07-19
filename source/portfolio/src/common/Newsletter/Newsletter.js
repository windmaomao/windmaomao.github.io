import newsletter from './newsletter.png';
import newsletter2 from './newsletter@2x.png';

const Newsletter = () => {
  return (
    <img
      src={newsletter}
      srcSet={`${newsletter} 1x, ${newsletter2} 2x`}
      alt="Newsletter"
      className="mt-4"
    />
  );
};

export default Newsletter;
