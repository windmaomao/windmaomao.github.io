// third party
import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

const Spinner = (props) => {
  console.log(props.enabled);
  if (!props.enabled) return null;
  return (
    <div className="ui active dimmer">
      <div className="ui loader"></div>
    </div>
  );
};

Spinner.propTypes = {
  enabled: PropTypes.bool.isRequired
}

export default observer(Spinner);
