import { createStore } from "tinystore"
export { store, increment, decrement, reset }

const store = createStore(0)

const increment = () => store.set((state) => state + 1)
const decrement = () => store.set((state) => state - 1)
const reset = () => store.set(0)
