import React from 'react';

const LocalTime = ({format}) => new Date().toLocaleDateString(format?format:'en-Us');

export default LocalTime;
