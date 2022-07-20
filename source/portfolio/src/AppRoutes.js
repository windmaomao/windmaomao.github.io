import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import Home from './home/Home';
import About from './about/About';
import Cases, {
  Movie,
  Swim,
  Math,
} from './cases/Cases';

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Routes location={location}>
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
      </motion.div>
    </AnimatePresence>
  );
}

export default AppRoutes;
