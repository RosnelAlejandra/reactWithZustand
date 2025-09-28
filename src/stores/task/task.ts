import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from 'uuid';
//import { produce } from "immer";
import { immer } from "zustand/middleware/immer";

interface TaskState {
    tasks: Record<string, Task>; //{[key: string]: string };
    draggingTaskId?: string;
    setDraggingTaskId: (id?: string) => void;
    getTaskByStatus: (status: TaskStatus) => Task[];
    setTaskStatusByID: (status: TaskStatus) => void;
    addTask: (task: Task) => void;
}

export interface Task {
    id: string
    title: string;
    status: TaskStatus;
}

export type TaskStatus = 'open' | 'in-progress' | 'done';

const storeApi: StateCreator<TaskState, [["zustand/immer", never]]> = (set, get) => ({
    tasks: {
        'ABC-1': { id: 'ABC-1', title: 'Task 1', status: 'open' },
        'ABC-2': { id: 'ABC-2', title: 'Task 2', status: 'in-progress' },
        'ABC-3': { id: 'ABC-3', title: 'Task 3', status: 'done' },
        'ABC-4': { id: 'ABC-4', title: 'Task 4', status: 'open' },
        'ABC-5': { id: 'ABC-5', title: 'Task 5', status: 'in-progress' },
        'ABC-6': { id: 'ABC-6', title: 'Task 6', status: 'done' },
    },
    draggingTaskId: undefined,
    setDraggingTaskId: (id) => set({ draggingTaskId: id }),
    getTaskByStatus: (status) => {
        const tasks = get().tasks;
        return Object.values(tasks).filter(task => task.status === status);
    },
    
    setTaskStatusByID: (status) => {
        const tasks = get().tasks;
        const id = get().draggingTaskId || ''
        const task = tasks[id];
        if (!task || !id) return;

        const updatedTask = { ...task, status };
        /* set({
            tasks: {
                ...tasks,
                [id]: updatedTask
            },
           // draggingTaskId: undefined,
        }); */
        //?usando immer
        set((state) => {
            state.tasks[id] = updatedTask;
        });
        get().setDraggingTaskId(undefined);
    },

   
    addTask: (task) => {
           
            //? Utilizando set para mutar el estado
            /*  const tasks = get().tasks;
            set({
                tasks: {
                    ...tasks,
                    [uuidv4()]: { ...task, id: uuidv4() }
                },
            }); */
             //? Utilizando produce para mutar el estado
            /* set(produce((state) => {
                state.tasks[uuidv4()] = { ...task, id: uuidv4() }
            })); */
            //?usando immer
            set((state) => {
                state.tasks[uuidv4()] = { ...task, id: uuidv4() }
            });
    },





    });

export const useTaskStore = create<TaskState>()(
    devtools(persist(
      immer(storeApi)
    , {
        name: 'task-storage', // nombre del item en el storage
    }))
);
