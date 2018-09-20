// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CsvParse from '@vtex/react-csv-parse'

class Upload extends Component {
  handleData = data => {
    const nonEmpty = data.filter(item => item.customer);
    const processed = nonEmpty.map(item => {
      const id = item.customer.replace('Student Name - ', '');
      const date = new Date(item.date);
      const start = Math.round(date.getHours()*4+date.getMinutes()/15) - 48;
      const duration = item.duration.replace(' mins', '');
      const end = start + Math.round(parseInt(duration, 10)/15) - 1;
      return {id, start, end};
    });
    this.props.onDataUpload(processed);
  }  

  render() {
    const keys = [
      "cost",
      "duration",
      "customer",
      "date",
    ];

    return (
      <CsvParse
        keys={keys}
        onDataUploaded={this.handleData}
        onError={this.handleError}
        render={onChange => <input type="file" onChange={onChange} />}
      />            
    )        
  }
}

Upload.propTypes = {
  onDataUpload: PropTypes.func.isRequired,
}

export default Upload;
