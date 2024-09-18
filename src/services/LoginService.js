
import axios from './AxiosCustom';

const Login = (login) => {
    return axios.post(
        "/api/Auth/Login", login, 
        {headers: {'Accept': 'application/json','Content-Type': 'application/json;charset=UTF-8'}}
    );
}

export {Login};