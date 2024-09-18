import {React, useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../style/AddNewProduct.css';
import {postCategory, editCategory} from '../services/CategoryService';

const AddNew = (props) => {

    //product
    const [categoryID, setCategoryID] = useState(0); 
    const {show, handleClose} = props;
    const [categoryName, setCategoryName] = useState('');


    const addCategory = async (e) => {
        e.preventDefault();
        
        const category = {
            id: Number(categoryID),
            categoryName: categoryName,
        }
        const jsonCategory = JSON.stringify(category);
        var res = postCategory(jsonCategory)
        if(res) {
            console.log(res)
            console.log(jsonCategory)
            window.location.reload()
        }
    }
    


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form encType='multipart/form-data '>
                        <div class="form-group">
                            <label>Category Name</label>
                            <input class="form-control" placeholder="Enter category name" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
                        </div>
                        
                    </form>                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} >
                    Close
                </Button>
                <Button variant="primary" onClick={addCategory}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>  
        </>
    );
};

export default AddNew;