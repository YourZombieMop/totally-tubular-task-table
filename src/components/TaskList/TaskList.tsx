import React, {FC, ReactElement} from 'react';
import {Task} from '../../types/Task';
import TaskListElement from '../TaskListElement/TaskListElement';

interface TaskListProps {
  tasks: Task[]
}

const TaskList: FC<TaskListProps> = ({
  tasks
}): ReactElement => {
  return (
    <>
      {tasks.length ? (
        <ul>
          {tasks.map((task: Task) => {
            return <TaskListElement key={task.id} task={task} />;
          })}
        </ul>
      ) : (
        <p>No tasks here!</p>
      )}
    </>
  );
}

export default TaskList;