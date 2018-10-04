// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactToPrint from "react-to-print";
// components
import { Label, Table } from 'semantic-ui-react'

const Slots = props => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Slot</Table.HeaderCell>
        <Table.HeaderCell colSpan="3">T1</Table.HeaderCell>
        <Table.HeaderCell colSpan="3">T2</Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell></Table.HeaderCell>
        <Table.HeaderCell>S1</Table.HeaderCell>
        <Table.HeaderCell>S2</Table.HeaderCell>
        <Table.HeaderCell>S3</Table.HeaderCell>
        <Table.HeaderCell>S1</Table.HeaderCell>
        <Table.HeaderCell>S2</Table.HeaderCell>
        <Table.HeaderCell>S3</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>First</Label>
        </Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>             
);

Slots.propTypes = {
  slots: PropTypes.object.isRequired,
  groupIds: PropTypes.array.isRequired,
}

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
