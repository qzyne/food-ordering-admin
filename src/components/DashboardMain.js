import React from 'react';
import '../style/DashboardMain.css';
import { FaCoins } from "react-icons/fa";
import { 
    FaList,
    FaBasketShopping,
}from 'react-icons/fa6';
import { BiSolidUser } from "react-icons/bi";
import BarChartDemo from '../Pages/BarChartDemo';
import Status from './Status';

const DashboardMain = (props) => {
    const revenue = props.revenue;
    const orders = props.orders;
    const inventory = props.inventory;
    const customers = props.customers;
    const orderList = props.orderList;
    const ReversedOrderList = [...orderList].reverse().slice(0,5);

    return (
        <>
            <div className='px-3 text-white'>
                <div className='container-fluid'>
                    <div className='row my-4'>
                            <div className='col-lg-3 p-1 my-auto'>
                                <div className='cardBox revenue p-3 shadow d-flex justify-content-around align-items-center'>
                                    <div className='value row'>
                                        <FaCoins className='iconCard col-3'/>
                                        <div className=' col-9'>
                                            <h5>{revenue} VND</h5>
                                            <div className='title-name'>Revenue</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 p-1 my-auto'>
                                <div className='cardBox orders p-3 shadow d-flex justify-content-around align-items-center'>
                                    <div className='value row'>
                                        <FaList className='iconCard col-5 align-items-center'/>
                                        <div className=' col-7'>
                                            <h5>{orders}</h5>
                                            <div className='title-name'>Orders</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 p-1 my-auto'>
                                <div className='cardBox inventory p-3 shadow d-flex justify-content-around align-items-center'>
                                    <div className='value row'>
                                        <FaBasketShopping className='iconCard col-5 align-items-center'/>
                                        <div className=' col-7'>
                                            <h5>{inventory}</h5> 
                                            <div className='title-name'>Inventory</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 p-1 my-auto'>
                                <div className='cardBox customers p-3 shadow d-flex justify-content-around align-items-center'>
                                    <div className='value row'>
                                        <BiSolidUser className='iconCard col-5 align-items-center'/>
                                        <div className=' col-7'>
                                            <h5>{customers}</h5> 
                                            <div className='title-name'>Customers</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row my-4'>
                    <div className='col-lg-7 p-1'>
                        <h4 className='title my-4'>Recent Orders</h4>
                        <table className='table border border-secondary'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Customers</th>
                                    <th>Total</th>
                                    <th className='text-center'>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ReversedOrderList.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.customer}</td>
                                        <td>{item.total}</td>
                                        <td>
                                        <Status color={item.status} status = {item.status}/>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='col-lg-5 p-1'>
                        <h4 className=' title my-4'>Revenue Chart</h4>
                        <BarChartDemo/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardMain;