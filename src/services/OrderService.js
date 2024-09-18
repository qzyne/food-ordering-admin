import axios from "./AxiosCustom";
import React from 'react';

const getOrder = () => {
    return axios.get("/api/Order", 
        {headers: {'Accept': 'application/json','Content-Type': 'application/json;charset=UTF-8'}}
    );
}
export {getOrder};
