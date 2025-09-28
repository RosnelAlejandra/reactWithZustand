import { StateCreator } from "zustand";

export interface GuestSlice {
    guestCount: number;
    setGuestCount: (count: number) => void;
}

export const createGuestSlice: StateCreator<
    GuestSlice,
    [["zustand/devtools", never]],
    [],
    GuestSlice
> = (set) => ({
    guestCount: 0,
    setGuestCount: (count) => set({ guestCount: count < 0 ? 0 : count }, false, 'guest/setGuestCount'),
})