
import React, { Component } from 'react';
import {Route, Redirect } from 'react-router-dom';

//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in

const PrivateRoute =({component:Component,...rest})=>{
    return<Route {...rest} render={(props)=>{
        if(localStorage.getItem('token')){
            return <Component {...props}/>
        }
        else{
            return <Redirect to="/protected"/>
            
        }
    }}/>
}
export default PrivateRoute;  