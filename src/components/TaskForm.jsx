import { useState } from 'react';
import './TaskForm.css'
import { FiPlus } from 'react-icons/fi';

function TaskForm() {

  const [newTask, setNewTask] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')

  const handleSubit = ()=>{

  }

  return (
    <>
    <form className='task-form' onSubmit={handleSubit}>
    <input type="text" placeholder='Agregar tarea' value={newTask}
    onChange={(e)=> setNewTask(e.target.value)}
    />

    <select value={category} onChange={(e)=>setCategory(e.target.value)}>
    <option value="">Categoria</option>
    <option value="Trabajo">Trabjao</option>
    <option value="Personal">Personal</option>
    <option value="Hogar">Hogar</option>
    </select>
    <input type="date" value={date} onChange={(e)=>setDate(e.target.value  )}/>

    <button type='submit'>
      <FiPlus size={20}/>
    </button>
    </form>
    </>
  );
}

export default TaskForm;
