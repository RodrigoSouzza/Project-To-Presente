import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import Config from "../util/Config"

class UserService{
    
    async register(data){
        return axios({
            url: Config.API_URL + "user/register",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
 
    async login(data){
        return axios({
            url: Config.API_URL + "user/login",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            AsyncStorage.setItem('TOKEN', response.data.access_token)
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async loginToken(data){
        return axios({
            url: Config.API_URL + "user/login-token",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            if(response.data.access_token){
                AsyncStorage.setItem('TOKEN', response.data.access_token)
                return Promise.resolve(response)
            }else{
                return Promise.reject(response)
            }
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}

const userService = new UserService()
export default userService