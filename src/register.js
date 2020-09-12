import React, {Component, setState, useState } from 'react';
import { matchPath } from 'react-router-dom';
import { Collapse, Button, Dropdown,DropdownToggle,DropdownItem,DropdownMenu  } from 'reactstrap';
import './assets/styles/style.css';
import './media.css';
import Comment from './nav';
import Footer from './footer';
export default class Cadastro extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            isOpen: false,
            input:document.querySelector('input[type="file"]'),
          
        }; 

        this.cadastrar = this.cadastrar.bind(this);
        this.toggle = this.toggle.bind(this);
      
        /*
        firebase.firestore().collection('produtos').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                renderAccount(doc);
            })
        })*/
}
    toggle(){
        this.setState({isOpen: !this.state.isOpen}) ;
    }

    // This will upload the file after having read it
    

// Add a listener on your input
// It will be triggered when a file will be selected
    
    cadastrar(e){
        const url = "http://192.168.15.18:8080/register";
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "connect.sid=s%3AQMPH-Eg9_NoDy_yUIl52mAB3Nu_7el-u.H2BiDYzqBLZI0qcFFHObnFf0ITBCO97bPndVSWkQO2I");
        const formData = new FormData();
        

       
        formData.append('file', this.state.input.files[0]);
        
        
        var raw = JSON.stringify({"name":this.state.name,"email":this.state.email,"password":this.state.password});

        var requestOptions = {
        method: 'POST',
        body: raw,formData,
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .then(alert('Cadastrado com sucesso!!!'))
        .catch(error => console.log('error', error));
        
         e.preventDefault()
       
    }
    
    render(){
      
        return(
        <React.Fragment>
        <Comment>

        </Comment>
    
        <div class="container">
        
            <div class="card bg-dark border border-success caixa">
                <div class="col-12 border border-success">
                    <label class="text-success mb-2 m-2 p-2" >Register</label>
                </div>            
                <form class="p-3"  action="http://192.168.15.18:8080/register" /*onSubmit={this.cadastrar}*/>
                <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-success text-md-right">Nome</label>

                            <div class="col-md-6">
                                <input id="password" type="text" class="bg-secondary border border-success text-success  form-control" name="name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} required autocomplete="current-password"/>
                            </div>
                  </div>
                  <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-success text-md-right">E-mail</label>

                            <div class="col-md-6">
                                <input id="password" type="text" class="bg-secondary border border-success text-success  form-control" name="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} required autocomplete="current-password"/>
                            </div>
                  </div>
                  <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-success text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="bg-secondary border border-success text-success  form-control" name="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} required autocomplete="current-password"/>
                            </div>
                  </div>
                  <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-success text-md-right">Carregar Imagem</label>
                            <div class="col-md-6">
                            <input type="file" id="files"  value={this.state.input} onChange={(e)=>this.setState({input:e.target.value})} name="file"/>
                            </div>
                  </div>
                  
                  <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-success">
                                    Registrar
                                </button>
                            </div>
                  </div>
                  </form>
            </div>
        </div>
        <Footer>
            
        </Footer>
     
        </React.Fragment>
       
        );
    }
    
}
