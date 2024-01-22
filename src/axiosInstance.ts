import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://tictactoe.aboutdream.io',
});

declare module 'axios' {   
  export interface AxiosRequestConfig {
      handlerEnabled?: boolean;   
  } 
}

axiosInstance.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      // config.headers['Content-Type'] = 'application/json';
      return config
    },
    error => {
      Promise.reject(error)
    }
  )

export default axiosInstance;;        