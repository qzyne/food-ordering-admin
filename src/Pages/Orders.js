import {React, useState, useEffect} from 'react';
import '../style/Orders.css';
import DashboardTop from '../components/DashboardTop';
import Search from '../components/Search';
import { getOrder } from '../services/OrderService';
import { FaRegTrashAlt, FaBook } from "react-icons/fa";
import Status from '../components/Status';

const Orders = () => {
    
    const title = 'Orders';
    const [listOrders, setlistOrders] = useState([]);
    useEffect(() => {
        getOrders();
    }, [])
    const getOrders = async () => {
        let res = await getOrder();
        console.log(res.data);
        setlistOrders(res.data);
    }
    return (
        <div className='main-content'>
            <DashboardTop title = {title}/>
            <div>
                <Search/>
                <table className='table border border-secondary mt-4'>
                    <thead>
                        <tr>
                            <th className='text-center'>Order ID</th>
                            <th className='text-center'>User ID</th>   
                            <th className='text-center'>Customer name</th>   
                            <th className='text-center'>Customer Phone</th>                        
                            <th className='text-center'>Customer Address</th>
                            <th className='text-center'>Total Price</th>
                            <th className='text-center'>Quantity Product</th>
                           
                            
                        </tr>
                    </thead>

                    <tbody>
                        { listOrders && listOrders.length > 0 &&
                            listOrders.map((item, index) => {
                                return (
                                <tr key = {`menus-${index}`}>
                                    <td className='text-center'>{item.id}</td>
                                    <td className='text-center'>{item.userId}</td>
                                    <td className='text-center'>{item.customerName}</td>
                                    <td className='text-center'>{item.customerPhone}</td>
                                    <td className='text-center'>{item.customerAddress}</td>
                                    <td className='text-center'>{item.totalPrice}</td>
                                    <td className='text-center'>{item.quantity}</td>

                                   

                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;