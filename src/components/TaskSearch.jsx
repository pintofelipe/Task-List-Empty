import './TaskSearch.css'
function TaskSearch({setSearchQuery}) {
  return (
    <>
    <div className="task-search">
    <input 
    placeholder='Buscar tareas...'
    type="text"
    onChange={(e)=> setSearchQuery(e.target.value)}
    />
    
    </div>
    </>
  );
}

export default TaskSearch;
