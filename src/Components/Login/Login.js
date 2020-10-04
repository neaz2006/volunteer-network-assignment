import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import logo from '../../Images/logos/Group 1329.png';
import google from '../../Images/logos/g2.jpg'
import './Ligin.css'



firebase.initializeApp(firebaseConfig)

const Login = () => {
    const [user,setUser] = useState({
        isSignIn: false,
        name: '',
        email: ''
    });

    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    const history = useHistory();
    const  location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    // Google Sign In
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = ()=>{
        firebase.auth().signInWithPopup(googleProvider)
        .then( res => {
           const {displayName,email} = res.user;
           const userInfo = {
               isSignIn: true,
               name: displayName,
               email: email
           }
           setUser(userInfo);
           setLoggedInUser(userInfo);
           history.replace(from);
          })
          .catch( error => {
           console.log(error);
          });
    }

  
    return (
        <div className="log" style={{height: "500px"}}>
        <Link to="/" className='text-white logo'><img className="logo" src={logo} alt="" /></Link>            
        <div className="login">    
            <h2>Login with</h2>
            <img className="justify-content-start google" src={google} alt="" />       
            <button onClick={handleGoogleSignIn} className="btn_g">Continue with google</button>
        </div>
    </div>
    );
};

export default Login;