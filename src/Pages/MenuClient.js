import {React, useEffect, useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import {fetchAllMenus} from '../services/MenuService';
import Navbar from 'react-bootstrap/Navbar';
import '../style/MenuClient.css';

const MenuClient = () => {
    const [listMenu, setMenu] = useState([]);

    useEffect(() => {
        getMenu();
    }, [])

    const getMenu = async () => {
        let res = await fetchAllMenus();
        setMenu(res.data);
        console.log(listMenu[1])
    }

    return (
        
        <div className='main-content'>
                {
                    listMenu.map((item, index) => item.isActive === 1 ? (
                        <>
                            <div key = {index} className='categoryName'>{item.menuName}</div>    
                            <div className='container'>

                                <div className='row'>
                                    {
                                        item.products.map((a, b) => a.isActive === 1 ? (
                                            
                                        <div className='product col-3 mx-5 my-2'>
                                            <div className='imgProduct'><img src= {`http://localhost:5143/images/${a.imagePath}`} alt={a.productName}/></div>
                                            <div className='text-center'>{a.productName}</div>
                                            <div className='text-center'>
                                                {a.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}
                                            </div>
                                            <div className='text-center p-2'>
                                                <button className='addbtn p-1 px-4'>Add</button>
                                            </div>
                                        </div>
                                        ) : null)
                                    }
                                </div>
                            
                            </div>         
                        </>

                    ) : null)
                } 
        </div>

    );
};

export default MenuClient;