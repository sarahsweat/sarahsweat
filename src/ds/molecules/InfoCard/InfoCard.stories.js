import React from 'react';
import InfoCard from './InfoCard';

export default { title: 'InfoCard' };

const style = {
  backgroundColor: 'black',
  padding: '20px'
}

export const Standard = () => (
  <div style={style}>
    <InfoCard
      title="Info Card"
      description={["This is an example of the Info card"]}
    />
  </div>
);

