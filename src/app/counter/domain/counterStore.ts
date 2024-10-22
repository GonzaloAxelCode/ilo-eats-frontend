import type { Counter } from "./counterEntity";
interface CounterStore {
    counter: Counter | undefined
    isLoading: boolean
    isUpdating: boolean
    error: string | null
    loadInitialCounter(): Promise<Counter>
    setCounter(counter: Counter): void
    updateCounter(counter: Counter): Promise<Counter>
}

export type { CounterStore };

