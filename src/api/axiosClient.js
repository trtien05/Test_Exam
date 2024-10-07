import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'https://664ea105fafad45dfae09ede.mockapi.io/api/login',
  headers: {
    'Content-Type': 'application/json'
  }
});

//Intercepter (làm chung cho tất cả các request và response)

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {


    return config;
  }, function (error) {


    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {

    return response.data;
  }, function (error) {

    return Promise.reject(error);
  }
);

export default axiosClient;