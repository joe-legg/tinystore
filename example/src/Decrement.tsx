import { store } from "./store"

export const Decrement = () => {
    const dec = store.useSelector((state) => state.decrement)

    return <button onclick={() => dec()}>-</button>
}
