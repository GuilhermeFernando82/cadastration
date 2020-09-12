import React, {Component } from 'react';
import './assets/styles/style.css';
import './media.css';
import Comment from './nav';
import Footer from './footer';
export default class Logado2 extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            fileInput: null,
            desc: '',
            logado_id: sessionStorage.getItem('@web/id'),
            logado_name: sessionStorage.getItem('@web/name'),
            logado_email: sessionStorage.getItem('@web/email'),
            //data: this.props.location.state.data,
            
            
        }; 
        this.insertProducts = this.insertProducts.bind(this);
       
        /*
        firebase.firestore().collection('produtos').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                renderAccount(doc);
            })
        })*/
}


    insertProducts(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "essecookie=s%3AT3dsFK6PjWtTD8hZ1O5tHMIV1CMZx3cY.7%2BL65kpAIm8rGFCRJrBS7sMq2%2Fd6JUnxqUHEquP6UUU");
        var raw = JSON.stringify({"name":this.state.name,"desc":this.state.desc,"user_name":sessionStorage.getItem('@web/name'),"img":document.getElementById('files').value});
 


        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw, 
        redirect: 'follow'
        };

        fetch("http://192.168.15.18:8080/post", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
   
    render(){
        return(
            
        <React.Fragment>
        <Comment>

        </Comment>
    
        <div class="container" style={{marginBottom:870}} >
        <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 
        <form  action="http://192.168.15.18:8080/post" method="post" enctype="multipart/form-data">
        <input type="text" name="name"/><br></br>
        <input type="text" name="desc" /><br></br>
        <input type="file" id="files" name="file"/><br></br>
        <input type="hidden" name="user_name"  value={sessionStorage.getItem('@web/name')}/>
        <input type="submit" value="Send" name="submit"/>
        </form>
   
            
        </div>
        <Footer>
            
        </Footer>
     
        </React.Fragment>
       
        );
        
    }
    
}
