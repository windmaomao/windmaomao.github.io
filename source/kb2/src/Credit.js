// third party
import React from 'react';
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
  return (
    <footer className={footer}>
      <hr />
      <p>Patience is to wait for the sure.</p>
      <p>&copy; Copyright 2018 &nbsp;
        <a href="https://www.linkedin.com/in/windmaomao">by Fang Jin</a>
      </p>
    </footer>
  );
};

export default Credit;
