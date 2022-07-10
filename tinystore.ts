import { useEffect, useState } from "preact/hooks"

type Subsciber<TState> = (state: TState) => void

type Subscribe<TState> = (callback: Subsciber<TState>) => () => void
type SetState<TState> = (state: TState | ((state: TState) => any)) => void
type GetState<TState> = () => TState
type UseSelector<TState> = (selector: (state: TState) => any) => any

type StoreInit<TState> = (
    set: SetState<TState>,
    get: GetState<TState>
) => TState

export const createStore = (init: StoreInit<any>) => {
    type TState = ReturnType<typeof init>
    let state: TState
    const subscribers: Set<Subsciber<TState>> = new Set()

    const subscribe: Subscribe<TState> = (callback) => {
        subscribers.add(callback)
        return () => subscribers.delete(callback)
    }

    const get: GetState<TState> = () => state

    const set: SetState<TState> = (newState) => {
        const nextState =
            typeof newState == "function" ? newState(state) : newState

        if (nextState != state) {
            state = { ...state, ...nextState }
            subscribers.forEach((sub) => sub(state))
        }
    }

    const useSelector: UseSelector<TState> = (selector) => {
        let [, forceUpdate] = useState({})
        useEffect(() => subscribe(() => forceUpdate({})), [])
        return selector(state)
    }

    state = init(set, get)
    return { subscribe, get, set, useSelector }
}