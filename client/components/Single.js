import React from 'react';
import Photo from './Photo';

import Comments from './Comments';

function Single(props) {
  return (
    <div className="single-photo">
      <Photo {...props} />
      <Comments {...props} />
    </div>
  );
}

export default Single;
