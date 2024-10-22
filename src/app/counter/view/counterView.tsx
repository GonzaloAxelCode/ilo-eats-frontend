"use client"

import { useEffect } from "react"
import useCounterViewModel from "../controller/counterViewModel"
import { useCounterStoreImplementation } from "../data/counterStoreImplementation"

const CounterView = () => {
    const store = useCounterStoreImplementation()
    const { counter, incrementCounter, decrementCounter, loadInitialCounter } = useCounterViewModel(store)
    useEffect(() => {
        loadInitialCounter()
    }, [])
    return (
        <div>
            <button onClick={incrementCounter}>Increment</button>
            <h1>{counter?.value}</h1>
            <button onClick={decrementCounter}>Decrement</button>
        </div>
    )
}

export default CounterView