import { useEffect, useState } from "preact/hooks"

type Subsciber<TState> = (state: TState) => void

type Subscribe<TState> = (callback: Subsciber<TState>) => () => void
type SetState<TState> = (state: TState | ((state: TState) => TState)) => void
type GetState<TState> = () => TState
type UseSelector<TState> = (selector: (state: TState) => any) => any

export const createStore = <TState>(init: TState) => {
    let state = init
    const subscribers: Set<Subsciber<TState>> = new Set()

    const subscribe: Subscribe<TState> = (callback) => {
        subscribers.add(callback)
        return () => subscribers.delete(callback)
    }

    const get: GetState<TState> = () => state

    const set: SetState<TState> = (newState) => {
        const nextState =
            typeof newState === "function"
                ? (newState as (state: TState) => TState)(state)
                : newState

        if (nextState != state) {
            state = nextState
            subscribers.forEach((sub) => sub(state))
        }
    }

    const useSelector: UseSelector<TState> = (selector) => {
        let [, forceUpdate] = useState({})
        useEffect(() => subscribe(() => forceUpdate({})), [])
        return selector(state)
    }

    return { subscribe, get, set, useSelector }
}
