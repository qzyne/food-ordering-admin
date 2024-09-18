import React from 'react';
import { Outlet } from 'react-router-dom';
import "./ClientLayOut.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";

const ClientLayOut = () => {
    return (
        <div>
            <Navbar bg='warning'>
                <Navbar.Brand href="/McDonald">McDonald</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/Menu">Menu</Nav.Link>
                </Nav>
                    <a className='cart' href='/Cart'>Cart &nbsp;<FaShoppingCart className='cart-icon'/></a>
            </Navbar>
            <Outlet/>
        </div>
    );
};

export default ClientLayOut;