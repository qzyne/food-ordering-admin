import {React, useEffect, useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {editCategory} from '../services/CategoryService';

const EditCategory = (props) => {
    const {show, handleClose, dataCategoryEdit,} = props;
    const [categoryName, setCategoryName] = useState('');


    const handleEditCategory = async (e) => {
        e.preventDefault();
        
        const category = {
            id: Number(dataCategoryEdit.id),
            categoryName: categoryName,
        }

        const jsonCategory = JSON.stringify(category);
        var res = await editCategory(dataCategoryEdit.id,jsonCategory)
        if(res) {
            console.log(">>> RES: ",res)
            console.log(jsonCategory)
            window.location.reload()
        }
    }

    useEffect(() => {
        if (show === true) {
            setCategoryName(dataCategoryEdit.categoryName)
        }
    }, [dataCategoryEdit])

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit A Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div class="form-group">
                            <label>Category Name</label>
                            <input class="form-control" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
                        </div>
                    </form>                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} >
                    Close
                </Button>
                <Button variant="primary" onClick={handleEditCategory}>
                    Confirm
                </Button>
                </Modal.Footer>
            </Modal>  
        </div>
    );
};

export default EditCategory;