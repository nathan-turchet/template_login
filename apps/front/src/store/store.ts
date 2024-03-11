import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "./reducer"
import {UserMiddleware, MessageMiddleware} from "./middleware"

const store = configureStore({
    reducer,
    // @ts-ignore
    middleware: () => [UserMiddleware, MessageMiddleware],
});

export {store};