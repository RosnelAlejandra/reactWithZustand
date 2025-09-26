import { create, StateCreator } from "zustand";
import { createJSONStorage, StateStorage } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { customSessionStorage } from "../storages/session";
import { customFirebaseStorage } from "../storages/firebase";

interface PersonSate {
    firstName: string;
    lastName: string;
}

interface Actions {
    setFirstName: (firstName: string) => void;
    setLastName: (lastName: string) => void;
    clearPerson: () => void;

    /* 
    ! No funciona cuando se agrega la persistencia ya que no se actualiza el estado
    computed: {
        fullName: string;
    } 
    */
   fullName: () => string;
}

type PersonStore = PersonSate & Actions;

/* 
 ? StateCreator: función que recibe del store los métodos set y get
 ? para actualizar y leer el estado respectivamente.
*/
const storeApi: StateCreator<PersonStore> = (set, get) => ({
        firstName: '',
        lastName: '',

        setFirstName: (firstName) => set({ firstName }),    
        setLastName: (lastName) => set({ lastName }),
        clearPerson: () => set({ firstName: '', lastName: '' }),

        /* computed: {
            get fullName() {
                return `${get().firstName} ${get().lastName}`;
            }
        } */
        fullName: () => `${get().firstName} ${get().lastName}`
       
    });



export const usePersonStore = create<PersonStore>()(
    
    /** 
     * ? persist: para guardar el estado en el local storage del navegador
     * ? y que persista aunque se recargue la página.
      */
    persist(
        storeApi
    , {
        /* Nombre del storage */
        name: 'person-storage',
        /* agregamos el custom storage
            * createJSONStorage es una función helper de Zustand que se encarga de serializar y
            * deserializar automáticamente tu estado para guardarlo en storage.
            * Al guardar (serializar):
                const state = { firstName: 'Juan', lastName: 'Pérez' }
                storage.setItem('person', JSON.stringify(state))
            * Al leer (deserializar): const person = JSON.parse(storage.getItem('person') || '{}')
        */
        //storage: customSessionStorage,
        storage: customFirebaseStorage,
    })

);