import { React, useState, useEffect } from 'react';
import '../style/Inventory.css';
import DashboardTop from '../components/DashboardTop';
import Search from '../components/Search';
import {deleteCategory, fetchAllCategories, searchCategory} from '../services/CategoryService';
import {fetchAllProducts, deleteProduct, searchProduct} from '../services/InventoryService'; 
import { HiMiniPencilSquare } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import AddNewProduct from '../components/AddNewProduct';
import { FaRegTrashAlt } from "react-icons/fa";
import AddNewCategory from "../components/AddNewCategory";
import EditCategory from '../components/EditCategory';
import EditProduct from '../components/EditProduct';
import { FaSearch } from "react-icons/fa";
import '../style/Search.css';

const Inventory = () => {
    const [listCategory, setCategory] = useState([]);
    const [showListProduct, setShowListProduct] = useState(false);
    const [showeEditCategory, setShowEditCategory] = useState(false);
    const [showAddNew, setShowAddNew] = useState(false);
    const [showAddNewCategory, setShowAddNewCategory] = useState(false);
    const [showEditProduct, setShowEditProduct] = useState(false);
    const [listProducts, setListProducts] = useState([]);
    const [dataCategoryEdit, setDataCategoryEdit] = useState({});
    const [dataProductEdit, setDataProductEdit] = useState({});
    const [key, setKey] = useState('');


    const handleOnClickSearch = async () => {
        if(showListProduct === false) {
            var res = await searchCategory(key);
            if(res) {
                setCategory(res.data);
            }
        }
        else {

            var result = await searchProduct(key);
            if(result) {
                setListProducts(result.data);
                console.log(result.data);
            }
        }
    
    }

    const handleClose = () => {
        setShowAddNew(false)
    }

    useEffect(() => {
        getCategories();
    }, [])

    const handleDeleteCategory = async (id) => { 
        let res = await deleteCategory(id);
        if(res) {
            window.location.reload();
        }
    }
    const handleEditCategory = async (category) => {
        setShowEditCategory(true);
        setDataCategoryEdit(category)
    }

    const handleEditProduct = async (category) => {
        setShowEditProduct(true);
        setDataProductEdit(category)
    }
    const getCategories = async () => {
        let res = await fetchAllCategories();
        setCategory(res.data.data);
    }

    const handleCloseAddNewCategory = () => {
        setShowAddNewCategory(false)
    }

    
    const handleCloseEditCategory = () => {
        setShowEditCategory(false)
    }

    const handleCloseEditProduct = () => {
        setShowEditProduct(false)
    }

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let res = await fetchAllProducts();
        setListProducts(res.data.data);
    }
    const handleDelete = async (id) => { 
        let res = await deleteProduct(id);
        if(res) {
            window.location.reload();
        }
    }


    const title = 'Inventory';
    return (
        <div className='main-content'>
            <DashboardTop title = {title}/>
            <div>
                <div className='container'>
                    <div className='row d-flex'>
                        <div className='col-lg-6 col-12'>
                            <input className='searching mt-3 px-5 p-1' value={key} onChange={(e) => setKey(e.target.value)}/>
                            <div className='searchIcon'><FaSearch/></div>
                            <button className='btnSearch p-1 px-2' onClick={() => handleOnClickSearch()}>Search</button>
                        </div>
                        <div className='col-12 col-lg-6 d-flex mt-3'>
                        <div className='createCategory d-flex p-2' onClick={() => setShowAddNewCategory(true)}>CREATE CATEGORY</div>
                        <div className='createCategory d-flex p-2' onClick={() => setShowListProduct(false)}>SHOW CATEGORY</div>
                        <div className='addProduct d-flex p-2' onClick={() => setShowListProduct(true)}>SHOW PRODUCT</div>
                        <div className='addProduct d-flex p-2' onClick={() => setShowAddNew(true)}>ADD NEW PRODUCT</div>
                        </div>
                    </div>
                </div>
                {showListProduct === true ? ( 
                <table className='table border border-secondary mt-4'>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th className='text-center'>Image</th>
                            <th>Product name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { listProducts && listProducts.length > 0 &&
                            listProducts.map((item, index) => {
                                return (
                                <tr key = {`products-${index}`}>
                                    <td >{item.id}</td>
                                    <td className='w-auto text-center'><img alt= {item.productName} src ={item.imagePath} className="imageProduct"/></td>
                                    <td>{item.productName}</td>
                                    <td>{item.category.categoryName}</td>
                                    <td>{item.price}</td>
                                    <td>{item.isActive === 0 ? " Inactive" : "Active"}</td>
                                    <td className='text-center'>
                                    <a><HiMiniPencilSquare onClick= {() => handleEditProduct(item)} className='icon-detailProduct'/></a>
                                    <a onClick={() => handleDelete(item.id)} className='removeProduct'><FaRegTrashAlt /></a>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                ) : (
                    <table className='table border border-secondary mt-4'>
                        <thead>
                            <tr>
                                <th>Category ID</th>
                                <th>Category Name</th>
                                <th className='text-center'>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            { listCategory && listCategory.length > 0 &&
                                listCategory.map((item, index) => {
                                    return (
                                    <tr key = {`products-${index}`}>
                                        <td>{item.id}</td>
                                        <td>{item.categoryName}</td>
                                        <td className='text-center'>
                                        <a className='icon-detailProduct' onClick= {() => handleEditCategory(item)}><HiMiniPencilSquare /></a>
                                        <a onClick={() => handleDeleteCategory(item.id)} className='removeProduct'><FaRegTrashAlt /></a>
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                )}
                
                <AddNewProduct 
                    show = {showAddNew}
                    handleClose= {handleClose}
                />

                <AddNewCategory
                    show = {showAddNewCategory}
                    handleClose= {handleCloseAddNewCategory}
                />

                <EditCategory
                    show = {showeEditCategory}
                    handleClose= {handleCloseEditCategory}
                    dataCategoryEdit = {dataCategoryEdit}
                />
                <EditProduct
                    show = {showEditProduct}
                    handleClose= {handleCloseEditProduct}
                    dataProductEdit = {dataProductEdit}
                />
                
            </div>
        </div>
    );
};

export default Inventory;