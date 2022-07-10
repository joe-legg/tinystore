import { reset } from "./store"

export const Reset = () => {
    return <button onclick={() => reset()}>Reset</button>
}
