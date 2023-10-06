import axios from "axios";
import authHeader from './AuthHeader';

const API_URL = "http://localhost:8100/api/login"

class AuthService {
    async login(username,password){
        const response = await axios
            .post(API_URL, {
                "userEmail": username,
                "userPassword": password
            });
        localStorage.setItem("user", JSON.stringify(response.data.profile));
        localStorage.setItem("profileId", JSON.stringify(response.data.profile.profileId));
        console.log(JSON.stringify(response.data.profile.profileId));
        return "success";
    }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("profileId");
  }
}

export default new AuthService();