import cx from 'classnames';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './common/ScrollToTop';
import Header from './common/Header';
import AppRoutes from './AppRoutes';
import Footer from './common/Footer';
import Bottom from './common/Bottom';
import AppTransition from './AppTransition';

function App() {
  const classNames = cx('font-base');
  return (
    <div className={classNames}>
      <Router basename={'portfolio'}>
        <ScrollToTop />
        <Header />
        <AppTransition />
        <AppRoutes />
        <Footer />
        <Bottom />
      </Router>
    </div>
  );
}

export default App;
