import React from 'react';
import '../style/ForgotPW.css';
import imgLogo from '../assets/images/logo.png';  
const ForgotPW = () => {
    return (
        <div className='ForgotPW-container container-fluid'>
            <div className='row center'>
                <div className='FG-box col center mt-3 text-center'>
                    <div>                    
                        <img className="logoimg img-fluid mt-4" src={imgLogo} alt="Logo"/>
                        <div className='titleFG px-4'>McDonald's</div>
                    </div>
                    <p className='mt-5 fs-4'>Forgot your password?</p>
                    <div>Enter your phone number you added to your account.</div>
                    <input className='confirmBox mt-3 p-1' type='text'/>
                    <br/>
                    <br/>
                    <br/>
                    <button className='buttonRetrieval p-2 text-white text-center'>Password retrieval</button>
                    <br/>
                    <br/>
                    <a href="" className='comeback fw-light'>Come back</a>
                </div>
            </div>

        </div>
    );
};

export default ForgotPW;