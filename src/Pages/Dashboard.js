import React from 'react';
import '../style/Dashboard.css';
import DashboardTop from '../components/DashboardTop';
import DashboardMain from '../components/DashboardMain';

const Dashboard = (props) => {
    const title = 'Dashboard';
    const orderList = props.orderList;
    const nameAccount = props.nameAccount;
    const revenue = props.revenue;
    const orders = props.orders;
    const inventory = props.inventory;
    const customers = props.customers;
    return (
        <>
        <div className='main-content'>
            <DashboardTop
                title = {title}
                nameAccount = {nameAccount}
            />
            <DashboardMain 
                orderList = {orderList}
                revenue={revenue}    
                orders={orders} 
                inventory={inventory} 
                customers={customers}
            />

        </div>

        </>

    );
};

export default Dashboard;