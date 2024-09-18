import {React, useState} from 'react';
import '../style/ForgotPW.css';
import imgLogo from '../assets/images/logo.png';  
import { FaCheckCircle, FaExclamationCircle} from "react-icons/fa";

const ChangePW = () => {
    const[isLowercase, setIsLowercase] = useState(false);
    const[IsUppercase, setIsUppercase] = useState(false);
    const[isNumber, setIsNumber] = useState(false);
    const[isSpeacial, setIsSpeacial] = useState(false);
    const[isLength, setIsLength] = useState(false);
    const handleOnChange = (value) => {
        // regrex 
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const speacial = new RegExp('(?=.*[!@#\$%\^&\*])');
        const length = new RegExp('(?=.{8,})');

        // lowercase 
        if (lower.test(value)) {
            setIsLowercase(true);
        }
        else {
            setIsLowercase(false);
        }
        // Uppercase 
        if (upper.test(value)) {
            setIsUppercase(true);
        }
        else {
            setIsUppercase(false);
        }
        // Number 
        if (number.test(value)) {
            setIsNumber(true);
        }
        else {
            setIsNumber(false);
        }
        // Speacial 
        if (speacial.test(value)) {
            setIsSpeacial(true);
        }
        else {
            setIsSpeacial(false);
        }
        // length 
        if (length.test(value)) {
            setIsLength(true);
        }
        else {
            setIsLength(false);
        }

    }

    return (
        <div className='ForgotPW-container container-fluid'>
            <div className='row'>
                <div className='FG-box col mt-3'>
                    <div className='text-center'>                    
                        <img className="logoimg img-fluid mt-4" src={imgLogo} alt="Logo"/>
                        <div className=' titleFG px-4'>McDonald's</div>
                    </div>
                    <p className='mt-4 fs-4 text-center'>Forgot your password?</p>
                    <div className='text-center'>
                        <div className='newPasstitle'>Enter your new password</div>
                        <input className='confirmBox mt-2 p-1' type='text' onChange={(e) => handleOnChange(e.target.value)}/>
                    </div>
                    <div className='validationCheck mt-2'>
                        <div>
                            {
                                isLowercase ? (<FaCheckCircle className='icon-true'/>) 
                                : (<FaExclamationCircle className='icon-false'/>)
                            }
                            <span className='m-2'>At least one lowwercase letter</span>
                        </div>

                        <div>
                            {
                                IsUppercase ? (<FaCheckCircle className='icon-true'/>) 
                                : (<FaExclamationCircle className='icon-false'/>)
                            }
                            <span className='m-2'>At least one uppercase letter</span>
                        </div>

                        <div>
                            {
                                isNumber ? (<FaCheckCircle className='icon-true'/>) 
                                : (<FaExclamationCircle className='icon-false'/>)
                            }
                            <span className='m-2'>At least one number</span>
                        </div>

                        <div>
                            {
                                isSpeacial ? (<FaCheckCircle className='icon-true'/>) 
                                : (<FaExclamationCircle className='icon-false'/>)
                            }
                            <span className='m-2'>At least one speacial character</span>
                        </div>

                        <div>
                            {
                                isLength ? (<FaCheckCircle className='icon-true'/>) 
                                : (<FaExclamationCircle className='icon-false'/>)
                            }
                            <span className='m-2'>At least 8 character</span>
                        </div>
                    </div>

                    <br/>
                    <div className='text-center'>
                        <button className='buttonRetrieval p-2 text-white text-center'>Done</button>
                    </div>

                    <br/>
                    <br/>
                    <div className='text-center'><a href="" className='comeback fw-light'>Come back</a></div>
                </div>
            </div>

        </div>
    );
};

export default ChangePW;