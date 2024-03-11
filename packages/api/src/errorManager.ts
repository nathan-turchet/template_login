interface IError {
    error(dispatch: any): void
    Unauthorized(dispatch: any): void
}
export const ErrorManager: IError = {
    error(dispatch) {
        dispatch({type: "CREATE_MESSAGE", message: {type: "error", value: "Désolé. Une erreur s'est produite veuillez réessayer."}})
    },
    Unauthorized(dispatch) {
        dispatch({type: "LOGOUT"})
        dispatch({type: "CREATE_MESSAGE", message: {type: "error", value: "Votre session à expiré."}})
    }
}
