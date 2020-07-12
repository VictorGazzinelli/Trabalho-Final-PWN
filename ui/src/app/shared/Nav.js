import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import types from '../core/store/Types';

export default () => {
  const dispatch = useDispatch();

  const listNew = () => {
    dispatch({ type: types.listNew });
  };

  return (
    <AppBar position='static' color='secondary'>
      <Toolbar>
        <Typography variant='h6'>Lista de Tarefas</Typography>
        <Button variant='contained' color='primary' onClick={() => listNew()}><Add /> Lista</Button>
      </Toolbar>
    </AppBar>
  );
};