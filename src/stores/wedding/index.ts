import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createPersonSlice, PersonSlice } from "./person";
import { createGuestSlice, GuestSlice } from "./guest";
import { createDateSlice, DateSlice } from "./date";
import { ConfirmationSlice, createConfirmationSlice } from "./confirm";

type ShareState = PersonSlice & GuestSlice & DateSlice & ConfirmationSlice

/* 
* Crea un BoundStore para unificar los pequeños slices
* En los ...args se esta pasando el set, get y store
*/
export const useWeddingBoundStore = create<ShareState>()(
   persist( devtools(
        (...args) => ({
            ...createPersonSlice(...args),
            ...createGuestSlice(...args),
            ...createDateSlice(...args),
            ...createConfirmationSlice(...args),
        })
    ), {
        name: 'wedding-storage', 
    })
);