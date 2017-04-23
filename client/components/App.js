import React from 'react';
import { Link } from 'react-router';

function App(props) {
  return (
    <div>
      <h1>
        <Link to="/">Reduxstagram</Link>
      </h1>

      {props.children}
    </div>
  );
};

export default App;
