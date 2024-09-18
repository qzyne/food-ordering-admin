import {React, useEffect, useState} from 'react';
import {fetchAllCategories} from '../services/CategoryService';
import {Modal, Button} from 'react-bootstrap';
import {editProduct} from '../services/InventoryService';
import "../style/EditProduct.css";

const EditProduct = (props) => {
    const [listCategory, setCategory] = useState([]);

    const [productID, setProductID] = useState(''); 
    const {show, handleClose, dataProductEdit} = props;
    const [productName, setProductName] = useState('');
    const [imageProduct, setImageProduct] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [isActive, setIsActive] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = async () => {
        let res = await fetchAllCategories();
        setCategory(res.data.data);
    }

    const handleSelectProduct = (e) => {
        setCategoryId(e.target.value)
    }
    const handleEditProduct = async (e) => {
        e.preventDefault();
        
        console.log(productID)
        const formData = new FormData();
        formData.append('Id', productID)
        formData.append('ProductName', productName)
        formData.append('Price', Number(price))
        formData.append('Description', description)
        formData.append('IsActive', Number(isActive))
        formData.append('CategoryId', categoryId)
        formData.append('file', imageProduct )
        var res = editProduct(dataProductEdit.id, formData)
        if(res) {
            console.log(res)
            window.location.href = '/Inventory'
        }
    }

    
    useEffect(() => {
        if (show === true) {
            setProductID(dataProductEdit.id)
            setProductName(dataProductEdit.productName)
            setDescription(dataProductEdit.description)
            setIsActive(dataProductEdit.isActive)
            setPrice(dataProductEdit.price)
            setCategoryId(dataProductEdit.categoryId)
            setImageProduct(dataProductEdit.imagePath)
        }
    }, [dataProductEdit])


    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit A Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form encType='multipart/form-data '>
                        <div class="form-group">
                            <label>Product Name</label>
                            <input class="form-control" value={productName} onChange={(e) => setProductName(e.target.value)}/>
                        </div>
                        <div class="form-group">
                            <label>Price</label>
                            <input class="form-control" value={price} onChange={(e) => setPrice(e.target.value)}/>
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <input class="form-control" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        </div>
                        <div class="form-group my-3">
                            <label>Category</label>
                            <div className='my-1'>
                                <select name="categories" onChange={handleSelectProduct}>
                                { listCategory && listCategory.length > 0 &&
                                    listCategory.map((item, index) => {
                                    return (
                                        <option key = {`category-${index}`} value={item.id}>{item.categoryName}</option>
                                    )
                                })}
                                </select>
                            </div>
                        </div>

                        <div class="form-group my-3">
                            <span>Status</span>
                            <div>
                                
                            <input type="radio"  name="status" value= "1" onChange={(e) => setIsActive(e.target.value)}/>
                            <label for="Choice1">&nbsp; Active</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" name="status" value="0" onChange={(e) => setIsActive(e.target.value)}/>
                            <label for="Choice2">&nbsp; Inactive</label>
                                
                            </div>
                        </div>
                        
                        <div class="uploadfile form-check my-3">
                            <img src ={dataProductEdit.imagePath} className='imageProduct'></img> &nbsp;
                            <input type="file" name="filename" className='choosefile' onChange={(e) => setImageProduct(e.target.files[0])}/>
                        </div>
                    </form>                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} >
                    Close
                </Button>
                <Button variant="primary" onClick={handleEditProduct}>
                    Confirm
                </Button>
                </Modal.Footer>
            </Modal>  
        </div>
    );
};

export default EditProduct;