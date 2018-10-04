// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactToPrint from "react-to-print";
// components
import Slots from './Slots';

class Print extends Component {
  render() {
    const {slots, usages} = this.props;
    const chunk = (arr, size) => arr.reduce((acc, _, i) =>
      (i % size) ? acc : [...acc, arr.slice(i, i + size)], []
    );
    const groups = chunk(Object.keys(usages), 3);

    return (
      <div>
        <ReactToPrint trigger={() => <a>Print</a>}
          content={() => this.componentRef}
        />
        <div ref={el => (this.componentRef = el)} className="allow-print">
          <h1>Today's Schedule</h1>
          {groups.map((group, i) => (
            <Slots key={i} slots={slots} groupIds={group} />
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
