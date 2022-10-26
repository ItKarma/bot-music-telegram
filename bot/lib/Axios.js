import axios from 'axios';


async function axiosJson(url){
  return new Promise((resolve, reject) => {
    try {
      let res = axios.get(url).then((data)=>{
        return data;
      })
      resolve(res);
    }catch (error) {
      reject(error);
    }
  });
}


export default axiosJson;
