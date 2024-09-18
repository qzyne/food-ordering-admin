import axios from "./AxiosCustom";
import React from 'react';

const getUser = () => {
    return axios.get("/api/User", 
        {headers: {'Accept': 'application/json','Content-Type': 'application/json;charset=UTF-8'}}
    );
}

const searchUser = (key) => {
    return axios.get(`/api/User/Search?key=${key}`);
} 

const deleteUser = (id) => {
    return axios.delete(`/api/User/${id}`)
}
export {getUser, searchUser, deleteUser};