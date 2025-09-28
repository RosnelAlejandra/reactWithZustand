import { JiraTasks } from '../../components';
import { useTaskStore } from '../../stores/task/task';

export const JiraPage = () => {

  const task = useTaskStore(state => state.tasks);
  const getTaskByStatus = useTaskStore(state => state.getTaskByStatus);

  //console.log({task});
  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <JiraTasks 
            title='Pendientes' 
            value='open' 
            tasks={getTaskByStatus('open')} 
          />
          
          <JiraTasks 
            title='Avanzando' 
            value='in-progress' 
            tasks={getTaskByStatus('in-progress')} 
          />
          
          <JiraTasks 
            title='Terminadas' 
            value='done' 
            tasks={getTaskByStatus('done')} 
          />

      </div>

    </>
  );
};