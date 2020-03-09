import axios from 'axios'
export const reqTabList = () => {
    return axios({
      method: 'GET',
      url: '/tablist',
    })
  }
export const reqCategoryNav = () => {
    return axios({
      method: 'GET',
      url: '/cagetorynav',
    })
  }