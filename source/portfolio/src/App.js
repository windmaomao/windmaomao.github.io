import cx from 'classnames';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './common/Header';
import Home from './home/Home';
import AboutMe from './about/AboutMe';

function App() {
  const classNames = cx('font-base');
  return (
    <div className={classNames}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/about-me"
            element={<AboutMe />}
          />
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
