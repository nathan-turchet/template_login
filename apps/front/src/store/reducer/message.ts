let message: any = localStorage.getItem("message");
message = JSON.parse(message)
export const MessageReducer = (state = message, action: { type: any; message: {type: string, value: string}; }) => {
    if (state === undefined) return message;
    switch (action.type) {
        case 'CREATE_MESSAGE': return action.message;
        case 'DELETE_MESSAGE': return null;
        case 'GET_MESSAGE': return state;
        default: return state;
    }
};