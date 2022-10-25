import axios from 'axios'

export const Api = axios.create({
  baseURL: 'https://pi6.fortmea.tech',
})

export const Base64 = axios.create({
  baseURL: 'data:image/png;base64,',
})