import { StateCreator } from "zustand";

export interface PersonSlice{
    firstName: string;
    lastName: string;

    setFirstName: (firstName: string) => void;
    setLastName: (lastName: string) => void;
} 

// Necesitamos un tipo genérico para el estado compartido
export const createPersonSlice: StateCreator<
    PersonSlice,
    [["zustand/devtools", never]],
    [],
    PersonSlice
> = (set) => ({
    firstName: '',
    lastName: '',
    setFirstName: (firstName) => set({ firstName }, false, 'person/setFirstName'),
    setLastName: (lastName) => set({ lastName }, false, 'person/setLastName'),
})