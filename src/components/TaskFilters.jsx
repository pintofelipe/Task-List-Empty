import { FiPlus } from 'react-icons/fi';
import './TaskFilters.css'
const TaskFilters = ()=> {

const handleOnChange= (e)=>{

}


  return (
    <>
    <div className='task-filters'>
    <select onChange={(e)=> handleOnChange(e.target.value)}>
    <option value="">Todas las Categorias</option>
    <option value="Trabajo">Trabjao</option>
    <option value="Personal">Personal</option>
    <option value="Hogar">Hogar</option>
    </select>

    <select onChange={(e)=> handleOnChange(e.target.value)}>
    <option value="">Todas los estados</option>
    <option value="completed">Completados</option>
    <option value="pending">Pendientes</option>
    </select>

    <button type='submit'>
      <FiPlus size={20}/>
    </button>
    
    </div>
    </>
  );
}

export default TaskFilters;
