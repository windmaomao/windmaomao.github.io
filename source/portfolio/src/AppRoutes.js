import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Cases, {
  Movie,
  Swim,
  Math,
} from './cases/Cases';

function AppRoutes() {
  return (
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
  );
}

export default AppRoutes;
