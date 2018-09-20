// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CsvParse from '@vtex/react-csv-parse'

class Upload extends Component {
  handleData = data => {
    const processed = data.map(item => {
      const id = item.customer.replace('Student Name - ', '');
      const start = item.date;
      const end = item.duration;
      return {id, start, end};
    });
    this.props.onDataUpload(processed)
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
