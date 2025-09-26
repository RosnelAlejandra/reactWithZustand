import { create } from 'zustand'

export interface Bear {
    id: number;
    name: string;
    weight: number;
}

interface BearState {
  blackBears: number;
  polarBears: number;
  whiteBears: number;
  
  bears: Bear[];

  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increaseWhiteBears: (by: number) => void;
  removeAllBears: () => void;
  doNothing: () => void;
  updateAllBears: (newBears: number) => void;
  addBear: (bear?: Bear) => void;
  clearBears: () => void;

  computed: {
    totalBears: number;
  }
}

/**
 * set: para actualizar el estado
 * get: para acceder al estado actual (útil para propiedades computadas)
 */
export const useBearStore = create<BearState>()((set, get) => ({
  // Estado inicial
  blackBears: 10,
  polarBears: 5,
  whiteBears: 15,
  bears: [{
    id: 1,
    name: 'Baloo',
    weight: 300
  }],

  // Funciones para modificar el estado
  doNothing: () => set((state) => ({ ...state })),
  increaseBlackBears: (by) => set((state) => ({ blackBears: state.blackBears + by })),
  increasePolarBears: (by) => set((state) => ({ polarBears: state.polarBears + by })),
  increaseWhiteBears: (by) => set((state) => ({ whiteBears: state.whiteBears + by })),
  updateAllBears: (newBears) => set({ blackBears: newBears, polarBears: newBears, whiteBears: newBears }),
  removeAllBears: () => set({ blackBears: 0, polarBears: 0, whiteBears: 0, bears: [] }),

  //Manejo de arrays en el estado
  addBear: (bear?: Bear) => set((state) => ({ 
    bears: [...state.bears, bear ? bear : {
      id: Math.random(),
      name: `New Bear ${state.bears.length + 1}`,
      weight: 100
    }]
  })),
  clearBears: () => set({ bears: [] }),

  //propidades computadas (getState)
  computed: {
    get totalBears() {
      return get().blackBears + get().polarBears + get().whiteBears + get().bears.length;
    }
  }
}))
