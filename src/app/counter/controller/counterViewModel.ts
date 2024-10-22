import { AppRootState } from "@/app/main/data/appStoreImplementation";
import { useSelector } from "react-redux";
import type { CounterStore } from "../domain/counterStore";
import { decrementCounterUseCase } from "../useCases/decrementCounterUseCase";
import { getCounterUseCase } from "../useCases/getCounterUseCase";
import { incrementCounterUseCase } from "../useCases/incrementCounterUseCase";
const useCounterViewModel = (store: CounterStore) => {

    const { counter, isLoading, isUpdating, error } = useSelector((state: AppRootState) => state.counter);


    const loadInitialCounter = () => {
        getCounterUseCase({
            loadInitialCounter: store.loadInitialCounter,
        });
    };


    const incrementCounter = () => {
        incrementCounterUseCase({
            counter,
            updateCounter: store.updateCounter,
            setCounter: store.setCounter
        });
    };


    const decrementCounter = () => {
        decrementCounterUseCase({
            counter,
            updateCounter: store.updateCounter,
            setCounter: store.setCounter
        });
    };
    return {
        counter: counter,
        isUpdating,
        isLoading,
        error,
        loadInitialCounter,
        incrementCounter,
        decrementCounter,
    };
};

export default useCounterViewModel;
