import axios from 'axios'

export const Api = axios.create({
  baseURL: 'https://pi6.fortmea.tech',
})