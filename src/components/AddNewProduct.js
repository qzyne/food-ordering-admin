import {React, useState, useEffect } from 'react';
import {Modal, Button} from 'react-bootstrap';
import {fetchAllCategories} from '../services/CategoryService';
import '../style/AddNewProduct.css';
import {postProduct} from '../services/InventoryService';


const AddNew = (props) => {
   //list category
    const [listCategory, setCategory] = useState([]);

    //product
    const [productID, setProductID] = useState(0); 
    const {show, handleClose} = props;
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [isActive, setIsActive] = useState('');
    const [imageProduct, setImageProduct] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [description, setDescription] = useState('');

    const handleSelectProduct = (e) => {
        setCategoryId(e.target.value)
    }

    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = async () => {
        let res = await fetchAllCategories();
        setCategory(res.data.data);
    }
    const addProduct = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('Id', productID)
        formData.append('ProductName', productName)
        formData.append('Price', Number(price))
        formData.append('Description', description)
        formData.append('IsActive', Number(isActive))
        formData.append('CategoryId', categoryId)
        formData.append('file', imageProduct)
        var res = postProduct(formData)
        if(res) {
            console.log(res)
            window.location.reload()
        }
    }
    


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add New Products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form encType='multipart/form-data '>
                        <div class="form-group">
                            <label>Product Name</label>
                            <input class="form-control" placeholder="Enter product name" value={productName} onChange={(e) => setProductName(e.target.value)}/>
                        </div>
                        <div class="form-group my-3">
                            <label>Price</label>
                            <input type='number' class="form-control" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                        </div>
                        <div class="form-group my-3">
                            <label>Description</label>
                            <input class="form-control" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
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
                            <p>Upload Image</p>
                            <input type="file" name="filename" className='choosefile' onChange={(e) => setImageProduct(e.target.files[0])}/>
                        </div>
                    </form>                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} >
                    Close
                </Button>
                <Button variant="primary" onClick={addProduct}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>  
        </>
    );
};

export default AddNew;