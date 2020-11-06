import Axios from 'axios';

export default Axios.create({
  baseURL: 'http://192.168.43.31:8000/api/v1',
  // baseURL: "http://192.168.100.27:4344/api/v1",
});
