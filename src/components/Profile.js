import React from 'react';
import imgAccount from '../assets/images/account.jpg';
import { FaGear } from 'react-icons/fa6';
import {BiSolidLogOutCircle} from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';


const Profile = (props) => {
    const isVisible = props.isVisible;
    const navigate = useNavigate();
    const setIsVisible = props.setIsVisible;
    const handleLogOut = () => {
        window.localStorage.removeItem("token");
        navigate('/Login');
    }
    return (
        <>
            <img onClick={() => setIsVisible(!isVisible)} alt='AccountImage' className='accountImg' src={imgAccount}/>
            {isVisible && (
                <div className='setting'>
                        <div className='setting-box'>
                        <center>
                        <img className="account-img-setting" alt="account user" src={imgAccount}/>
                        </center>
                            <ul>
                                <li><div onClick={handleLogOut} className='LinkSetting'><BiSolidLogOutCircle className='iconSetting'/>Log out</div></li>
                            </ul>
                        </div>
                </div>
            )} 
        </>
    );
};

export default Profile;