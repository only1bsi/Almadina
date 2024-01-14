// store.js

import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cake/cakeSlice"; 
import icecreamReducer from "./icecream/icecreamSlice";
import noteReducer from "./note/noteSlice";

export const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        note: noteReducer
    }
});
