import {apiUrl} from "./axiosInstance.ts";
import {ErrorManager} from "./errorManager.ts";

interface IApiUser {
    login(user: {password: string, login: string}, dispatch: any): Promise<any>
    logout(dispatch: any): void
    listUser(dispatch: any): Promise<any>
    getUserById(id: string, dispatch: any): Promise<any>
}
export const ApiUser: IApiUser = {
    async login(user, dispatch) {
        try {
            const response = await apiUrl.Url().post("/users/login", user)
            return {user: response.data};
        } catch (err: any) {
            switch (err.response.status) {
                case 401: throw err.response;
                default: ErrorManager.error(dispatch); throw {message: ""}
            }
        }
    },
    async logout(dispatch) {
        try {
            await apiUrl.Url().post("/users/logout").then(() => {
                dispatch({type: "LOGOUT"})
                dispatch({type: "DELETE_MESSAGE"})
            })
            return;
        } catch (err: any) {
            switch (err.response.status) {
                default: ErrorManager.error(dispatch); throw {message: ""}
            }
        }
    },
    async listUser(dispatch) {
        try {
            const response = await apiUrl.Url().get("/users/list")
            return response.data;
        } catch (err: any) {
            switch (err.response.status) {
                case 401: ErrorManager.Unauthorized(dispatch); throw {message: ""}
                default: ErrorManager.error(dispatch); throw {message: ""}
            }
        }
    },
    async getUserById(id, dispatch) {
        try {
            const response = await apiUrl.Url().get(`/users/${id}`)
            return response.data;
        } catch (err: any) {
            switch (err.response.status) {
                case 401: ErrorManager.Unauthorized(dispatch); throw {message: ""}
                default: ErrorManager.error(dispatch); throw {message: ""}
            }
        }
    }
}