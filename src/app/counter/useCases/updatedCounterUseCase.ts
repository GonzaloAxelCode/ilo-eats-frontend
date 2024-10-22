//@ts-ignore
import debounce from "lodash.debounce";

import type { Counter } from "../domain/counterEntity";

import type { CounterStore } from "../domain/counterStore";


type UpdateCounterStore = Pick<
    CounterStore,
    "counter" | "updateCounter" | "setCounter"
>;

const debouncedTask = debounce((task: any) => Promise.resolve(task()), 500);


const updatedCounterUseCase = (store: UpdateCounterStore, updatedBy: (counter: Counter) => Counter) => {
    const updatedCounter = store.counter ? updatedBy(store.counter) : store.counter

    if (!updatedCounter || store.counter?.value === updatedCounter?.value) return;


    store.setCounter(updatedCounter)
    return debouncedTask(() => store.updateCounter(updatedCounter))
}

export { updatedCounterUseCase };
export type { UpdateCounterStore };

