import axios from 'axios'
export const reqTabList = ()=>{
 return axios({
    method:'GET',
    url: '/tablist',
  })
}