import {combineReducers} from "redux";
import {UserReducer} from "./user.ts";
import {MessageReducer} from "./message.ts";

export const reducer = combineReducers({ user: UserReducer, message: MessageReducer });
