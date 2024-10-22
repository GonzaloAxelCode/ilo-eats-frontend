import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Counter } from "../domain/counterEntity";
import { getCounter, updateCounter } from "./counterService";

interface CounterState {
    counter?: Counter;
    isLoading: boolean;
    isUpdating: boolean;
    error: null
}

const initialState: CounterState = {
    counter: undefined,
    isLoading: false,
    isUpdating: false,
    error: null
};
export const loadCounterReducer = createAsyncThunk('counter/loadCounterReducer', getCounter)

export const modifyCounterReducer = createAsyncThunk('counter/modifyCounterReducer', updateCounter)


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCounterReducer: (state, action: PayloadAction<Counter>) => {
            state.counter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCounterReducer.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loadCounterReducer.fulfilled, (state, action: PayloadAction<Counter>) => {
                state.isLoading = false;
                state.counter = action.payload;
            })
            .addCase(modifyCounterReducer.pending, (state) => {
                state.isUpdating = true;
            })
            .addCase(modifyCounterReducer.fulfilled, (state, action: PayloadAction<Counter>) => {
                state.isUpdating = false;
                state.counter = action.payload;
            });
    }
});

export const { setCounterReducer } = counterSlice.actions;
export default counterSlice.reducer;