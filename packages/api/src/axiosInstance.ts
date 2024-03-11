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
/*
    axiosInstance.interceptors.request.use(
        (config) => {
            // Récupérer le cookie stocké dans le navigateur
            const cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('user_session='));
            if (cookie) {
                // Ajouter le cookie aux en-têtes de la requête
                config.headers['Cookie'] = cookie.split('=')[1];
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    export default axiosInstance;}*/
