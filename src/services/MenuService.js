import axios from './AxiosCustom';

const fetchAllMenus = () => {
    return  axios.get("/api/Menu");
}

const deleteMenu = (id) => {
    return axios.delete(`/api/Menu/${id}`)
}
const deleteProductMenu = (product) => {
    return axios.delete("/api/Menu/Product", product, 
    {headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}});
}

const postMenu = (menu) => {

    return axios.post("/api/Menu", menu, {headers: {'Content-Type': 'application/json'}})
}

const editMenu = (id,menu) => {
    return axios.put(`/api/Menu/${id}`, menu, {headers: {'Accept': 'application/json','Content-Type': 'application/json;charset=UTF-8'}});
}

const getIdMenu = (id) => {
    return axios.get(`/api/Menu/${id}`, id, {headers: {'Accept': 'application/json','Content-Type': 'application/json;charset=UTF-8'}})
}

const postProductMenu = (product) => {
    return axios.post(`/api/Menu/Product`, product, 
    {headers: {'Content-Type': 'application/json'}});
}

const searchMenu = (key) => {
    return axios.get(`/api/Menu/Search?key=${key}`);
} 

export {fetchAllMenus, deleteMenu, postMenu, editMenu, getIdMenu, postProductMenu, deleteProductMenu, searchMenu};