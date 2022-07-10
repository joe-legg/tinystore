import { store } from "./store"

export const Increment = () => {
    const inc = store.useSelector((state) => state.increment)

    return <button onclick={() => inc()}>+</button>
}
