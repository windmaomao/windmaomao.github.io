// libraries
import React from 'react';
// components
import { List } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const LayoutHeader = () => {
  return (
    <List link horizontal celled size="large">
      <List.Item>
        <Link to="/">Playground</Link>
      </List.Item>
      <List.Item>
        <Link to="/testsheet/">Test Sheet</Link>
      </List.Item>
      <List.Item>
        <Link to="/outliner/">Outliner</Link>
      </List.Item>
    </List>
  );
};

export default LayoutHeader;
