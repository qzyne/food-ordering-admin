import axios from './AxiosCustom';

const fetchAllCategories = () => {
    return  axios.get("/api/Category");
}

const postCategory = (category) => {
    return axios.post(`/api/Category`, category, 
    {headers: {'Content-Type': 'application/json'}});
}

const deleteCategory = (id) => {
    return axios.delete(`/api/Category/${id}`)
}

const editCategory = (id,category) => {
    return axios.put(`/api/Category/${id}`, category, {headers: {'Accept': 'application/json','Content-Type': 'application/json;charset=UTF-8'}});
}

const getCategoryByID = (id) => {
    return axios.get(`/api/Category/${id}`)
}

const searchCategory = (key) => {
    return axios.get(`/api/Category/Search?key=${key}`);
} 
export {fetchAllCategories, postCategory, deleteCategory, getCategoryByID, editCategory, searchCategory};