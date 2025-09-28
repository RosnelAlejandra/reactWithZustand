import { useState } from 'react';
import { TaskStatus, useTaskStore } from '../stores/task/task';
import Swal from 'sweetalert2';
import '../components/jira/sweetalert-custom.css';

export const useJiraTasks = (value: TaskStatus) => {
  const [onDragOver, setOnDragOver] = useState(false);
  
  // Store selectors
  const isDragging = useTaskStore(state => !!state.draggingTaskId);
  const updateTaskStatusByID = useTaskStore(state => state.setTaskStatusByID);
  const addTask = useTaskStore(state => state.addTask);

  // Drag handlers
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOnDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOnDragOver(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    updateTaskStatusByID(value);
    setOnDragOver(false);
  };

  // Add task handler
  const handleAddTask = async () => {
    const result = await Swal.fire({
      title: 'Nueva Tarea',
      text: 'Ingresa el nombre de la nueva tarea:',
      input: 'text',
      inputPlaceholder: 'Nombre de la tarea...',
      showCancelButton: true,
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3b82f6',
      cancelButtonColor: '#ef4444',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'swal-confirm-button',
        cancelButton: 'swal-cancel-button',
        popup: 'swal-popup',
        title: 'swal-title',
        htmlContainer: 'swal-text',
        input: 'swal-input'
      },
      inputValidator: (value) => {
        if (!value || value.trim() === '') {
          return 'Debes ingresar un nombre para la tarea';
        }
        if (value.length < 3) {
          return 'El nombre debe tener al menos 3 caracteres';
        }
        return null;
      }
    });

    if (result.isConfirmed && result.value) {
      addTask({ 
        title: result.value.trim(), 
        status: value, 
        id: '' 
      });
      
      await Swal.fire({
        title: '¡Tarea creada!',
        text: `La tarea "${result.value}" ha sido agregada exitosamente`,
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
        customClass: {
          popup: 'swal-popup',
          title: 'swal-title'
        }
      });
    }
  };

  return {
    // State
    isDragging,
    onDragOver,
    
    // Handlers
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleAddTask
  };
};