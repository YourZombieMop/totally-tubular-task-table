import React, {FC, ReactElement} from 'react';
import {Task} from '../../types/Task';

interface TaskListElementProps {
  task: Task
}

const TaskListElement: FC<TaskListElementProps> = ({
  task
}): ReactElement => {
  return (
    <li>
      <p>{task.title}</p>
    </li>
  );
}

export default TaskListElement;