import {React, useState, useEffect} from 'react';
import '../style/Menu.css';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import DashboardTop from '../components/DashboardTop';
import { FaRegTrashAlt, FaBook } from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";
import {fetchAllMenus, deleteMenu, searchMenu} from '../services/MenuService.js'; 
import AddNewMenu from '../components/AddNewMenu.js';
import EditMenu from '../components/EditMenu.js';
import { FaSearch } from "react-icons/fa";

const Menu = () => {
    const title = 'Menu';
    const [listMenus, setlistMenus] = useState([]);
    const [showEditMenu, setShowEditMenu] = useState(false);
    const [showAddNewMenu, setShowAddNewMenu] = useState(false);
    const [dataMenuEdit, setdataMenuEdit] = useState({});
    const [dataShowMenuProduct, setDataShowMenuProduct] = useState({});
    const [key, setKey] = useState('');

    const handleOnClickSearch = async () => {
        var result = await searchMenu(key);
        if(result) {
            setlistMenus(result.data);
            console.log(result.data);
        }
    }

    useEffect(() => {
        getMenus();
    }, [])
    const handleClose = () => {
        setShowAddNewMenu(false)
    } 
    const handleCloseEdit = () => {
        setShowEditMenu(false)
    } 
    const handleEditMenu = async (menu) => {
        setShowEditMenu(true);
        setdataMenuEdit(menu)
    }
    const handleShowMenuProduct = async (menu) => {
        setDataShowMenuProduct(menu)
    }

    const getMenus = async () => {
        let res = await fetchAllMenus();
        setlistMenus(res.data.data);
    }

    const handleDeleteMenu = async (id) => { 

        try{
            var res = deleteMenu(id);
            if(res) {
                console.log(res)
                
                window.location.reload()
            }
        }catch(e){
            console.log(e);
        }
        // console.log((">>>Delete:", id))
        // let res = await deleteMenu(id);
    }

    
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
                            <div className='createMenu d-flex p-2' onClick={() => setShowAddNewMenu(true)}>
                                CREATE MENU
                            </div>
                        </div>
                    </div>
                </div>
                <table className='table border border-secondary mt-4'>
                    <thead>
                        <tr>
                            <th>Menu ID</th>
                            <th>Menu name</th>   
                            <th>Menu Description</th>                        
                            <th>Status</th>
                            <th className='text-center'>Products</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        { listMenus && listMenus.length > 0 &&
                            listMenus.map((item, index) => {
                                return (
                                <tr key = {`menus-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.menuName}</td>
                                    <td>{item.menuDescription}</td>
                                    <td>{item.isActive === 0 ? " Inactive" : "Active"}</td>
                                    <td className='icon-detailProduct text-center'>
                                        <Link to={`/MenuDetail/${item.id}`} className='icon-detailProduct'><FaBook/></Link>
                                    </td>
                                    <td className='text-center'>
                                        <Link onClick= {() => handleEditMenu(item)}>
                                            <HiMiniPencilSquare className='icon-detailProduct'/>
                                        </Link>
                                        <a onClick={() => handleDeleteMenu(item.id)} className='removeProduct'>
                                            <FaRegTrashAlt />
                                        </a>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <AddNewMenu
                    show = {showAddNewMenu}
                    handleClose= {handleClose}
                />

                <EditMenu
                    show = {showEditMenu}
                    handleClose= {handleCloseEdit}
                    dataShowMenu = {dataShowMenuProduct}
                    dataMenuEdit = {dataMenuEdit}
                />
            </div>
        </div>
    );
};

export default Menu;