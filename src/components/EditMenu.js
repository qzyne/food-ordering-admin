import {React, useEffect, useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {editMenu} from '../services/MenuService';

const EditMenu = (props) => {
    const {show, handleClose, dataMenuEdit} = props;
    const [menuName, setMenuName] = useState('');
    const [menuDescription, setMenuDescription] = useState('');
    const [isActive, setIsActive] = useState('');

    const handleEditMenu = async (e) => {
        e.preventDefault();
        
        const menu = {
            id: Number(dataMenuEdit.id),
            menuName: menuName,
            menuDescription: menuDescription,
            isActive: Number(isActive)
        }

        const jsonMenu = JSON.stringify(menu);
        var res = await editMenu(dataMenuEdit.id,jsonMenu)
        if(res) {
            console.log(">>> RES: ",res)
            console.log(jsonMenu)
            window.location.reload()
        }
    }

    useEffect(() => {
        if (show === true) {
            setMenuName(dataMenuEdit.menuName);
            setMenuDescription(dataMenuEdit.menuDescription);
            setIsActive(dataMenuEdit.isActive);
        }
    }, [dataMenuEdit])

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit A Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div class="form-group">
                            <label>Menu Name</label>
                            <input class="form-control" value={menuName} onChange={(e) => setMenuName(e.target.value)}/>
                        </div>
                        <div class="form-group">
                            <label>Menu Description</label>
                            <input class="form-control" value={menuDescription} onChange={(e) => setMenuDescription(e.target.value)}/>
                        </div>
                        <div class="form-group my-3">
                            <span>Status</span>
                            <div>
                            {/* {isActive === 1 ? (
                                <>
                                <input type="radio" checked="checked" name="status" value= "1" onChange={(e) => setIsActive(e.target.value)}/>
                                <label for="Choice1">&nbsp; Active</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" name="status" value="0" onChange={(e) => setIsActive(e.target.value)}/>
                                <label for="Choice2">&nbsp; Inactive</label>
                                </>
                            ) : (
                                <>
                                <input type="radio"  name="status" value= "1" onChange={(e) => setIsActive(e.target.value)}/>
                                <label for="Choice1">&nbsp; Active</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" checked="checked" name="status" value="0" onChange={(e) => setIsActive(e.target.value)}/>
                                <label for="Choice2">&nbsp; Inactive</label>
                                </>
                            )} */}
                            <input type="radio"  name="status" value= "1" onChange={(e) => setIsActive(e.target.value)}/>
                                <label for="Choice1">&nbsp; Active</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" name="status" value="0" onChange={(e) => setIsActive(e.target.value)}/>
                                <label for="Choice2">&nbsp; Inactive</label>
                            </div>
                        </div>
                    </form>                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} >
                    Close
                </Button>
                <Button variant="primary" onClick={handleEditMenu}>
                    Confirm
                </Button>
                </Modal.Footer>
            </Modal>  
        </div>
    );
};

export default EditMenu;