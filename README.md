# Tinystore
Tiny (333 B) state manager for preact inspired by svelte.

```
npm install @joelegg/tinystore
```

```typescript
// store.ts
import { createStore } from "tinystore"
export { store, increment, decrement, reset }

const store = createStore<number>(0)

const increment = () => store.set((state) => state + 1)
const decrement = () => store.set((state) => state - 1)
const reset = () => store.set(0)
```


```typescript
// app.ts
import { store, increment, decrement, reset } from "./store"

export const Increment = () => {
    return <button onclick={() => increment()}>+</button>
}

export const Decrement = () => {
    return <button onclick={() => decrement()}>-</button>
}

export const Reset = () => {
    return <button onclick={() => reset()}>Reset</button>
}

export const App = () => {
    const count = store.use()
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
