import React from 'react';

const styles = {
  marginTop: '5%',
};
const Top = (storyFn) => (
  <div style={styles}>
    {storyFn()}
  </div>
);
export default Top;
