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
    <AppBar position='static' style={{ background: '#212121' }}>
      <Toolbar style={{ maxWidth: '1200px', margin: '0 auto' }} className='flex justify-between items-center w-100'>
        <Typography variant='h6'>Lista de Tarefas</Typography>
        <Button variant='contained' color='default' onClick={() => listNew()}><Add /> Lista</Button>
      </Toolbar>
    </AppBar>
  );
};