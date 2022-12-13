import React from 'react';
import InfoScreenNew from '../../shared/InfoScreenNew';

const Signup = () => {
  return (
    <InfoScreenNew
      title={'Do you have an active subscription?'}
      content={
        'If you’ve not yet had your corporate account set up, please either contact your HR team or you can email us directly for support.'
      }
      buttonText={'Contact Support'}
      buttonTextSecond={'Cancel'}
      route={'Success'}
    />
  );
};

export default Signup;
