import { IoAddOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { ItemTask } from './ItemTask';
import { Task, TaskStatus } from '../../stores/task/task';
import classNames from 'classnames';
import { useJiraTasks } from '../../hooks';

interface Props {
  title: string;
  value: TaskStatus;
  tasks: Task[];
}

export const JiraTasks = ({ title, tasks = [], value }: Props) => {
  const {
    isDragging,
    onDragOver,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleAddTask
  } = useJiraTasks(value);
  
  return (
    <div 
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={
        classNames(
          "!text-black relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 w-full !p-4 3xl:p-![18px] border-4 transition-colors duration-200",
          { 
            'border-blue-500 border-dashed': isDragging && !onDragOver,
            'border-green-500 border-dashed': isDragging && onDragOver 
          }
        )
      }
    
    >


      {/* Task Header */ }
      <div className="relative flex flex-row justify-between">

        <div className="flex items-center justify-center">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100">
            <span className="flex justify-center items-center h-6 w-6 text-brand-500">
              <IoCheckmarkCircleOutline style={ { fontSize: '50px' } } />
            </span>
          </div>

          <h4 className="ml-4 text-xl font-bold text-navy-700">{ title }</h4>
        </div>

        <button onClick={handleAddTask}>
          <IoAddOutline />
        </button>

      </div>

      {/* Task Items */ }
      <div className="h-full w-full">
        {tasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-2xl">📝</span>
            </div>
            <p className="text-gray-500 text-sm font-medium">No hay tareas</p>
            <p className="text-gray-400 text-xs mt-1">Las tareas aparecerán aquí cuando las agregues</p>
          </div>
        ) : (
          tasks.map(task => (
            <ItemTask key={task.id} task={task} value={task.status} />
          ))
        )}
      </div>
    </div>
  );
};