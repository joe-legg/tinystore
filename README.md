# Tinystore
Tiny (353 B) state manager for preact inspired by zustand.

```
npm install @joelegg/tinystore
```

```typescript
// store.ts
import { createStore } from "tinystore"

export const store = createStore((set) => ({
    count: 0,

    increment: () => set((state: any) => ({ count: state.count + 1 })),
    decrement: () => set((state: any) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
}))
```


```typescript
// app.ts
import { store } from "./store"

export const Increment = () => {
    const inc = store.useSelector((state) => state.increment)

    return <button onclick={() => inc()}>+</button>
}

export const Decrement = () => {
    const dec = store.useSelector((state) => state.decrement)

    return <button onclick={() => dec()}>-</button>
}

export const Reset = () => {
    const reset = store.useSelector((state) => state.reset)

    return <button onclick={() => reset()}>Reset</button>
}

export const App = () => {
    const count = store.useSelector((state) => state.count)
    return (
        <>
            <Increment />
            <h1>{count}</h1>
            <Decrement />
            <br />
            <br />
            <Reset />
        </>
    )
}
```
