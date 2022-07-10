import { createStore } from "tinystore"

export const store = createStore((set) => ({
    count: 123,

    increment: () => set((state: any) => ({ count: state.count + 1 })),
    decrement: () => set((state: any) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
}))
