import React, { useContext, useState } from 'react';
import Navbar from '../../Reused/Navbar/Navbar';
import './Login.scss';
import facebook from '../../../Images/logos/facebook.png'
import google from '../../../Images/logos/google.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {userContext} from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';

 

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {       
    
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) { 
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
            console.log(signedInUser);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          }); 
    }

    const handleFacebookSignIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            const {displayName, email} = result.user;
            const fbSignedInUser = {name: displayName, email};
            setLoggedInUser(fbSignedInUser);
            history.replace(from);            
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,        
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        error: '',
        success: false         
    })


    const handleBlur = (e) => {
        let isFieldValid = true;
        if(e.target.name === 'email'){
           isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
           console.log(isFieldValid)
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length >5;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }        
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    } 

    const handleSubmit = (e) => {
        console.log(user.email, user.password, user.firstName);

        //for new user create an account
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
            const newUserInfo = {...user};
            newUserInfo.error = '';
            newUserInfo.success = true;
            setUser(newUserInfo);                
            setLoggedInUser(newUserInfo);
            // history.replace(from);
            console.log(res)
        })
        .catch(function(error) {
            // Handle Errors here.
            const newUserInfo = {...user};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUser(newUserInfo);
            // ...
          });
        
        //for login a user
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);                               
                setLoggedInUser(newUserInfo);                
                history.replace(from);
                console.log(res)
            })
            .catch(function(error) {
                // Handle Errors here.
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
                // ...
              });
        }

        e.preventDefault();
    }


    return (
        <div>
            <Navbar></Navbar>
            <center>                
                <div class="card" style={{width:'30rem',marginTop: '3rem',borderColor:'gray'}}>
                    <div class="card-body">
                        <h4>{newUser ? 'Create An Account' : 'Login'}</h4>
                        <form onSubmit={handleSubmit}>
                        {newUser && <input type="text" onBlur={handleBlur} name="firstName" placeholder="First Name" required/>}
                        {newUser && <input type="text" onBlur={handleBlur} name="lastName" placeholder="Last Name" required/>}
                            <input type="email" onBlur={handleBlur} name="email" placeholder="User name/Email" required/>
                            <br/>
                            {newUser && <span className="text-danger">Your password must be 6 character & also using one or more number</span>}
                            <input type="Password" onBlur={handleBlur} name="password" placeholder="Password" required/>                            
                            <br/>                            
                            <input type="submit" value={newUser ? "Create an account" : 'login'} style={{width:'24rem',padding:'8px',color:'#FFFFFF', backgroundColor:'#275A53',textAlign:'center'}}/>
                        </form>
                        <p className="text-center">{!newUser ? "Don't have an account?" : 'Already have an account?'} 
                        <input type="checkbox" style={{                                
                                marginLeft: "5px",
                                width:"10px",                                                                
                                padding: "0px", 
                                color: "black"}} onChange={() => setNewUser(!newUser) } name="newUser"/>
                        <label htmlFor="newUser"  className="text-warning">{!newUser ? "Create an account" : 'login'}</label>
                        
                        </p>                        
                    </div>
                </div>
                <p style={{color:'red',fontSize:'20px',textAlign:'center',marginTop:'20px'}}></p>
                    {
                        user.success && <p style={{color:'green',fontSize:'20px',textAlign:'center',marginTop:'20px'}}>User{newUser ? 'created' : 'Logged in'} successfully</p>
                    }
                <h5 className="line">Or</h5>
                <div className="">
                    <div onClick={handleFacebookSignIn} className="google d-flex justify-content-between">
                        <img src={facebook}/>
                        <h6 className="text-center">Continue with Facebook</h6>
                    </div>                    
                    <div onClick={handleGoogleSignIn} className="google d-flex justify-content-between">
                        <img src={google}/>
                        <h6 className="text-center">Continue with Google</h6>
                    </div>
                </div>
            </center>            
        </div>
    );
};

export default Login;