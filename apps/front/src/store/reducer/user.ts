import {Types} from "types";

let user: any = localStorage.getItem("user");
user = JSON.parse(user)
export const UserReducer = (state = user, action: { type: string; user: Types.User; }) => {
    if (state === undefined) return user;
    switch (action.type) {
        case 'LOGIN': return action.user;
        case 'UPDATE_USER': return action.user;
        case 'LOGOUT': return null;
        default: return state;
    }
};