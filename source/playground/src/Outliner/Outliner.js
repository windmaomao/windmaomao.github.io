// libraries
import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
// components
import TableTree from './TableTree';
// import TablePrototype from './TablePrototype';
// styles
import './Outliner.scss'; 
// services
import OutlinerStore from './OutlinerStore';

const store = new OutlinerStore();
store.fetchOutliner();

const Outliner = ({ layout }) => {
  const {root} = store; 
  return (
    <div className="content">
      <TableTree root={root}></TableTree>
      {/* Enable following line for prototype version */}
      {/* <TablePrototype />  */}
    </div>
  );
};

Outliner.propTypes = {
  layout: PropTypes.object.isRequired
}

export default inject('layout')(observer(Outliner));
