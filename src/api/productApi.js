import axiosClient from './axiosClient'

const productApi = {
  getAll() {
    const url = '/tasks';
    return axiosClient.get(url);
  },

  //Add Task
  add(data) {
    const url = `/tasks`;
    return axiosClient.post(url, data);
  },


};

export default productApi;