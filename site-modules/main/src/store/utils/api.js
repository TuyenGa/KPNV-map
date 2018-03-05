import Vue from 'vue';
import axios from 'axios';

export default {
  get(url, request){
    return axios.get(url,request)
      .then((response) => {
        return Promise.resolve(response.data.users)
      })
      .catch((error) => Promise.reject(error.message))
  },
  post(url, request) {
    return axios.post(url,request)
      .then((response) => Promise.resolve(response.data.users))
      .catch((error) => Promise.reject(error.message))
  },
  patch(url, request) {
    return axios.patch(url, request)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },
  delete(url, request) {
    return axios.delete(url, request)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  }
}