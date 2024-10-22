import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, AppRootState } from "../../main/data/appStoreImplementation";
import type { Counter } from "../domain/counterEntity";
import type { CounterStore } from "../domain/counterStore";
import { loadCounterReducer, modifyCounterReducer, setCounterReducer } from "./counterSlice";


const counterSelector = (state: AppRootState) => state.counter;


const useCounterStoreImplementation = (): CounterStore => {
    const { counter, isLoading, isUpdating, error } = useSelector(counterSelector);
    const dispatch: AppDispatch = useDispatch();

    return {
        counter,
        isLoading,
        isUpdating,
        error,
        loadInitialCounter: () => {
            return dispatch(loadCounterReducer()).unwrap()
        },
        updateCounter: (counter: Counter) => {
            return dispatch(modifyCounterReducer(counter)).unwrap()
        },
        setCounter: (counter: Counter) => {
            dispatch(setCounterReducer(counter));
        }
    };
};

export { useCounterStoreImplementation };

