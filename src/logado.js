import React, {Component } from 'react';
import './assets/styles/style.css';
import './media.css';
import Comment from './nav';
import Footer from './footer';
import { Redirect } from 'react-router';
export default class Logado extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            items:[],
            user:[],
            name: '',
            email: '',
            password: '',
            logado_id: sessionStorage.getItem('@web/id'),
            logado_name: sessionStorage.getItem('@web/name'),
            logado_email: sessionStorage.getItem('@web/email'),
            //data: this.props.location.state.data,
            redirect: false,
            
        }; 
        this.getUser = this.getUser.bind(this);
        this.ir = this.ir.bind(this);
        /*
        firebase.firestore().collection('produtos').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                renderAccount(doc);
            })
        })*/
}
        componentDidMount(){
            this.getUser()
        }
        ir(){
            this.setState({redirect:true});
        }
        getUser(){
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Cookie", "essecookie=s%3Awg6vDiwzYxSDCLH8UCMKeupXZTOwdssM.hNF2r5ZSIuSz75Y8A8W051ifQ%2B8go6OwJPtx7TO0tY8");
            var raw = JSON.stringify({"email":"s@gmail.com","password":"123"});
    
            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };
    
            fetch("http://192.168.15.18:8080/user", requestOptions)
            .then(response => response.json())
            .then(response => alert(response.name))
            .then(response => {this.setState({user: response || []})})
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            }

    render(){
        if(this.state.redirect){
        return  <Redirect
                to={{
                pathname: "/logado2",                
                }}
            />
        }
        return(
            
        <React.Fragment>
        <Comment>

        </Comment>
    
        <div class="container" style={{marginBottom:870}} >
            <ul>
                <li>{this.state.logado_id}</li>
                <li>{this.state.logado_name}</li>
                <li>{this.state.logado_email}</li>
            
            </ul>
            <button class="btn btn-success" onClick={this.ir}>Ir</button>
       
        
            
        </div>
        <Footer>
            
        </Footer>
     
        </React.Fragment>
       
        );
        
    }
    
}
