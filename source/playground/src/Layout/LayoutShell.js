// libraries
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Provider, observer} from 'mobx-react';
// components
import LayoutMessage from './LayoutMessage';
// services
import LayoutStore from './LayoutStore';
// locals
const layout = new LayoutStore();

const LayoutShell = ({ children }) => {
  const {status: { messageOn }} = layout;
  return (
    <Fragment>
      <LayoutMessage layout={layout} open={messageOn} />
      <Provider layout={layout}>
        {children}
      </Provider>
    </Fragment>
  );
}

LayoutShell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default observer(LayoutShell);
