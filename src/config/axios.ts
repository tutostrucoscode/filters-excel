/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosRequestConfig } from 'axios'
import { URL_API } from '../constants'

export const fetcher = (url: string) => axios.get(url).then((res) => res.data)

// export const fetcherPost = (url: string, body: string) => axios.post(url, body).then((res) => res.data);
export const fetcherPost = (url: string, formData: FormData) => {
    const config: AxiosRequestConfig<FormData> = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }

    return axios.post(url, formData, config).then((res) => res.data)
}

export const defaultQueryFn = async ({ queryKey }: { queryKey: any[] }) => {
    const { data } = await axios.post(`${URL_API}${queryKey[0]}`)
    return data
}
