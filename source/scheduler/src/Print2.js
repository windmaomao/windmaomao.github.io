// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactToPrint from "react-to-print";
// components
import { Button } from 'semantic-ui-react'
import Slots from './Slots';
// services
import {printTeacherGroup} from './constant';

const buttonStyle = {
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  opacity: 0.4
};
const PrintButton = (
  <Button circular color='grey' style={buttonStyle}>Print</Button>
);

class Print extends Component {
  render() {
    const {slots, usages} = this.props;
    const groupIds = printTeacherGroup(Object.keys(usages));

    return (
      <div>
        <ReactToPrint trigger={() => PrintButton}
          content={() => this.componentRef}
        />
        <div ref={el => (this.componentRef = el)} className="allow-print">
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
}

export default Print;
