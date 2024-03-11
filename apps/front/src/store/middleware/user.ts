import {Types} from "types";

export const UserMiddleware = () => (next: any) => (action: {type: string, user: Types.User}) => {
    if (!action.type) return null
    if (action.type === "LOGIN") localStorage.setItem("user", JSON.stringify(action.user));
    if (action.type === "UPDATE_USER") localStorage.setItem("user", JSON.stringify(action.user));
    if (action.type === "LOGOUT") localStorage.removeItem("user");
    return next(action)
}