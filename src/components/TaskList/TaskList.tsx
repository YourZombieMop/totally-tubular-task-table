import React, {FC, ReactElement} from 'react';
import {Task} from '../../types/Task';

import './TaskList.scss';

interface TaskListProps {
  tasks: Task[]
}

const TaskList: FC<TaskListProps> = ({
  tasks
}): ReactElement => {
  return (
    <ul className='task-list'>
      {tasks.length ? (
        tasks.map((task: Task) => {
          return (
            <li key={task.id} className='task-list-element'>
              <p>{task.title}</p>
            </li>
          );
        })
      ) : (
        <li className='task-list-message'><p>No tasks here!</p></li>
      )}
    </ul>
  );
}

export default TaskList;