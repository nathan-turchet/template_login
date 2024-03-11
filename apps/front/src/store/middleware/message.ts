export const MessageMiddleware = () => (next: any) => (action: {type: string, message: {}}) => { // TODO set message type
    if (!action.type) return null
    if (action.type === "CREATE_MESSAGE") localStorage.setItem("message", JSON.stringify(action.message));
    if (action.type === "DELETE_MESSAGE") localStorage.removeItem("message");
    if (action.type === "GET_MESSAGE") localStorage.getItem("message");
    return next(action)
}