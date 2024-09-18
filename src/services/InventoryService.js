import axios from './AxiosCustom';

const fetchAllProducts = () => {
    return  axios.get("/api/Product");
}


const postProduct = (product) => {

    return axios.post(`/api/Product`, product)
}

const deleteProduct = (id) => {
    return axios.delete(`/api/Product/${id}`)
}

const editProduct = (id,product) => {
    return axios.put(`/api/Product/${id}`, product, {headers: {'Accept': 'application/json','Content-Type': 'application/json;charset=UTF-8'}});
}

const searchProduct = (key) => {
    return axios.get(`/api/Product/Search?key=${key}`);
} 

export {fetchAllProducts, postProduct, deleteProduct, editProduct, searchProduct};
