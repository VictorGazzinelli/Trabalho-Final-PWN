import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default () => (
  <Route
    render={() => <Redirect to={{ pathname: '/' }} />}
  />
);