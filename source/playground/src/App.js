// libraries
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// components
import LayoutShell from './Layout/LayoutShell';
import LayoutHeader from './Layout/LayoutHeader';
import Playground from './Playground/Playground';
import TestSheet from './TestSheet/TestSheet';
import Outliner from './Outliner/Outliner';

const App = () => {
  return (
    <LayoutShell>
      <Router>
        <Fragment>
          <LayoutHeader />
          <Route path="/" exact component={Playground} />
          <Route path="/testsheet" exact component={TestSheet} />
          <Route path="/outliner" exact component={Outliner} />
        </Fragment>
      </Router>
    </LayoutShell>
  );
};

export default App;
