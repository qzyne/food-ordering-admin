import {React, useState } from 'react';
import imgBG from '../assets/images/MCbg.png';
import '../style/LogIn.css';
import { FaRegEye, FaEyeSlash} from "react-icons/fa"; 
import {Login} from "../services/LoginService"; 
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import {getUser} from '../services/UserService'; 
import { Nav } from 'react-bootstrap';

const LogIn = () => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  
  // đào true false biên show (click vào thì đổi state)
  const handleShow = () => {
    setShow(!show)
  };

  const handleLogIn = async (e) => {
    e.preventDefault(); 
    if (!username || !password) {
      alert('Username/Password is required!');
    }

    const user = {
      username: username,
      password: password
    } 
    
    const jsonLogin = JSON.stringify(user);
    var res = await Login(jsonLogin);
    if (res) {
      console.log(res);
      var decode = jwtDecode(res.data.data.token);
      var role = decode["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]; 
      if (role === "Admin") {
        window.localStorage.setItem("token", res.data.data.token);
        navigate("/");
      }
      else {
        alert("Account is not Admin!");
      }
    }else{
      alert("Email/Password is wrong!");
    }

  }
  return (
    <div className='LogInContainer contain-fluid d-flex'>
          <img className='LogInbg d-none d-lg-block text-center my-auto' src={imgBG} alt='Background'/>
          <div className='loginBox bg-white'>
            <div className='my-5'>
              <h3 className='text-center fw-bolder'>McDonald's - Log in</h3>
              <p className='text-center fw-light'>Hello, please enter your login information</p>
              <br/>
              {/* form login */}
              <form className='text-center'>
                <span className='phoneNumber'>Username</span><br/>
                <input className='phoneNumberBox p-1 my-2' type='text' 
                  value= {username} onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <span className='password'>Password</span><br/>
                <input className='passwordBox p-1 my-2' type={show ? 'text' : 'password'}
                   value={password} onChange={(e) => setPassword(e.target.value)}
                />
                <div className='iconEye' onClick={handleShow} >{show ? <FaEyeSlash/> : <FaRegEye/>}</div>
                <div className='forgotPassword mt-3 fw-light'>Forgot password?</div>
                <br/>
                <button className='buttonLogIn w-50 p-2 text-white text-center' onClick={handleLogIn}>Log in</button>
              </form>
            </div>
          </div>


    </div>
  );
};

export default LogIn;