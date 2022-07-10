import { increment } from "./store"

export const Increment = () => {
    return <button onclick={() => increment()}>+</button>
}
