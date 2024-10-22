

import { decrement } from "../domain/counterModel";

import { UpdateCounterStore, updatedCounterUseCase } from "./updatedCounterUseCase";

const decrementCounterUseCase = (store: UpdateCounterStore) => {
    return updatedCounterUseCase(store, decrement);
};

export { decrementCounterUseCase };

