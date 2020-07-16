import React from 'react';
import { Button } from '@material-ui/core';

// import { createStore } from 'redux'
// import { Provider } from 'react-redux';
// import AddTodo from '../redux/containers/AddTodo';
// import TodoList from '../redux/containers/TodoList';
// import rootReducer from '../redux/reducers';
// import { Todo } from '../redux/types';

// interface IndexPageProps {
//   todos: Todo[];
// };

const IndexPage = (props: any) => {
// use server data as preloaded state
//   const preloadedState = {
//     todos: props.todos,
//   };

//   const store = createStore(rootReducer, preloadedState);

  return (
    <div className="w-100 h-100 flex justify-center items-center">
    <a href={`http://localhost:3000/auth/github`} className='link'>
      <Button variant='contained' size='large'>
        Login via Github
      </Button>
    </a>
  </div>
  );
};

export default IndexPage;
