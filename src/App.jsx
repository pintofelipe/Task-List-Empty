import './index.css';
import './components/TaskForm'
import TaskForm from './components/TaskForm';
import Header from './components/Header';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {

  const [tasks,setTasks]= useState([
    {create: '13/09/2024', name:'Clase de Programación intermedio', complete:'Si', limitDate:'19/09/2024', category:'Trabajo'},
    {create: '14/09/2024', name:'Clase de simulacion', complete:'No', limitDate:'20/09/2024', category:'Taller'},
    {create: '15/09/2024', name:'Clase de maratón de programación', complete:'Si', limitDate:'19/09/2024', category:'Trabajo'},
    {create: '16/09/2024', name:'Clase de IA', complete:'No', limitDate:'20/09/2024', category:'Taller'}
  
  ])


  return (
    <>
      <Header/>
      <TaskForm/>
      <TaskList tasks={tasks}/>
    </>
  );
}

export default App;
