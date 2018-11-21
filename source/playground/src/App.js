// libraries
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// components
import LayoutShell from './Layout/LayoutShell';
import Showcase from './Showcase/Showcase';

const App = () => {
  return (
    <LayoutShell>
      <Router>
        <Fragment>
          <Link to="/">Playground</Link>

          <Route path="/" exact component={Showcase} />
        </Fragment>
      </Router>
    </LayoutShell>
  );
};

export default App;
