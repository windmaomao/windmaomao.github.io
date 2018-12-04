// libraries
import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
// components
import OutlinerTable from './OutlinerTable';
// import TablePrototype from './TablePrototype';
// styles
import './Outliner.scss'; 
// services
import OutlinerStore from './OutlinerStore';
// locals
const store = new OutlinerStore();
store.fetchOutliner();

const Outliner = ({ layout }) => {
  const {tree, cols, options} = store; 
  return (
    <div className="content">
      <OutlinerTable tree={tree} cols={cols} options={options} />
      {/* Enable following line for prototype version */}
      {/* <TablePrototype />  */}
    </div>
  );
};

Outliner.propTypes = {
  layout: PropTypes.object.isRequired
}

export default inject('layout')(observer(Outliner));
