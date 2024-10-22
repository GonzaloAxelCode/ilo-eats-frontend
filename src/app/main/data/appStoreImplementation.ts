import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import counterReducer from '../../counter/data/counterSlice';

const rootReducer = combineReducers({
    counter: counterReducer

});

const appStoreImplementation = configureStore({
    reducer: rootReducer,


});

type AppRootState = ReturnType<typeof appStoreImplementation.getState>;

export { appStoreImplementation };
export type AppDispatch = typeof appStoreImplementation.dispatch;
export type { AppRootState };

