import cx from 'classnames';
import Header from './Header';
import Hero from './Hero';

function App() {
  const classNames = cx('font-base');
  return (
    <div className={classNames}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
