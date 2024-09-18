import {React, useState, useEffect } from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../style/AddNewProduct.css';
import {postMenu} from '../services/MenuService';

const AddNewMenu = (props) => {
    const [menuId, setMenuId] = useState(0); 
    const {show, handleClose} = props;
    const [menuName, setMenuName] = useState('');
    const [isActive, setIsActive] = useState(0);
    const [description, setDescription] = useState('');

    const addMenu = async (e) => {
        e.preventDefault();
        
        const menu = {
            id: Number(menuId),
            menuName: menuName,
            isActive: Number(isActive),
            menuDescription: description
        }

        const jsonmenu = JSON.stringify(menu);
        try{
            var res = await postMenu(jsonmenu)
            if(res) {
                console.log(res)
                console.log(jsonmenu)
                window.location.reload()
            }
        }catch(e){
            console.log(e);
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add New Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form encType='multipart/form-data '>
                        <div class="form-group">
                            <label>Menu Name</label>
                            <input class="form-control" placeholder="Enter menu name" value={menuName} onChange={(e) => setMenuName(e.target.value)}/>
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
                        <div class="form-group my-3">
                            <label>Description</label>
                            <input class="form-control" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        </div>

                        
                    </form>                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} >
                    Close
                </Button>
                <Button variant="primary" onClick={addMenu}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>  
        </>
    );
};

export default AddNewMenu;