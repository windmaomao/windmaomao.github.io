// third party
import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'react-emotion';

const footer = css`
  padding: 2rem;
  font-style: italic;
  font-size: 0.8rem;
  p {
    text-align: center;
  }
`;
// .footer p {
// }
const Credit = (props) => {
  const {message} = props;
  return (
    <footer className={footer}>
      <hr />
      <p>{message}</p>
      <p>&copy; Copyright 2018 &nbsp;
        <a href="https://www.linkedin.com/in/windmaomao">by Fang Jin</a>
      </p>
    </footer>
  );
};

Credit.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Credit;
