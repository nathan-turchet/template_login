import axios from "axios";

export namespace apiUrl {
    // @ts-ignore
    const backUrl = import.meta.env.VITE_API_URL;
    export function Url(options?: {}) {
        const optionalHeaders = {...options};
        return axios.create({
            withCredentials: true,
            baseURL: `${backUrl}`,
            headers: {"Content-Type": "application/json" ,...optionalHeaders},
        });
    }

}