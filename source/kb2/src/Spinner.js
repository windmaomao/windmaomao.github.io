// third party
import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'react-emotion';
import DotLoader from 'react-spinners/DotLoader';

const color = '#f23600';
const override = css`
  position: fixed;
  top: 40%;
  left: 40%;
`;

const Spinner = (props) => {
  const {loading} = props;
  return (
    <div className={override}>
      <DotLoader size={100} color={color} loading={loading} />      
    </div>
  );
};

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Spinner;
