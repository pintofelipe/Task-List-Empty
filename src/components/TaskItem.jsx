import { FiCheck,FiTrash2,FiEdit } from 'react-icons/fi';
import './TaskItem.css'
function TaskItem({task}) {



  const toggleTaskComplete= ()=>{

  }

  const handleEdit = ()=>{

  }

  const removeTask = (task)=>{
  
  }

  return (
    <>
    <div className="task-info">
      <small>Creado: {task.create}</small>
      <small>Nombre: {task.name}</small>
      <small>Completado: {task.complete}</small>
      <small>Fecha Limite: {task.limitDate}</small>
      <small>Categoria: {task.category}</small>
    </div>
    
    <div className='icons'>
      <button className='check-btn' onClick={()=> toggleTaskComplete}>
    <FiCheck size={18}/>
      </button>
      <button className='edit-btn' onClick={()=> handleEdit}>
      <FiEdit size={18}/>
      </button>
      <button className='delete-btn' onClick={()=> removeTask(task)}>
      <FiTrash2 size={18}/>
      </button>
    </div>

    </>
  );
}

export default TaskItem;
