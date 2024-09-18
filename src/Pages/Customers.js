import {React, useState, useEffect} from 'react';
import '../style/Customer.css';
import DashboardTop from '../components/DashboardTop';
import { FaSearch, FaBook, FaRegTrashAlt } from "react-icons/fa";
import {getUser, searchUser, deleteUser} from "../services/UserService";
import { Link } from 'react-router-dom';


const Customers = () => {
    const title = 'Customers';
    const [key, setKey] = useState('');
    const [listUsers, setlistUsers] = useState([]);
    
    const handleOnClickSearch = async () => {
        var result = await searchUser(key);
        if(result) {
            setlistUsers(result.data);
            console.log(result.data);
        }
    }

    const handleDeleteUser = async (id) => { 
        let res = await deleteUser(id);
        if(res) {
            window.location.reload();
        }
    }

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        let res = await getUser();
        setlistUsers(res.data.data);
    }
    return (
        <div className='main-content'>
            <DashboardTop title = {title}/>  
            <div>
                <div className='row d-flex'>
                    <div className='col-lg-6 col-12'>
                        <input className='searching mt-3 px-5 p-1' value={key} onChange={(e) => setKey(e.target.value)}/>
                        <div className='searchIcon'><FaSearch/></div>
                        <button className='btnSearch p-1 px-2' onClick={() => handleOnClickSearch()}>Search</button>
                    </div>

                </div>
                <table className='table border border-secondary mt-4'>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>User name</th>   
                            <th>Phone Number</th>                        
                            <th>Address</th>
                            <th className='text-center'>Order</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    { listUsers && listUsers.length > 0 &&
                            listUsers.map((item, index) => item.roleId === 2 ? (
                                <tr key = {`menus-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.phonenumber}</td>
                                    <td>{item.address}</td>
                                    <td className='icon-detailProduct text-center'>
                                        <Link to = {`/CustomerDetail/${item.id}`} className='icon-detailProduct'><FaBook/></Link>
                                    </td>
                                    <td className='text-center'>
                                    <a onClick={() => handleDeleteUser(item.id)} className='removeProduct'>
                                            <FaRegTrashAlt />
                                        </a>
                                    </td>
                                </tr>
                            ): null)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Customers;