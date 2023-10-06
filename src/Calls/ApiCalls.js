import axios from "axios";
import authHeader from "../Auth/AuthHeader";
const user = JSON.parse(localStorage.getItem("user"));

class ApiCalls {
  
    async  changePassword(data) {
        return await axios.put("http://localhost:8100/api/changePassword",data, {
          headers: authHeader()
        });
      }
      async getProfileById(data) {
        return await axios.get("http://localhost:8100/api/getById/"+data, {
          headers: authHeader()
        });
      }

}

export default new ApiCalls();