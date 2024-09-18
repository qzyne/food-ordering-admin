import {React, useState} from 'react';
import imgDashboard from '../assets/images/dashboard.png';
import '../style/DashboardTop.css';
import Profile from './Profile';



const DashboardTop = (props) => {
    const title = props.title;
    const [isVisible, setIsVisible] = useState(false);
    const nameAccount = props.nameAccount;
    return (
        <div className='main-content-top'>
            <div className="content-top-title">
                {title}
            </div>
            <div className='welcome col-xs-12' style={{backgroundColor:isVisible ? "#8B712D" :"#FEBC0C"}}>
                <div className='welcome-box'>
                <Profile isVisible={isVisible} setIsVisible = {setIsVisible}/>
                    <div style={{ visibility:isVisible ? "hidden" : "visible"}} className='welcome-name'>
                        Welcome &nbsp; 
                        <span style={{fontWeight:"800"}}>{nameAccount}</span>
                    </div>
                </div>
                <img style={{ visibility:isVisible ? "hidden" : "visible"}} alt='Logo-Title' className='dashboardImg' src={imgDashboard}/>
            </div>
        </div>
        
    );
};

export default DashboardTop;