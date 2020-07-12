import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Todo from './todo/Todo';
import Login from './shared/Login';
import PrivateRoute from './core/route/PrivateRoute';
import PublicRoute from './core/route/PublicRoute';
import NotFound from './core/route/NotFound';
import Store from './core/store/Store';

const authenticated = true;

export default () => (
  <Provider store={Store}>
    <BrowserRouter>
      <PublicRoute path='/login' component={Login} authed={authenticated} exact />
      <PrivateRoute path='/' component={Todo} authed={authenticated} exact />
      <PrivateRoute path='/list/:id' component={Todo} authed={authenticated} exact />
      <Route path='*' component={NotFound} />
    </BrowserRouter>
  </Provider>
);