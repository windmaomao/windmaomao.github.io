import cx from 'classnames';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ScrollToTop from './common/ScrollToTop';
import Header from './common/Header';
import Home from './home/Home';
import About from './about/About';
import Cases, {
  Movie,
  Swim,
  Math,
} from './cases/Cases';
import Footer from './common/Footer';
import Bottom from './common/Bottom';

function App() {
  const classNames = cx('font-base');
  return (
    <div className={classNames}>
      <Router basename={'portfolio'}>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route
            path="/about-me"
            element={<About />}
          />
          <Route
            path="/case-studies"
            element={<Cases />}
          >
            <Route
              path="math"
              element={<Math />}
            />
            <Route
              path="swim"
              element={<Swim />}
            />
            <Route
              path="movie"
              element={<Movie />}
            />
            <Route
              exact
              path=""
              element={<Movie />}
            />
          </Route>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
        <Footer />
        <Bottom />
      </Router>
    </div>
  );
}

export default App;
