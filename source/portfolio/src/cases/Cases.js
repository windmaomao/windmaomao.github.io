import cx from 'classnames';
import Section from '../common/Section';
import Movie from './movie/Movie';

function Cases() {
  const classNames = cx('mt-16');

  return (
    <Section className={classNames}>
      <h1>Case Studies</h1>
      <Movie />
    </Section>
  );
}

export default Cases;
