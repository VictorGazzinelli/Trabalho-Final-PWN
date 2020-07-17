import React from 'react';
import { IUser, IList } from './interfaces';

interface IProps {
  user: IUser
  lists: Array<IList>
}

const ListPage = (props: IProps) => {
  return (
  <div>
    <h1>Olá {props.user.name} !</h1>
    <ul>
      {
        props.lists.map( list =>
           <li key = {list.id}>
             <a href = {`api/lists/${list.id}`}>
              {list.name}
             </a>
            </li>
        )
      }
    </ul>
  </div>
  );
};

export default ListPage;
