// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactToPrint from "react-to-print";
// components
import { Button } from 'semantic-ui-react'
import Slots from './Slots';

const buttonStyle = {
  float: 'right',
  marginTop: '0.5rem'
};
const PrintButton = (
  <Button circular color='red' style={buttonStyle}>Print</Button>
);

class Print extends Component {
  render() {
    const {slots, usages} = this.props;
    const chunk = (arr, size) => arr.reduce((acc, _, i) =>
      (i % size) ? acc : [...acc, arr.slice(i, i + size)], []
    );
    const groupIds = chunk(Object.keys(usages), 3);

    return (
      <div>
        <ReactToPrint trigger={() => PrintButton}
          content={() => this.componentRef}
        />
        <div ref={el => (this.componentRef = el)} className="allow-print">
          <span></span>
          <h1>Today's Schedule</h1>
          {groupIds.map((ids, i) => (
            <Slots key={i} slots={slots} ids={ids} />
          ))}
        </div>
 
      </div>
    )
  }
};

Print.propTypes = {
  slots: PropTypes.object.isRequired,
  usages: PropTypes.object,
  classes: PropTypes.object
}

export default Print;
