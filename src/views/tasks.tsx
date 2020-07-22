import React from 'react';
import { IList, ITask } from './interfaces';

interface IProps {
  list: IList
  tasks: Array<ITask>
}

const listPut = async (userId: number, name: string) => {
  await fetch(`https://pwn-trabalho-final.herokuapp.com/api/lists`, {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ userId, name }),
  });
  location.reload();
};

const taskNew = async (listId: number) => {
  await fetch(`https://pwn-trabalho-final.herokuapp.com/api/tasks`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ listId, name: '...', isDone: false }),
  });
  location.reload();
};

const taskPut = async (listId: number, name: string, isDone: boolean) => {
  await fetch(`https://pwn-trabalho-final.herokuapp.com/api/tasks`, {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ listId, name, isDone }),
  });
  location.reload();
};

const taskDel = async (id: number) => {
  await fetch(`https://pwn-trabalho-final.herokuapp.com/api/tasks/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  });
  location.reload();
};

export default (props: IProps) =>
  <>
    <nav><input type="text" value={props.list.name}
      onBlur={(event) => listPut(props.list.id, event.target.value)} /></nav>
    <button onClick={() => taskNew(props.list.id)}> criar tarefa </button>
    <ul>
      {props.tasks.map((task: ITask) =>
        <li key={task.id}>
          <input type="text" value={task.name}
            onBlur={(event) => taskPut(props.list.id, event.target.value, task.isDone)} />
          <input type="checkbox" checked={task.isDone}
            onChange={(event) => taskPut(props.list.id, task.name, event.target.checked)} />
          <button onClick={() => taskDel(task.id)}> deletar tarefa </button>
        </li>
      )}
    </ul>
  </>