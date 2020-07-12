import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, List, ListSubheader, TextField } from '@material-ui/core';
import { Add, Delete } from '@material-ui/icons';

import types from '../core/store/Types';
import TodoTask from './TodoTask';

export default (props) => {
  const { list, title, tasks } = props;
  const dispatch = useDispatch();

  const listTitle = (title) => {
    dispatch({ type: types.listTitle, list, title });
  };

  const listDel = () => {
    dispatch({ type: types.listDel, list });
  };

  const taskNew = () => {
    dispatch({ type: types.taskNew, list });
  };

  return (
    <Card>
      <List>
        <ListSubheader>
          <TextField
            onChange={(event) => listTitle(event.target.value)}
            value={title}
          />
          <Button onClick={() => taskNew()}><Add /> Tarefa</Button>
          <Button onClick={() => listDel()}><Delete /> Lista</Button>
        </ListSubheader>
        {tasks && tasks.map(task =>
          <TodoTask
            key={task.id}
            list={list}
            task={task.id}
            done={task.done}
            description={task.description}
          />
        )}
      </List>
    </Card>
  );
};