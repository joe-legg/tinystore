import { store } from "./store"
import { Increment } from "./Increment"
import { Decrement } from "./Decrement"
import { Reset } from "./Reset"

export const App = () => {
    const count = store.useSelector((state) => state)
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
