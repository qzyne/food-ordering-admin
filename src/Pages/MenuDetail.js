import {React, useState, useEffect} from 'react';
import DashboardTop from '../components/DashboardTop';
import '../style/MenuIdDetail.css';
import {fetchAllProducts} from '../services/InventoryService';
import {getIdMenu, postProductMenu, deleteProductMenu} from '../services/MenuService';
import { FaRegTrashAlt } from "react-icons/fa";
import { useParams } from 'react-router-dom';

const MenuIdDetail = () => {
    const {id} = useParams();

    const title = `Id: ${id}`;
    const [listProduct, setListProduct] = useState([]);
    const [productMenu, setProductMenu] = useState([]);

    const [productID, setProductID] = useState('');

    const handleSelectProduct = (e) => {
        setProductID(e.target.value)
    }

    useEffect (() => {
        getMenuById();
    }, [])

    useEffect(() => {
        getProduct();
    }, [])

    const getMenuById = async() => {
        let res = await getIdMenu(id);
        if (res) {  
            setProductMenu(res.data.data.products)
        }
    }

    const getProduct = async () => {
        let res = await fetchAllProducts();
        setListProduct(res.data.data);
    }

    const addProductMenu = async (e) => {
        e.preventDefault();
        
        const product = {
            menuId: Number(id),
            productId: Number(productID),
        }
        const jsonProduct = JSON.stringify(product);
        try{
            var res = await postProductMenu(jsonProduct);
            if(res) {
                console.log(res.data.data);
                window.location.reload()
            }
        }catch(e){
            alert(e.response.data.message)
        }
    }

    const handleDeleteProduct = async (idProduct) => {
        const productEdit = {
            menuId: Number(id),
            productId: Number(idProduct),
        }
        const jsonDeleteProduct = JSON.stringify(productEdit);
        console.log(jsonDeleteProduct);
        let res = await deleteProductMenu(jsonDeleteProduct);

        if(res) {
            console.log(res.data)
            // window.location.reload();
        }
    }

    return (
        <div className='main-content'>
            <DashboardTop title = {title}/>
            <div className='d-flex'>
                <form className='col-12 col-lg-3'>
                    <div class="form-group my-3">
                        <label>Product</label>
                        <div className='my-1'>
                            <select name="categories" onChange={handleSelectProduct} className='p-2'>
                            { listProduct && listProduct.length > 0 &&
                                listProduct.map((item, index) => {
                                return (
                                    <option key = {`product-${index}`} value={item.id}>{item.productName}</option>
                                )
                            })}
                            </select>
                        </div>
                    </div> 
                    <button type="submit" class="btn btn-primary" onClick={addProductMenu}>Submit</button>
                </form>       
                <div className='col-12 col-lg-8'>       
                <table className='table border border-secondary mt-4'>
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Product name</th>  
                                <th>Price</th>
                                <th>Category</th>  
                                <th className='text-center'>Status</th>
                                <th className='text-center'>Action</th>                      
                            </tr>
                        </thead>
                        <tbody>
                        { productMenu && productMenu.length > 0 &&
                            productMenu.map((item, index) => {
                                return (
                                <tr key = {`products-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category.categoryName}</td>
                                    <td className='text-center'>
                                        {item.isActive === 1 ? "Active" : "Inactive"}
                                    </td>
                                    <td className='text-center'>
                                    <a onClick={() => handleDeleteProduct(item.id)} className='removeProduct'><FaRegTrashAlt /></a>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </div>

        
    );
};

export default MenuIdDetail;