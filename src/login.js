import React, {Component, setState, useState } from 'react';
import { matchPath } from 'react-router-dom';
import { Collapse, Button, Dropdown,DropdownToggle,DropdownItem,DropdownMenu  } from 'reactstrap';
import './assets/styles/style.css';
import './media.css';
import Comment from './nav';
import Footer from './footer';
import { Redirect } from 'react-router';
export default class Login extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            redirect: false,
            user: [],
            //data: []

            
        }; 

        this.login = this.login.bind(this);
        
        
       
        /*
        firebase.firestore().collection('produtos').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                renderAccount(doc);
            })
        })*/
}
    
    login(evt){
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "essecookie=s%3Awg6vDiwzYxSDCLH8UCMKeupXZTOwdssM.hNF2r5ZSIuSz75Y8A8W051ifQ%2B8go6OwJPtx7TO0tY8");
        
        var raw = JSON.stringify({"email":this.state.email,"password":this.state.password});
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://192.168.15.18:8080/authenticate", requestOptions)
          .then(response => response.json())
          .then(response => {this.setState({user: response || []})})
          .then(() => {this.setState({redirect:true})})
          .catch(error => console.log('error', error));
          evt.preventDefault()
        }
    
    render(){
       if(this.state.redirect){
        sessionStorage.setItem('@web/id', this.state.user.id)
        sessionStorage.setItem('@web/name', this.state.user.name)
        sessionStorage.setItem('@web/email', this.state.user.email)
        return  <Redirect
                to={{
                pathname: "/logado",                
                //state: { data: this.state.user }
                }}
            />

       } 
        
        return(
        <React.Fragment>
        <Comment>

        </Comment>
    
        <div class="container" >
        
            <div class="card bg-dark border border-success caixa">
                <div class="col-12 border border-success">
                    <label class="text-success mb-2 m-2 p-2" >Login</label>
                </div>            
                <form class="p-3" onSubmit={this.login} style={{marginBottom:40}}>
                  <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-success text-md-right">E-mail</label>

                            <div class="col-md-6">
                                <input type="text" class="bg-secondary border border-success text-success  form-control" name="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} required autocomplete="current-password"/>
                            </div>
                  </div>
                  <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-success text-md-right">Password</label>

                            <div class="col-md-6">
                                <input type="password" class="bg-secondary border border-success text-success  form-control" name="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} required autocomplete="current-password"/>
                            </div>
                  </div>
                  
                  <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-success" style={{width:120, fontSize:12}}>
                                    Logar
                                </button>
                            </div>
                  </div>
                  </form>
            </div>
        </div>
        <h1>{this.state.user.name}</h1>
        
        <Footer>
            
        </Footer>
        
     
        </React.Fragment>
       
        );
    }
    
}
