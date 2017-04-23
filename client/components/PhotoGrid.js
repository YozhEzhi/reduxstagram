import React from 'react';

import PhotoContainer from '../containers/PhotoContainer';

function PhotoGrid(props) {
  const posts = props.posts;

  return (
    <div className="photo-grid">
      {posts.map((post, i) => <PhotoContainer key={i} post={post} />)}
    </div>
  );
}

export default PhotoGrid;
