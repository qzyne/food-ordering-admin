import { useState, useEffect } from 'react';
import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Inventory from './Pages/Inventory';
import Customers from './Pages/Customers';
import NotFound from './Pages/NotFound';
import Menu from './Pages/Menu';
import Orders from './Pages/Orders';
import '../src/style/Sidebar.css';
import '../src/style/Dashboard.css';
import '../src/style/Account.css';
import LogIn from '../src/Pages/LogIn';
import Setting from '../src/Pages/Setting';
import ForgotPW from '../src/Pages/ForgotPW';
import ChangePW from '../src/Pages/ChangePW';
import MenuIdDetail from './Pages/MenuDetail';
import AppLayout from './AppLayout';
import ClientLayOut from './ClientLayOut';
import Home from './Pages/Home';
import MenuClient from './Pages/MenuClient';
import HomeContain from './Pages/HomeContain';
import Cart from './Pages/Cart';
import AuthenLayout from './components/AuthenLayout';
import CustomerDetail from './Pages/CustomerDetail';


function App() {

  const orderList = [
    {id: '00003', customer: 'Olivia Rodrigo', total: 1543000, status: 'Is Delivering'},
    {id: '00004', customer: 'Billie Eilish', total: 78000, status: 'Is Delivering'},
    {id: '00005', customer: 'Allan Walker', total: 123000, status: 'Is Delivering'},
    {id: '00006', customer: 'Barack Obama', total: 563000, status: 'Delivered'},
    {id: '00007', customer: 'Michael Jordan', total: 367000, status: 'Cancel'},
    {id: '00008', customer: 'Leonardo DiCaprio', total: 225000, status: 'Delivered'},
    {id: '00009', customer: 'Julia Roberts', total: 300000, status: 'Is Delivering'},
    {id: '00010', customer: 'Bill Gates', total: 540000, status: 'Pending'},
  ];
  const nameAccount = ("Anna Lee");
  const revenue = ("50,558,000");
  const orders = ("456");
  const inventory = ("140");
  const customers = ("5000");
  


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthenLayout/>}>
            
            <Route path='' element={<AppLayout/>}>
              <Route index element = {<Dashboard orderList={orderList} nameAccount={nameAccount} revenue={revenue}
                orders = {orders} inventory = {inventory} customers = {customers}/>}></Route>
              <Route path='/Menu' element = {<Menu/>}></Route>
              <Route path='/Inventory' element = {<Inventory/>}></Route>
              <Route path='/Customer' element = {<Customers/>}></Route>
              <Route path='/Order' element = {<Orders/>}></Route>
              <Route path='MenuDetail/:id' element={<MenuIdDetail/>}></Route>
              <Route  path='CustomerDetail/:id' element={<CustomerDetail/>}></Route>
            </Route>
            <Route path='/Login' element={<LogIn/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}


export default App;
