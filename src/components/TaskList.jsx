import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks }) {
  return (
    <ul className='task-list'>
      {tasks.map((task, index) => (
        <li key={index}>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
