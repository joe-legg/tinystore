import { store } from "./store"

export const Reset = () => {
    const reset = store.useSelector((state) => state.reset)

    return <button onclick={() => reset()}>Reset</button>
}
