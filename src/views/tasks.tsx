import React from 'react';
import { IList, ITask } from './interfaces';

interface IProps {
  list: IList
  tasks: Array<ITask>
}

const TaskPage = (props: IProps) => {
  return (
  <div>
    <h1>{props.list.name} !</h1>
    <ul>
      {
        props.tasks.map( task =>
           <li key = {task.id}>
             {task.name}
            </li>
        )
      }
    </ul>
  </div>
  );
};

export default TaskPage;
