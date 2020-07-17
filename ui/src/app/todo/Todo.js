import React from 'react';
import { useSelector } from 'react-redux';

import Nav from '../shared/Nav';
import TodoList from './TodoList';

export default () => {
  const { lists } = useSelector(s => s);

  return (
    <>
      <Nav />
      <div className='pa4' style={{ display: 'grid', gridAutoFlow: 'row', gridGap: '1rem' }}>
        {lists && lists.map(list =>
          <TodoList
            key={list.id}
            list={list.id}
            title={list.title}
            tasks={list.tasks}
          />
        )}
      </div>
    </>
  );
};