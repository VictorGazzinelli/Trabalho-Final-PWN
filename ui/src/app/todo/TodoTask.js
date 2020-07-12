import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Checkbox, Divider, ListItem, TextField } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

import types from '../core/store/Types';

export default (props) => {
  const { list, task, done, description } = props;
  const dispatch = useDispatch();

  const taskDel = () => {
    dispatch({ type: types.taskDel, list, task });
  };

  const taskDone = (done) => {
    dispatch({ type: types.taskDone, list, task, done });
  };

  const taskDesc = (description) => {
    dispatch({ type: types.taskDesc, list, task, description });
  };

  return (
    <>
      <Divider />
      <ListItem className='flex items-center' style={{ background: done ? '#f1f1f1' : '#ffffff' }}>
        <Checkbox
          checked={done}
          onChange={(event) => taskDone(event.target.checked)}
          color='default'
        />
        <TextField
          style={{ flexGrow: 1 }}
          placeholder='Tarefa...'
          value={description}
          onChange={(event) => taskDesc(event.target.value)}
        />
        <Button onClick={() => taskDel()}><Delete /> Tarefa</Button>
      </ListItem>
    </>
  );
};