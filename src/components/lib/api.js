import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://e-commerce.test/api',
    withCredentials: true, // Set to true if you're using Sanctum/cookies
})

export default api