import { createJSONStorage, StateStorage } from "zustand/middleware";

const firebaseURL = 'https://zustand-react-a371f-default-rtdb.firebaseio.com/zustand';

/* Custom Storage para guadar en la base de datos de Firebase  */
const storageApi: StateStorage = {
    getItem: (name: string): string | null | Promise<string | null> => {
       try {
        console.log('Leyendo de Firebase:', name);
        return fetch(`${firebaseURL}/${name}.json`)
            .then(res => res.json())
            .then(data => {
                console.log('Datos leídos de Firebase:', data);
                return data ? JSON.stringify(data) : null;
            });
       } catch (error) {
           console.error('Error al leer de Firebase:', error);
           return null;
       }
    },
    /* 
    ! Importante: Tomar en cuenta la condición de carrera, es decir, 
    ! si se hacen muchas escrituras seguidas, pueden llegar a desordenarse.    
    */
    setItem: (name: string, value: string): void | Promise<Response> => {
        console.log('Guardando en Firebase:', name, value);
        console.count('Guardados en Firebase:');
        return fetch(`${firebaseURL}/${name}.json`, {
            method: 'PUT',
            body: value,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    removeItem: (name: string): void | Promise<Response> => {
        console.log('Eliminando de Firebase:', name);
        return fetch(`${firebaseURL}/${name}.json`, {
            method: 'DELETE'
        });
    }
}

export const customFirebaseStorage = createJSONStorage(() => storageApi) ;