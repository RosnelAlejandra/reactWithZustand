import { StateCreator } from "zustand";

export interface DateSlice {
    eventDate: Date;
    eventYYYYMMDD: () => string;
    eventHHMM: () => string;
    setEventDate: (date: string) => void;
    setTime: (time: string) => void;
}

export const createDateSlice: StateCreator<
    DateSlice,
    [["zustand/devtools", never]],
    [],
    DateSlice
> = (set, get) => ({
    eventDate: new Date(),
    eventYYYYMMDD: () => {
        const date = get().eventDate;
        // Asegurar que date sea un objeto Date válido
        const dateObj = date instanceof Date ? date : new Date(date);
        if (isNaN(dateObj.getTime())) return new Date().toISOString().split('T')[0];
        return dateObj.toISOString().split('T')[0];
    },
    eventHHMM: () => {
        const date = get().eventDate;
        // Asegurar que date sea un objeto Date válido
        const dateObj = date instanceof Date ? date : new Date(date);
        if (isNaN(dateObj.getTime())) return '12:00';
        return dateObj.toTimeString().split(' ')[0].slice(0, 5);
    },

  setEventDate: (parcialDate: string) => set( (state) => {
    const date = new Date(parcialDate);

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate() + 1;

    const newDate = new Date( state.eventDate );
    newDate.setFullYear(year, month, day);

    console.log({ newDate})
    return { eventDate: newDate };

  }),

  setTime: (eventTime: string) => set( state => { //HH:MM

    const hours = parseInt(eventTime.split(':')[0]);
    const minutes = parseInt(eventTime.split(':')[1]);

    const newDate = new Date(state.eventDate);
    newDate.setHours( hours, minutes );
    
    console.log({ newDate})
    return { eventDate: newDate }
  })
})