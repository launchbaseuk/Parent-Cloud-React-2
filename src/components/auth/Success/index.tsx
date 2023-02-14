import React from 'react';
import InfoScreen from '../../shared/InfoScreen';

const Success = () => {
  return (
    <InfoScreen
      title={'Well done!'}
      content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
      buttonText={'Done'}
      route={'Login'}
    />
  );
};

export default Success;
