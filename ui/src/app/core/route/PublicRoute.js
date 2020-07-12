import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={
      (props) => authed === true
        ? <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        : <Component {...props} />
    }
  />
);