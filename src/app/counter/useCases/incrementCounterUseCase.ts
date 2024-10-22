
import { increment } from "../domain/counterModel";
import { UpdateCounterStore, updatedCounterUseCase } from "./updatedCounterUseCase";

const incrementCounterUseCase = (store: UpdateCounterStore) => {
    return updatedCounterUseCase(store, increment);
};

export { incrementCounterUseCase };

