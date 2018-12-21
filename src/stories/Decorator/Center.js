import React from 'react';

const styles = {
  marginTop: '10px',
  marginLeft: '10px',
};
const Center = (storyFn) => (
  <div style={styles}>
    {storyFn()}
  </div>
);
export default Center;
