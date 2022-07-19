import cx from 'classnames';
import { Outlet } from 'react-router-dom';
import Section from '../common/Section';
import Movie from './movie/Movie';
import Swim from './swim/Swim';

function Cases() {
  const classNames = cx('mt-16');

  return (
    <Section className={classNames}>
      <Outlet />
    </Section>
  );
}

export default Cases;
export { Movie, Swim };
