import { React, useState } from 'react';
import logo from '../assets/images/logo.png';

import { 
    FaHouseChimney,
    FaList,
    FaBasketShopping,
    FaBars,
}from 'react-icons/fa6';
import { BiSolidFoodMenu , BiSolidUser } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    // const(biến, func) = useState(giá trị muốn truyền)
    const [isOpen, setIsOpen] = useState(false)
    // function handleClickToggle()
    const handleClickToggle = () => setIsOpen(!isOpen);
    const navItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaHouseChimney/>,
        },
        {
            path: "/Order",
            name: "Orders",
            icon: <FaList/>
        },
        {
            path: "/Inventory",
            name: "Inventory",
            icon: <FaBasketShopping/>
        },
        {
            path: "/Customer",
            name: "Customers",
            icon: <BiSolidUser/>
        },
        {
            path: "/Menu",
            name: "Menu",
            icon: <BiSolidFoodMenu/>
        }
    ]
    return (
        <div className='sidebar-container'>
            <div style={{width:isOpen ? "240px" : "50px"}} className='sidebar'>
            {/* isOpen? nghĩa là true */}
                <div className='top-section'>
                    {/* thu nhỏ thì ẩn logo */}
                    <div style={{display:isOpen ? "block" : "none"}}>
                    <img className='logo' alt="Logo" src = {logo}/>
                    </div>
                   
                    <div style={{marginLeft:isOpen ? "50px" : "-3px"}} className='bars'>
                        <FaBars onClick={handleClickToggle}/>
                    </div>
                </div>  
                {/* showw các navItem */}
                {
                    navItem.map((item, index) => ( 
                        <NavLink to ={item.path} key = {index} className='link' activeclassName="active">
                            <div className='icon'>{item.icon}</div>
                            <div style={{display:isOpen ? "block" : "none"}} className='link-text'>{item.name}</div>
                        </NavLink>
                    ))
                } 
            </div>
        </div>

    );
};

export default Sidebar;