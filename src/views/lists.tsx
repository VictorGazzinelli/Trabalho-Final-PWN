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
    <nav> {props.user.name} </nav>
    <button onClick={() => listNew(props.user.id)}> criar lista </button>
    {props.lists.map((list: IList) =>
      <div key={list.id}>
        <a href={`lists/${list.id}`}>
          <span className="white-90"> {list.name} </span>
        </a>
        <button onClick={() => listDel(list.id)}> deletar lista </button>
      </div>
    )}
  </>