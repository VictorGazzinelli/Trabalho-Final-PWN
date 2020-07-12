import { createStore } from 'redux';

import { initState, listNew, taskNew } from './States';
import types from './Types';

const todo = (state = initState, action) => {
  switch (action.type) {

    case types.listNew:
      return {
        ...state,
        lists: [...state.lists, listNew()]
      };
    case types.listDel:
      return {
        ...state,
        lists: state.lists.filter(l => l.id !== action.list)
      };
    case types.listTitle:
      return {
        ...state,
        lists: state.lists.map(
          list => list.id === action.list
            ? {
              ...list,
              title: action.title
            }
            : list
        )
      };

    case types.taskNew:
      return {
        ...state,
        lists: state.lists.map(
          list => list.id === action.list
            ? {
              ...list,
              tasks: [...list.tasks, taskNew()]
            }
            : list
        )
      };
    case types.taskDel:
      return {
        ...state,
        lists: state.lists.map(
          list => list.id === action.list
            ? {
              ...list,
              tasks: list.tasks.filter(task => task.id !== action.task)
            }
            : list
        )
      };
    case types.taskDone:
      return {
        ...state,
        lists: state.lists.map(
          list => list.id === action.list
            ? {
              ...list,
              tasks: list.tasks.map(
                task => task.id === action.task
                  ? {
                    ...task,
                    done: action.done
                  }
                  : task
              )
            }
            : list
        )
      };
    case types.taskDesc:
      return {
        ...state,
        lists: state.lists.map(
          list => list.id === action.list
            ? {
              ...list,
              tasks: list.tasks.map(
                task => task.id === action.task
                  ? {
                    ...task,
                    description: action.description
                  }
                  : task
              )
            }
            : list
        )
      };

    default:
      return state;
  }
};

const store = createStore(todo);

export default store;