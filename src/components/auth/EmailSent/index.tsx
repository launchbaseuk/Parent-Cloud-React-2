import React from 'react';
import InfoScreen from '../../shared/InfoScreen';

const EmailSent = () => {
  return (
    <InfoScreen
      title={'Email sent!'}
      content={
        'Please check your inbox and follow the link to reset your password'
      }
      buttonText={'Open email'}
      route={'Success'}
    />
  );
};

export default EmailSent;

//WarningAuthImage
