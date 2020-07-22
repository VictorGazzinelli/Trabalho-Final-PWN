import React from 'react';
import { IUser, IList } from './interfaces';

interface IProps {
  user: IUser
  lists: Array<IList>
}

const listNew = async (userId: number) => {
  await fetch(`https://pwn-trabalho-final.herokuapp.com/api/lists`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ userId, name: '...' }),
  });
  location.reload();
};

const listDel = async (id: number) => {
  await fetch(`https://pwn-trabalho-final.herokuapp.com/api/lists/${id}`, {
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
    <nav className="navbar navbar-dark bg-dark"> {props.user.name} </nav>
    <button type="button" className="btn btn-light" onClick={() => listNew(props.user.id)}> Criar nova lista </button>
    {props.lists.map((list: IList) =>
      <a href={`lists/${list.id}`}>
        <div className="card" key={list.id}>
          <span> {list.name} </span>
          <button onClick={() => listDel(list.id)}> Deletar </button>
        </div>
      </a>
    )}
  </>