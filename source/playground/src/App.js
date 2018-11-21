// libraries
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// components
import LayoutShell from './Layout/LayoutShell';
import Playground from './Playground/Playground';
import TestSheet from './TestSheet/TestSheet';

const App = () => {
  return (
    <LayoutShell>
      <Router>
        <Fragment>
          <Link to="/">Playground</Link>
          <Link to="/testsheet/">Test Sheet</Link>
          <Route path="/" exact component={Playground} />
          <Route path="/testsheet" exact component={TestSheet} />
        </Fragment>
      </Router>
    </LayoutShell>
  );
};

export default App;
