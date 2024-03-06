import { ConfigureStore, configureStore } from "@reduxjs/toolkit";
import counterReducer from 'src/features/counter/counterSlice.js'; 

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
})