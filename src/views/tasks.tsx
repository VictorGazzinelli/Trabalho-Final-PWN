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
    <nav className="navbar navbar-dark bg-dark">
      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm"> Título: </span>
        </div>
        <input onBlur={(event) => listPut(props.list.id, event.target.value)} type="text" className="form-control" value={props.list.name} />
      </div>
    </nav>
    <button type="button" className="btn btn-light" onClick={() => taskNew(props.list.id)}> Criar nova lista </button>
    <ul className="list-group">
      {props.tasks.map((task: ITask) =>
        <li className="list-group-item" key={task.id}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <input onBlur={(event) => taskPut(props.list.id, event.target.value, task.isDone)} type="checkbox" value={task.name} />
              </div>
            </div>
            <input onChange={(event) => taskPut(props.list.id, task.name, event.target.checked)} type="text" className="form-control" checked={task.isDone} />
          </div>
          <button type="button" className="btn btn-light" onClick={() => taskDel(task.id)}> Criar nova lista </button>
        </li>
      )}
    </ul>
  </>