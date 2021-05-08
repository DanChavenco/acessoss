import axios, {AxiosResponse} from 'axios'

// https://github.com/axios/axios#example

export default async function api(path: string): Promise<AxiosResponse<any>> {
  return axios.get(path)
}