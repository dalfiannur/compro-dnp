import axios from 'axios'

export default function useAxios() {
  const baseURL = import.meta.env.VITE_API_URL as string

  const instance = axios.create({
    baseURL
  })

  return instance
}