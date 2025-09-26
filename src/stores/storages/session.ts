import { createJSONStorage, StateStorage } from "zustand/middleware";

/* Custom Storage para guadar en la sessionStorage */
const storageApi: StateStorage = {
    getItem: (name: string): string | null | Promise<string | null> => {
        console.log('Leyendo de sessionStorage:', name);
        const item = window.sessionStorage.getItem(name);
        return item ? item : null;
    },
    setItem: (name: string, value: string): void | Promise<void> => {
        console.log('Guardando en sessionStorage:', name, value);
        window.sessionStorage.setItem(name, value);
    },
    removeItem: (name: string): void | Promise<void> => {
        console.log('Eliminando de sessionStorage:', name);
        window.sessionStorage.removeItem(name);
    }
}

export const customSessionStorage = createJSONStorage(() => storageApi) ;