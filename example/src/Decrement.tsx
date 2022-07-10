import { decrement } from "./store"

export const Decrement = () => {
    return <button onclick={() => decrement()}>-</button>
}
