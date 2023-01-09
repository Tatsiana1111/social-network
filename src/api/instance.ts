import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    'api-key': '52ccabf3-0184-4f40-b001-5997202bec15',
  },
})
