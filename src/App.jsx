import './index.css';
import './components/TaskForm'
import TaskForm from './components/TaskForm';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskSearch from './components/TaskSearch';
import { useState } from 'react';
import TaskFilters from './components/TaskFilters';

function App() {

  const [tasks,setNewTasks]= useState([])

  const addTask = (task)=>{
   setNewTasks([...tasks, task])
  }

  return (
    <>
      <Header/>
      <TaskSearch/>
      <TaskFilters/>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks}/>
    </>
  );
}

export default App;
