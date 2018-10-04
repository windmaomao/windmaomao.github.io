// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactToPrint from "react-to-print";
// components
import { Icon, Label, Table } from 'semantic-ui-react'

class Print extends Component {

  slots() {
    return (
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
  }

  render() {
    return (
      <div>
        <ReactToPrint trigger={() => <a>Print</a>}
          content={() => this.componentRef}
        />
        <div ref={el => (this.componentRef = el)} className="allow-print">
          <h1>Today's Schedule</h1>
          {this.slots()}
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
