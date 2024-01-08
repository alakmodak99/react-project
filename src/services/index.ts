import axios from "axios";

const API_BASE_URL: string = "https://picsum.photos/";
export function getAPIData(obj: any) {
  return axios.get(`${API_BASE_URL}` + obj.url, {
    params: {
      ...obj.data,
    },
  });
}
