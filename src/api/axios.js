import axios from 'axios';


axios.interceptors.request.use(config => {
    return config;
  }, error => {
    return Promise.reject(error);
  });

//添加响应拦截器
axios.interceptors.response.use(function(response){
    //对响应数据做些事
    return response;
  },function(error){
    //请求错误时做些事
    return Promise.reject(error);
  });






export default axios;
