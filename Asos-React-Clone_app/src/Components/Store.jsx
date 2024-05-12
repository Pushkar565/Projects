import React from 'react';
import { legacy_createStore } from 'redux';

const Store = () => {
 
  const store = legacy_createStore(/* pass your reducer and initial state here */);

  return <div>{/* Your JSX content here */}</div>;
};

export default Store;
